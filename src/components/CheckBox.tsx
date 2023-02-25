import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Box, Icon, IconButton, Text } from "native-base";

interface ICheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox = ({ label, checked, onChange }: ICheckBoxProps) => {
  console.log(checked);

  return (
    <TouchableWithoutFeedback onPress={() => onChange(checked)}>
      <Box mx={5} flexDirection="row" alignItems="center">
        <Box
          borderRadius={4}
          borderColor="primary"
          borderWidth={1}
          height={5}
          width={5}
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            height={5}
            width={5}
            maxHeight={10}
            maxWidth={10}
            _pressed={{ background: "fuchsia.400" }}
            backgroundColor={checked ? "fashion.pink" : "lightBlue.200"}
          />
        </Box>
        <Text marginLeft={4}>{label}</Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default CheckBox;
