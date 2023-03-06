import { Alert, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Box, Button, Text } from "native-base";
import ButtonComponent from "../../components/ButtonComponent";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextInput from "../../components/TextInput";
import Titles from "../../components/Titles";

const CodeSchema = Yup.object().shape({
  code: Yup.string().required("Requerido"),
});

const CodeConfirmation = ({ navigation, route }: any) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { code: "" },
      validationSchema: CodeSchema,
      onSubmit: (e) => confirmSignUp(e.code),
    }
  );

  const username = route.params;

  const [mostrarTexto, setMostrarTexto] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMostrarTexto(true);
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  async function confirmSignUp(code: string) {
    try {
      await Auth.confirmSignUp(username.username, code);
      Alert.alert("Gracias!", "Su cuenta fue activada con exito");
      navigation.navigate("login");
    } catch (error) {
      console.log("error confirming sign up", error);
      Alert.alert("Error", "Ha ocurrido un error: " + error);
    }
  }

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username.username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
      Alert.alert("Error", "Ha ocurrido un error: " + err);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Titles title="Registro" />
      <Box>
        <Box>
          <Text ml={5} my={2.5} fontSize={15} fontFamily="gloock">
            Ingresa el código enviado a tu email {username.username}
          </Text>
          <TextInput
            icon="terminal"
            placeholder="Código"
            onBlur={handleBlur("code")}
            onChangeText={handleChange("code")}
            touched={touched?.code}
          />
          {errors?.code && (
            <Text fontFamily="gloock" ml={8} color="red.400">
              {errors?.code}
            </Text>
          )}
        </Box>

        {mostrarTexto && (
          <Button
            fontSize={16}
            mx={8}
            bg="transparent"
            _text={{
              color: "fashion.black",
              fontFamily: "gloock",
              fontSize: 13,
            }}
            onPress={() => resendConfirmationCode()}
            _pressed={{ bg: "transparent" }}
          >
            Reenviar código
          </Button>
        )}
      </Box>
      <Box position="absolute" bottom={0} width="100%" pb={10}>
        <ButtonComponent
          bg="fashion.pink"
          buttonLabel="Enviar"
          textColor="white"
          onPress={() => handleSubmit()}
        />
      </Box>
    </SafeAreaView>
  );
};

export default CodeConfirmation;
