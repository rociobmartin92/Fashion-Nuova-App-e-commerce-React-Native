import React from "react";
import { Box, Text } from "native-base";

interface ITitleProps {
  title: string;
}

const Titles = ({ title }: ITitleProps) => {
  return (
    <Box alignItems="center" my={5}>
      <Text fontSize={30} fontFamily="gloock">
        {title}
      </Text>
    </Box>
  );
};

export default Titles;
