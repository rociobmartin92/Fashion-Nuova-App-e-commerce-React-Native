import { Alert, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Box, Button, Input, Text } from "native-base";
import Titles from "../../components/Titles";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../../components/TextInput";
import ButtonComponent from "../../components/ButtonComponent";
import { Auth } from "aws-amplify";
import AlertComponent from "../../components/AlertComponent";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Muy cortot!")
    .max(50, "Muy largo!")
    .required("Requerido"),
  password: Yup.string()
    .min(6, "Muy corto!")
    .max(15, "Muy largo!")
    .required("Requerido"),
  email: Yup.string().email("Email inválido").required("Requerido"),
});

const Register = ({ navigation }: any) => {
  const [code, setCode] = useState(false);
  const [codeText, setCodeText] = useState("");
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { name: "", email: "", password: "" },
      validationSchema: SignUpSchema,
      onSubmit: (e) => signUp(e.email, e.password),
    }
  );

  async function signUp(username: string, password: any) {
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        // attributes: {
        //   email, // optional
        // },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      navigation.navigate("codeConfirmation", { username });
      console.log("USER", user);
    } catch (error) {
      console.log("error signing up:", error);
      Alert.alert("Error", "Ha ocurrido un error: " + error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Titles title="Registro" />
      <Box>
        <Box marginBottom={4}>
          <Text ml={5} mb={1} fontFamily="gloock">
            Ingresa un nombre de usuario
          </Text>
          <TextInput
            icon="user"
            placeholder="Usuario"
            onBlur={handleBlur("name")}
            onChangeText={handleChange("name")}
            touched={touched?.name}
          />
          {errors?.name && (
            <Text fontFamily="gloock" ml={8} color="red.400">
              {errors?.name}
            </Text>
          )}
        </Box>
        <Box marginBottom={4}>
          <Text ml={5} mb={1} fontFamily="gloock">
            Ingresa tu email
          </Text>
          <TextInput
            icon="mail"
            placeholder="Email"
            onBlur={handleBlur("email")}
            onChangeText={handleChange("email")}
            touched={touched?.email}
          />
          {errors?.email && (
            <Text fontFamily="gloock" ml={8} color="red.400">
              {errors?.email}
            </Text>
          )}
        </Box>
        <Box marginBottom={4}>
          <Text ml={5} mb={1} fontFamily="gloock">
            Ingresa una contraseña mayor a 6 carácteres
          </Text>
          <TextInput
            icon="lock"
            placeholder="Contraseña"
            onBlur={handleBlur("password")}
            onChangeText={handleChange("password")}
            touched={touched?.password}
            secureTextEntry
          />
          {errors?.password && (
            <Text fontFamily="gloock" ml={8} color="red.400">
              {errors?.password}
            </Text>
          )}
        </Box>
      </Box>
      <Box position="absolute" bottom={0} width="100%" pb={10}>
        <ButtonComponent
          bg="fashion.pink"
          buttonLabel="Registrarme"
          textColor="white"
          onPress={() => handleSubmit()}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Register;
