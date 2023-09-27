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
    border-radius: 10px;
    box-sizing: border-box;
    padding: 15px;
    margin-bottom: 20px;
    height: 150px;
    width: 341px;
    background-color: #EDF2FB;
`;

const AirportName = styled.h2`
    font-size: 20px;
    font-weight: 400;
    margin: 0;
`;

const AirportICAO = styled.h2`
    font-size: 15px;
    font-weight: 100;
    margin-top: 2px;
`

export default function IndexCard({ data }) {
    return (

        <IndexCardStyle >
            <AirportName style={{}}>{data.name}</AirportName>
            <AirportICAO>{data.icao}</AirportICAO>
        </IndexCardStyle>
    );
}


{/* <IconButton>
<FavoriteIcon />
</IconButton> */}