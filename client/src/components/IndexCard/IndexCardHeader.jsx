import { styled } from "styled-components";

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

export default function IndexCardHeader({ data }) {
    const {name, icao} = data;
    return (
        <>
            <AirportName>{name}</AirportName>
            <AirportICAO>{icao}</AirportICAO>
        </>
    );
}
