import { StatusBar } from "expo-status-bar";
import { Button, NativeBaseProvider, Text } from "native-base";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { theme } from "./src/theme/theme";
import RootNavigation from "./src/stack";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import awsExports from "./src/aws-exports";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

let customFonts = {
  gloock: require("./assets/fonts/Gloock-Regular.ttf"),
};

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
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <Authenticator.Provider>
          {/* <Authenticator> */}
          <RootNavigation />
          {/* </Authenticator> */}
        </Authenticator.Provider>
      </NativeBaseProvider>
    </Provider>
  );
}
