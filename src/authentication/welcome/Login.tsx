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
import { SafeAreaView, ScrollView } from "react-native";
import { Auth } from "aws-amplify";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
      navigation.navigate("home");
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

  return (
    // <Container pattern={0} footer={footer}>
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Box>
        <Titles title="Bienvenido de nuevo!" />
        <SubTitles subTitle="Ingresa a tu cuenta" />
        {/* <KeyboardAwareScrollView> */}
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
        {/* </KeyboardAwareScrollView> */}
      </Box>
      {/* </Container> */}

      <Box mt={40} width="100%">
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
