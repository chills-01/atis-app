import "./IndexCard.css";

import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "styled-components";
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


const IndexCardStyle = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
`;

export default function IndexCard({ data }) {
    return (
        // <Box sx={{ minWidth: 100, borderRadius: "20px", margin: "10px" }}>
        //     <Card variant="outlined">
        //         <React.Fragment>
        //             <CardContent>
        //                 <Typography
        //                     sx={{ fontSize: 14 }}
        //                     color="text.secondary"
        //                     gutterBottom
        //                 ></Typography>
        //                 <Typography variant="h5" component="div">
        //                     {data.icao}
        //                 </Typography>
        //                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //                     {data.name}
        //                 </Typography>
        //                 <Typography variant="body2">
        //                     well meaning and kindly.
        //                     <br />
        //                     {'"a benevolent smile"'}
        //                 </Typography>
        //             </CardContent>
        //             <CardActions>
        //                 <Button size="small">Learn More</Button>
        //             </CardActions>
        //         </React.Fragment>
        //     </Card>
        // </Box>

        <IndexCardStyle >
            <h2>{data.name}</h2>
            <IconButton>
                <FavoriteIcon />
            </IconButton>
        </IndexCardStyle>
    );
}
