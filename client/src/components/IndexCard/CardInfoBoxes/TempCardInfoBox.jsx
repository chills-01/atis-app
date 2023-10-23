import { styled } from "styled-components";
import { TbTemperature } from "react-icons/tb";

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

export default function TempCardInfoBox({ text }) {
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
                <TbTemperature style={{
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
