import { IconButton } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function LikeButton({liked, setLiked}) {
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
                setLiked(!liked);
                console.log(`I like this!`);
            }}
            style={styles}
        >
            {liked ? (
                <FavoriteOutlinedIcon />
            ) : (
                <FavoriteBorderOutlinedIcon />
            )}
        </IconButton>
    );
}
