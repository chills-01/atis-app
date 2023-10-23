import IndexCard from "./IndexCard";
import { styled } from "styled-components";

const IndexWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: auto;
    width: 100%; 

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
