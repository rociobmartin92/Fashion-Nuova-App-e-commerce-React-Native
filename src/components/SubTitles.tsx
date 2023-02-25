import { Box, Text } from "native-base";
import React from "react";

const SubTitles = ({ subTitle }: any) => {
  return (
    <Box alignItems="center" mb={20}>
      <Text fontSize={20} fontFamily="gloock">
        {subTitle}
      </Text>
    </Box>
  );
};

export default SubTitles;
