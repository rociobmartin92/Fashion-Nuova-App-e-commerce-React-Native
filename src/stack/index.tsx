import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../authentication/welcome/Welcome";
import Login from "../authentication/welcome/Login";
import { Button, ChevronLeftIcon, Image, Text } from "native-base";
import { TouchableWithoutFeedback } from "react-native";

const Stack = createNativeStackNavigator();

const forgotPasswordRoutes = [
  { name: "forgot_password" },
  { name: "new_password" },
];
const settingProfileRoutes = [
  { name: "setting_profile_01" },
  { name: "setting_profile_02" },
];

const RootNavigation = () => {
  // const navigationRef = useNavigationContainerRef();
  // const routeNameRef = useRef<string>();

  return (
    <NavigationContainer
    // ref={navigationRef}
    // onReady={async () => {
    //   routeNameRef.current = navigationRef.getCurrentRoute().name;
    //   const currentRouteName = routeNameRef.current;
    //   await Analytics.logEvent("screen_view", { currentRouteName });
    // }}
    // onStateChange={async () => {
    //   const previousRouteName = routeNameRef.current;
    //   const currentRouteName = navigationRef.getCurrentRoute().name;
    //   console.log(currentRouteName);
    //   if (previousRouteName !== currentRouteName) {
    //     await Analytics.logEvent("screen_view", {
    //       currentRouteName,
    //     });
    //   }
    //   routeNameRef.current = currentRouteName;
    // }}
    >
      <Stack.Navigator initialRouteName="welcome" screenOptions={{}}>
        {/* <Stack.Group
          screenOptions={({ navigation, route }) => ({
            headerRight: () => (
              <HeaderHomeTopBar navigation={navigation} route={route} />
            ),
            headerTitle: "",
            headerLeft: () => <HeaderLogoTabBarInactive />,
          })}
        >
          <Stack.Screen name="login" component={LogIn} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen
            name="register_validation"
            component={RegisterValidation}
          />
        </Stack.Group> */}

        <Stack.Screen
          name="welcome"
          options={({ navigation, route }) => ({
            // headerRight: () => <Button />,
            headerTitle: "",
          })}
          component={Welcome}
        />
        <Stack.Screen
          name="login"
          options={({ navigation, route }) => ({
            // headerRight: () => <Button />,
            headerTitle: "",
            headerLeft: () => (
              <Button
                bg="transparent"
                m={0}
                p={0}
                onPress={() => navigation.goBack()}
              >
                <ChevronLeftIcon size={5} color="black" />
              </Button>
            ),
            headerBackground: () => (
              <Image
                alt="sdkfjlsd"
                source={require("../../assets/images/patterns/02.png")}
              />
            ),
          })}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
