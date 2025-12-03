import { Heading, Box } from "@chakra-ui/react";

interface HeadingAndListProps {
  title: string;
  items: string[];
  paddingTopValue: number;
}

const HeadingAndList = ({
  title,
  items,
  paddingTopValue,
}: HeadingAndListProps) => {
  return (
    <Box paddingTop={paddingTopValue}>
      <Heading as="h2" marginY={2} fontSize="xl">
        {title} :
      </Heading>
      <Box as="ul" paddingLeft={5}>
        {items.map((item, index) => (
          <Box as="li" key={index} marginY={1}>
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HeadingAndList;
