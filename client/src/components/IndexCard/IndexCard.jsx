// import React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { IconButton } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from "styled-components";
import IndexCardInfo from "./IndexCardInfo";
import IndexCardHeader from "./IndexCardHeader";



const IndexCardStyle = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 13px 17px;
    margin-top: 20px;
    height: 150px;
    width: 341px;
    background-color: #EDF2FB;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

export default function IndexCard({ data }) {
    return (

        <IndexCardStyle >
            <IndexCardHeader data={data}></IndexCardHeader>
            <IndexCardInfo data={data}></IndexCardInfo>
        </IndexCardStyle>
    );
}


{/* <IconButton>
<FavoriteIcon />
</IconButton> */}