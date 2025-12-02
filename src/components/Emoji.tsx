import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, type ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  const emojiMap: Record<number, ImageProps> = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
