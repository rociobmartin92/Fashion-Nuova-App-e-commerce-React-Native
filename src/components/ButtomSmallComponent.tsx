import React from "react";
import { Box, Button } from "native-base";

interface IButtonSmallProps {
  buttonLabel: string;
  textColor: string;
  navigation: any;
  stackNavigation: string;
}

const ButtomSmallComponent = ({
  buttonLabel,
  textColor,
  navigation,
  stackNavigation,
}: IButtonSmallProps) => {
  const handleButtom = () => {
    navigation.navigate(stackNavigation);
  };

  return (
    <Box>
      <Button
        mx={8}
        bg="transparent"
        _text={{
          color: textColor,
          fontFamily: "gloock",
          fontSize: 15,
        }}
        onPress={() => handleButtom()}
        _pressed={{ bg: "transparent" }}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default ButtomSmallComponent;
