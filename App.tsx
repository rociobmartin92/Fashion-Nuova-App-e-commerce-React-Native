import { StatusBar } from "expo-status-bar";
import { Box, Button, NativeBaseProvider, Text } from "native-base";
import { useEffect, useState } from "react";
import Welcome from "./src/authentication/welcome/Welcome";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { theme } from "./src/theme/theme";
import RootNavigation from "./src/stack";

let customFonts = {
  gloock: require("./assets/fonts/Gloock-Regular.ttf"),
};

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import awsExports from "./src/aws-exports";
Amplify.configure(awsExports);

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  function SignOutButton() {
    const { signOut } = useAuthenticator();
    return <Button onPress={signOut}>Sign Out</Button>;
  }

  useEffect(() => {
    Font.loadAsync(customFonts)
      .then(() => setAppIsReady(true))
      .catch((e) => console.log(e));
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Authenticator.Provider>
        {/* <Authenticator> */}
          <RootNavigation />
        {/* </Authenticator> */}
      </Authenticator.Provider>
    </NativeBaseProvider>
  );
}
