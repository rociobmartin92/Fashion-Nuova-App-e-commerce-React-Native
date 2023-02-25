import React from "react";
import { StyleSheet, TextInput as RNInput } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, CheckCircleIcon } from "native-base";

interface ITextInputProps {
  icon: any;
  error: string;
  touched: boolean;
  props: any;
}

const TextInput = ({ icon, error, touched, ...props }: ITextInputProps) => {
  const reColor = !touched ? "text" : error ? "danger" : "success";

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={50}
      mx={5}
      padding={2}
      borderRadius={2}
      borderColor={reColor}
      borderWidth={StyleSheet.hairlineWidth}
    >
      <Box margin={1}>
        <Icon name={icon} size={16} color="fashion.pink" />
      </Box>
      <Box flex={1}>
        <RNInput
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          placeholderTextColor="fashion.black"
          {...props}
        />
      </Box>
      {touched && <CheckCircleIcon />}
    </Box>
  );
};

export default TextInput;
