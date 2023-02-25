import { Box, Button, Image, Text } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import ButtomSmallComponent from "../../components/ButtomSmallComponent";
import ButtonComponent from "../../components/ButtonComponent";
import Titles from "../../components/Titles";

const welcomeImage = require("../../../assets/images/welcome.png");

const Welcome = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* <Titles title="Bienvenidos!" /> */}
      <Image
        alignSelf="center"
        width={330}
        height={580}
        alt="welcome"
        source={welcomeImage}
      />
      <Box position="absolute" bottom={0} width="100%" pb={10}>
        <ButtomSmallComponent
          buttonLabel=" Ya tienes una cuenta? Ingresar"
          textColor="black"
          stackNavigation="login"
          navigation={navigation}
        />

        <ButtonComponent
          buttonLabel="Registrarme"
          textColor="black"
          bg="fashion.pink"
          // handleButtom="registerForm"
        />
        <ButtomSmallComponent
          stackNavigation="login"
          navigation={navigation}
          buttonLabel="Olvidé mi contraseña"
          textColor="black"
        />
      </Box>
    </SafeAreaView>
  );
};

export default Welcome;
