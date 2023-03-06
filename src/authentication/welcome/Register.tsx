import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Box, Button, Input, Text } from "native-base";
import Titles from "../../components/Titles";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../../components/TextInput";
import ButtonComponent from "../../components/ButtonComponent";
import { Auth } from "aws-amplify";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Muy cortot!")
    .max(50, "Muy largo!")
    .required("Requerido"),
  password: Yup.string()
    .min(2, "Muy corto!")
    .max(50, "Muy largo!")
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
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Titles title="Registro" />
      <Box>
        <Box>
          <Box marginBottom={4}>
            <TextInput
              icon="user"
              placeholder="Enter your Name"
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
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
              touched={touched?.email}
            />
          </Box>
          {errors?.email && (
            <Text fontFamily="gloock" ml={8} color="red.400">
              {errors?.email}
            </Text>
          )}
          <Box marginBottom={4}>
            <TextInput
              icon="lock"
              placeholder="Enter your Password"
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
