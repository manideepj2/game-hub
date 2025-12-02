import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { data } from "framer-motion/client";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>random</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
