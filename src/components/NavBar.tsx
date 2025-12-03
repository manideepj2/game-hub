import { Flex, Box } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import Brand from "./Brand";
import NavItems from "./NavItems";

interface NavBarProps {
  onSearch: (searchText: string) => void;
  onNavItemClick: (title: string) => void;
}
const NavBar = ({ onSearch, onNavItemClick }: NavBarProps) => {
  return (
    <Flex flexDirection="row" alignItems="center" gap={2} padding="10px">
      <Brand />
      <Box flex={1} minW={0}>
        <SearchInput onSearch={(searchText) => onSearch(searchText)} />
      </Box>
      <NavItems handleClick={(title) => onNavItemClick(title)} />
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
