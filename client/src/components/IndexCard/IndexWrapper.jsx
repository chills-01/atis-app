import IndexCard from "./IndexCard";
import { styled } from "styled-components";

const IndexWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%; 
    border: 1px solid green;
    overflow: auto;
    position: absolute;
    inset: 82px 0 76px 0;

`;

export default function IndexWrapper({ weatherData }) {
    return (
        <IndexWrapperDiv className="index-cards-container">
            {weatherData.map((w) => (
                <IndexCard key={w._id} data={w} />
            ))}
        </IndexWrapperDiv>
    );
}
