import { styled } from "styled-components";
import React from "react";

const CardInfoBoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    border: 1px solid;
    border-radius: 5px;
    box-sizing: border-box;
    width: 62px;
    background-color: white;
`;

export default function CardInfoBox({ info, Icon }) {
    return (
        <CardInfoBoxDiv>
            <div
                style={{
                    "height": "60%",
                    "width": "100%",
                    "textAlign": "center",
                }}
            >
                <Icon />

            </div>
            <div
                style={{
                    "flexGrow": "1",
                    "textAlign": "center",
                }}
            >
                Info
            </div>
        </CardInfoBoxDiv>
    );
}
