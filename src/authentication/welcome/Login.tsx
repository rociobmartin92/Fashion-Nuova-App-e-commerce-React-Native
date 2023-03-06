import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../../components/TextInput";
import CheckBox from "../../components/CheckBox";
// import Link from "../../Components/Link";
import ButtonComponent from "../../components/ButtonComponent";
import { Box, Text } from "native-base";
import Footer from "../../components/Footer";
import Titles from "../../components/Titles";
import SubTitles from "../../components/SubTitles";
import { SafeAreaView } from "react-native";
import { Auth } from "aws-amplify";
import AlertComponent from "../../components/AlertComponent";
import ButtomSmallComponent from "../../components/ButtomSmallComponent";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Muy corto!")
    .max(50, "Muy largo!")
    .required("Complete este campo"),
  email: Yup.string().email("Email inválido").required("Complete este campo"),
});

interface IInfoProps {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login = ({ navigation }: any) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: { email: "", password: "", rememberMe: false },
    validationSchema: LoginSchema,
    onSubmit: (e) => signIn(e),
  });

  const signIn = async (info: { email: string; password: any }) => {
    try {
      const user = await Auth.signIn(info.email, info.password);
      console.log("SU LOGIN FUE EXITOSO");
      // showAlert("success", "Login exitoso!", "");
    } catch (error) {
      console.log("ERROR signing in", error);
    }
    console.log(info);
    console.log(typeof info);
  };

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("ERROR signing out: ", error);
    }
  }

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Signup here"
      onPress={() => navigation.navigate("signup")}
    />
  );

  return (
    // <Container pattern={0} footer={footer}>
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Box>
        <Titles title="Bienvenido de nuevo!" />
        <SubTitles subTitle="Ingresa a tu cuenta" />
        <Box marginBottom={4}>
          <TextInput
            icon="mail"
            placeholder="Ingresa tu email"
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
          <TextInput
            icon="lock"
            placeholder="Ingresa tu contarseña"
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
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={4}
        >
          <CheckBox
            label="Recuerdame"
            checked={values.rememberMe}
            onChange={() => setFieldValue("rememberMe", !values.rememberMe)}
          />
        </Box>
      </Box>
      {/* </Container> */}
      <Box position="absolute" bottom={0} width="100%" pb={10}>
        <ButtomSmallComponent
          buttonLabel="Olvide mi contraseña"
          textColor="fashion.black"
          navigation={navigation}
          stackNavigation="forgotPassword"
        />
        <ButtonComponent
          bg="fashion.pink"
          buttonLabel="Ingresar a mi cuenta"
          textColor="white"
          onPress={() => handleSubmit()}
        />
        <ButtomSmallComponent
          buttonLabel="No tienes cuenta? Registrate acá"
          textColor="fashion.black"
          navigation={navigation}
          stackNavigation="registerd"
        />
      </Box>
    </SafeAreaView>
  );
};

export default Login;
