import { SafeAreaView } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";
import { Box, Button, Text } from "native-base";
import ButtonComponent from "../../components/ButtonComponent";
import * as Yup from "yup";
import { useFormik } from "formik";
import TextInput from "../../components/TextInput";

const CodeSchema = Yup.object().shape({
  code: Yup.string()
    .min(5, "Muy corto!")
    .max(7, "Muy largo!")
    .required("Requerido"),
});

const CodeConfirmation = ({ navigation, route }: any) => {
  const username = route.params();

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { code: "" },
      validationSchema: CodeSchema,
      onSubmit: (e) => confirmSignUp(e.code, username),
    }
  );

  async function confirmSignUp(username: string, code: string) {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  async function resendConfirmationCode(username: string) {
    try {
      await Auth.resendSignUp(username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box>
        <Box marginTop={4} alignItems="center">
          <Text mb={1} fontFamily="gloock">
            Ingrese el código enviado a su email
          </Text>
          <Box marginBottom={4}>
            <TextInput
              icon="code"
              placeholder="Ingresa el código aquí"
              onBlur={handleBlur("code")}
              onChangeText={handleChange("code")}
              touched={touched?.code}
            />
          </Box>
          {errors?.code && (
            <Text fontFamily="gloock" ml={8} color="red.400">
              {errors?.code}
            </Text>
          )}
        </Box>
        {setTimeout(function () {
          <Button
            fontSize={16}
            mx={8}
            bg="transparent"
            _text={{
              color: "fashion.black",
              fontFamily: "gloock",
              fontSize: 13,
            }}
            onPress={() => resendConfirmationCode(username)}
            _pressed={{ bg: "transparent" }}
          >
            Reenviar código
          </Button>;
        }, 5000)}
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
