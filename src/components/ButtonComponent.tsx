import React from "react";
import { Box, Button } from "native-base";

interface IButtonComponentProps {
  buttonLabel: string;
  textColor: string;
  bg: string;
  // stackTitle?: string;
  // navigation?: any;
  // handleButtom: () => unknown;
  onPress: () => void;
}

const ButtonComponent = ({
  buttonLabel,
  textColor,
  bg,
  ...props
}: // handleButtom,
IButtonComponentProps) => {
  return (
    <Box>
      <Button
        {...props}
        fontSize={17}
        mx={8}
        bg={bg}
        _text={{
          color: textColor,
          fontFamily: "gloock",
          fontSize: 16,
        }}
        // onPress={() => handleButtom()}
        _pressed={{ bg: "transparent" }}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
};

export default ButtonComponent;
