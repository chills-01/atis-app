import { Button } from "@mantine/core";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { useState } from "react";
export default function LikeButton() {
    const [liked, setLiked] = useState(false);
  return (
    <Button variant="transparent" size="xs" p={5} color="#C0005C" onClick={() => setLiked(!liked)}>
      {liked ? <IconHeartFilled /> : <IconHeart />}
    </Button>
  );
}
