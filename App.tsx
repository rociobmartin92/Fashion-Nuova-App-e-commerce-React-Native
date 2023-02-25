import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider, Text } from "native-base";
import { useEffect, useState } from "react";
import Welcome from "./src/authentication/welcome/Welcome";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { theme } from "./src/theme/theme";
import RootNavigation from "./src/stack";

let customFonts = {
  gloock: require("./assets/fonts/Gloock-Regular.ttf"),
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

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
      <RootNavigation />
    </NativeBaseProvider>
  );
}
