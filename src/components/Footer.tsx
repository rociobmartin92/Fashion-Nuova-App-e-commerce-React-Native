import { Box, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { IFooterProps } from "./Container";
// import SocialLogin from "./SocialLogin/SocialLogin";

const Footer = ({ title, action, onPress }: IFooterProps) => {
  return (
    <>
      {/* <SocialLogin /> */}
      <Box alignItems="center" justifyContent="center" marginY={2}>
        <TouchableOpacity {...{ onPress }}>
          <Box flexDirection="row" justifyContent="center">
            <Text color="white">{title}</Text>
            <Text color="success" marginLeft={2}>
              {action}
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </>
  );
};

export default Footer;
