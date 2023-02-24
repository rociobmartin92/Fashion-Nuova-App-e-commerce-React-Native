import React, { useRef } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../authentication/welcome/Welcome";

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
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={async () => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
        const currentRouteName = routeNameRef.current;
        await Analytics.logEvent("screen_view", { currentRouteName });
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.getCurrentRoute().name;
        console.log(currentRouteName);
        if (previousRouteName !== currentRouteName) {
          await Analytics.logEvent("screen_view", {
            currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}
    >
      <Stack.Navigator
        screenOptions={{ headerLargeTitleStyle: {} }}
        initialRouteName="login"
      >
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
