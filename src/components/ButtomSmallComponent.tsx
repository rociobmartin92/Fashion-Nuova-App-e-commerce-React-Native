import { View, Text } from "react-native";
import React from "react";
import { Box, Button } from "native-base";

interface IButtonSmallProps {
  buttonLabel: string;
  textColor: string;

}

const ButtomSmallComponent = ({
  buttonLabel,
  textColor,

}: IButtonSmallProps) => {
  return (
    <Box>
      <Button
        fontSize={16}
        mx={8}
        bg="transparent"
        _text={{
          color: textColor,
          fontFamily: "gloock",
          fontSize: 13,
        }}
        // onPress={() => handleButtom()}
        _pressed={{ bg: "transparent" }}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default ButtomSmallComponent;
