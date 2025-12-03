import { Text } from "@chakra-ui/react";

const navItems = [{ title: "About Site" }, { title: "Contact Me" }];

const NavItems = () => {
  return (
    <>
      {navItems.map((item) => (
        <Text
          key={item.title}
          marginX={1}
          display={{ base: "none", md: "block" }}
        >
          {item.title}
        </Text>
      ))}
    </>
  );
};

export default NavItems;
