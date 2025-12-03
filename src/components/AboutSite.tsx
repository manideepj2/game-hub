import { Box, Heading } from "@chakra-ui/react";
import HeadingAndList from "./HeadingAndList";
import { keyfeatures, techStack } from "../data/constants";

const AboutSite = () => {
  return (
    <Box padding={5}>
      <Box textAlign="center">
        <Heading as="h2" marginBottom={3} fontSize="3xl">
          About GameHub
        </Heading>
        <em>GameHub</em> is a responsive single-page application {"(SPA)"}{" "}
        designed as a functional clone of{" "}
        <code>
          <u>
            <a href="https://rawg.io/">rawg.io</a>
          </u>
        </code>{" "}
        the popular video game discovery platform. It serves as a personal
        portfolio project demonstrating modern front-end development sklills.
      </Box>
      <HeadingAndList
        paddingTopValue={0}
        title="Key Features"
        items={keyfeatures}
      />
      <HeadingAndList
        paddingTopValue={2}
        title="Tech Stack"
        items={techStack}
      />
    </Box>
  );
};

export default AboutSite;
