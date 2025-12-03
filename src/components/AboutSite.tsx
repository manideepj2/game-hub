import { Box, Heading } from "@chakra-ui/react";
import HeadingAndList from "./HeadingAndList";

const AboutSite = () => {
  let keyfeatures = [
    "Browse and search for video games across various genres and platforms.",
    "Filter games by genre, platform, and sort order.",
    "Responsive design for optimal viewing across different devices like laptop, tablet and mobile.",
    "Implements a toggle for Dark Mode/Light Mode.",
    "Fetches live data from RAWG Video Games Databse API, ensuring the game information is current.",
  ];
  let techStack = [
    "React framework with TypeScript for robust front-end development.",
    "Chakra UI for efficient and customizable component styling.",
    "Axios for handling HTTP requests to fetch data from the RAWG API.",
    "Vite as the build tool for fast development and optimized production builds.",
    "RAWG Video Games Database API as the data source for comprehensive game information.",
    "Vercel for seamless deployment and hosting of the application.",
  ];
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
