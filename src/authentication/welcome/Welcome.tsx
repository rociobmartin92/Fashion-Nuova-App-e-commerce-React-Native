import { Box, Button, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import ButtomSmallComponent from "../../components/ButtomSmallComponent";
import ButtonComponent from "../../components/ButtonComponent";

const Welcome = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Box alignItems="center" mt={20}>
        <Text fontSize={30} fontFamily="gloock">
          Bienvenidos!
        </Text>
      </Box>
      <Box position="absolute" bottom={0} width="100%" pb={10}>
        <ButtomSmallComponent
          buttonLabel=" Ya tienes una cuenta? Ingresar"
          textColor="black"
        />

        <ButtonComponent
          buttonLabel="Registrarme"
          textColor="black"
          bg="fashion.pink"
          // handleButtom="registerForm"
        />
        <ButtomSmallComponent
          buttonLabel="Olvidé mi contraseña"
          textColor="black"
        />
      </Box>
    </SafeAreaView>
  );
};

export default Welcome;
