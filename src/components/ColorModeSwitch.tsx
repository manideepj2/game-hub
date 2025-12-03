import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack spacing={2}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        size={{ base: "sm", md: "md" }}
      />
      <Text whiteSpace="nowrap" display={{ base: "none", sm: "block" }}>
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
