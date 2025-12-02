import { Box, Flex, Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    // <HStack padding="10px">
    <Flex flexDirection="row" alignItems="center" gap={2} padding="10px">
      <Image
        onClick={() => {
          globalThis.location.reload();
          console.log("logo clicked");
        }}
        src={logo}
        boxSize="60px"
        cursor="pointer"
      />
      <Heading
        fontSize="2xl"
        marginRight={2}
        cursor="pointer"
        onClick={() => {
          globalThis.location.reload();
          console.log("logo clicked");
        }}
      >
        GameHub
      </Heading>
      <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      <ColorModeSwitch />
    </Flex>
    // </HStack>
  );
};

export default NavBar;
