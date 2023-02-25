import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../../components/TextInput";
import CheckBox from "../../components/CheckBox";
// import Link from "../../Components/Link";
import ButtonComponent from "../../components/ButtonComponent";
import Container from "../../components/Container";
import { Box, Text } from "native-base";
import Footer from "../../components/Footer";
import Titles from "../../components/Titles";
import SubTitles from "../../components/SubTitles";
import { SafeAreaView } from "react-native";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

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
    onSubmit: (e) => navigation.navigate("home"),
  });

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Signup here"
      onPress={() => navigation.navigate("Signup")}
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
            error={errors?.email}
            touched={touched?.email}
          />
        </Box>
        <Box marginBottom={4}>
          <TextInput
            icon="lock"
            placeholder="Ingresa tu contarseña"
            onBlur={handleBlur("password")}
            onChangeText={handleChange("password")}
            error={errors?.password}
            touched={touched?.password}
            secureTextEntry
          />
        </Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={4}
        >
          <CheckBox
            label="Remember me"
            checked={values.rememberMe}
            onChange={() => setFieldValue("rememberMe", !values.rememberMe)}
          />
          {/* <Link
            label="Forget password?"
            variant="button"
            color="success"
            onPress={() => navigation.navigate("ForgotPassword")}
          /> */}
        </Box>
      </Box>
      {/* </Container> */}
      <Box position="absolute" bottom={0} width="100%" pb={10}>
        <ButtonComponent
          bg="fashion.pink"
          buttonLabel="Ingresar a mi cuenta"
          textColor="white"
        />
      </Box>
    </SafeAreaView>
  );
};

export default Login;
