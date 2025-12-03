import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Brand = () => {
  return (
    <HStack
      cursor="pointer"
      onClick={() => {
        globalThis.location.reload();
        console.log("logo clicked");
      }}
      flexShrink={0}
    >
      <Image src={logo} boxSize="60px" />
      <Heading fontSize="2xl" whiteSpace="normal">
        GameHub
      </Heading>
    </HStack>
  );
};

export default Brand;
