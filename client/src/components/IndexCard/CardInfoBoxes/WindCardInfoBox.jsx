import { styled } from "styled-components";
import { TbWindsock } from "react-icons/tb";

const CardInfoBoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    border: 1px solid;
    border-radius: 5px;
    box-sizing: border-box;
    width: 68px;
    background-color: white;
`;

export default function WindCardInfoBox({ text }) {
    return (
        <CardInfoBoxDiv>
            <div
                style={{
                    "height": "60%",
                    "width": "100%",
                    "display":"flex",
                    "justifyContent": "center",
                    "alignItems": "center"
                }}
            >
                <TbWindsock style={{
                    "height": "80%",
                    "width": "80%",
                    "strokeWidth": "1.2",
                }} />
            </div>
            <div
                style={{
                    "flexGrow": "1",
                    "display":"flex",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "fontSize": "14px",
                }}
            >
                {text}
            </div>
        </CardInfoBoxDiv>
    );
}
