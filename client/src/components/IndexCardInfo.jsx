import styled from "styled-components";

const CardInfoContainer = styled.div`
    border: 1px solid red;
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 82px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CardInfoBox = styled.div`
    height: auto;
    border: 1px solid green;
    box-sizing: border-box;
    width: 62px;
    background-color: white;
`

export default function IndexCardInfo({ data }) {
    return (
        <CardInfoContainer>
            <CardInfoBox></CardInfoBox>
            <CardInfoBox></CardInfoBox>
            <CardInfoBox></CardInfoBox>
            <CardInfoBox></CardInfoBox>
            {/* <p>{data.wind.speed}</p>
            <p>{data.temperature}</p>
            <p>{data.qnh}</p>
            <p>{data.vis}</p> */}
        </CardInfoContainer>
    );
}
