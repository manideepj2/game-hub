import { Text } from "@chakra-ui/react";

interface NavItemProps {
  handleClick: (title: string) => void;
}
const navItems = [{ title: "About Site" }, { title: "Contact Me" }];

const NavItems = ({ handleClick }: NavItemProps) => {
  return (
    <>
      {navItems.map((item) => (
        <Text
          key={item.title}
          marginX={1}
          display={{ base: "none", md: "block" }}
          onClick={() => handleClick(item.title)}
          cursor="pointer"
          transition="all 0.1s ease-in-out"
          _hover={{
            fontSize: "lg",
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
      ))}
    </>
  );
};

export default NavItems;
