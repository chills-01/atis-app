import { styled } from "styled-components";
import LikeButton from "./LikeButton";

const AirportName = styled.h2`
    font-size: 20px;
    font-weight: 400;
    margin: 0;
`;

const AirportICAO = styled.h2`
    font-size: 12px;
    font-weight: 100;
    margin-top: 2px;
    margin-bottom: 0px;
`;

const HeaderStyles = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LikeButtonStyles = styled.div`
    
    width: 25%;
`;

export default function IndexCardHeader({ data }) {
    const { name, icao } = data;
    return (
        <>
            <HeaderStyles>
                {/* TODO: styling here awkward */}
                <div style={{ width: "75%" }}>
                    <AirportName>{name}</AirportName>
                    <AirportICAO>{icao}</AirportICAO>
                </div>
                <LikeButtonStyles>
                    <LikeButton></LikeButton>
                </LikeButtonStyles>
                
            </HeaderStyles>
        </>
    );
}
