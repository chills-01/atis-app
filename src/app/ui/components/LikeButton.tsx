import { UnstyledButton } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useState } from "react";
export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <UnstyledButton
      variant="transparent"
      size="xs"
      p={5}
      c="#C0005C"
      styles={{ root: { ":active": { transform: "none" } } }}
      onClick={(e) => {
        setLiked(!liked);
      }}
    >
      {liked ? <IconHeartFilled /> : <IconHeart />}
    </UnstyledButton>
  );
}
