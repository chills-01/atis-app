import { IconButton } from "@mui/material";
import { useState } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function LikeButton() {
    const [clicked, setClicked] = useState(false);
    // TODO: better styling here, works for non-reactive page
    const styles = {
        position: "relative",
        top: "-10px",
        left: "44px",
    };

    return (
        <IconButton
            aria-label="like"
            onClick={() => {
                setClicked(!clicked);
                console.log("clicked");
            }}
            style={styles}
        >
            {clicked ? (
                <FavoriteOutlinedIcon />
            ) : (
                <FavoriteBorderOutlinedIcon />
            )}
        </IconButton>
    );
}
