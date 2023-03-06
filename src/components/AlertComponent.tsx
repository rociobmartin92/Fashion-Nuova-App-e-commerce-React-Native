import React from "react";
import {
  Alert,
  Box,
  Center,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
} from "native-base";

const AlertComponent = ({ status, title, subtitle }) => {
  return (
    <Center>
      <Alert maxW="400" status={status} colorScheme="info">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                {title}{" "}
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={<CloseIcon size="3" />}
              _icon={{
                color: "coolGray.600",
              }}
            />
          </HStack>
          <Box
            pl="6"
            _text={{
              color: "coolGray.600",
            }}
          >
            {subtitle}
          </Box>
        </VStack>
      </Alert>
    </Center>
  );
};

export default AlertComponent;
