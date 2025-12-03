import {
  Heading,
  HStack,
  Text,
  IconButton,
  Link,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import theme from "../theme";

const ContactDetails = () => {
  const iconMap = {
    portfolio: <FaGlobe />,
    github: <FaGithub />,
    linkedIn: <FaLinkedinIn />,
    email: <FaEnvelope />,
    twitter: <FaXTwitter />,
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
  };

  const urlMap: { [key: string]: string } = {
    portfolio: "",
    github: "https://github.com/manideepj2",
    linkedIn: "https://www.linkedin.com/in/manideep-jammigumpula-3b0783264/",
    email: "mailto:manideepj2@gmail.com",
    facebook: "https://www.facebook.com/Manideep.J29",
    instagram: "https://www.instagram.com/_manideep.j_/",
    twitter: "https://x.com/mandyyboy",
  };

  const { colorMode } = useColorMode();
  const [bgColor, setBgColor] = useState<string>();

  useEffect(() => {
    colorMode === "dark"
      ? setBgColor(theme.colors.gray[700])
      : setBgColor(theme.colors.gray[100]);
  }, [colorMode]);

  return (
    <VStack
      spacing={3}
      textAlign="center"
      backgroundColor={bgColor}
      paddingY={5}
    >
      <Heading as="h2" fontSize="2xl" fontStyle="italic">
        Manideep Jammigumpula, Sr. Full Stack Developer
      </Heading>
      <Text maxWidth="50%">
        I am a Senior Full Stack Developer currently driving solutions at Bank
        of New York using Angular and Java. I developed this application to
        demonstrate my technical skills and passion for continuous learning in
        web development. I welcome you to explore my work and connect with me
        through the links below.
      </Text>
      <HStack justifyContent="space-evenly" maxWidth="50%">
        {Object.entries(iconMap).map(([key, icon]) => (
          <Link href={urlMap[key]} key={key} isExternal>
            <IconButton
              key={key}
              size="lg"
              variant="ghost"
              aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
              icon={icon}
            />
          </Link>
        ))}
      </HStack>
    </VStack>
  );
};

export default ContactDetails;
