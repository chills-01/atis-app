import styled from "styled-components";
// import CardInfoBox from "./CardInfoBoxes/CardInfoBox";
import WindCardInfoBox from "./CardInfoBoxes/WindCardInfoBox";
import PressureCardInfoBox from "./CardInfoBoxes/PressureCardInfoBox";
import TempCardInfoBox from "./CardInfoBoxes/TempCardInfoBox";
import VisibilityCardInfoBox from "./CardInfoBoxes/VisibilityCardInfoBox";


// TODO: put four index cards into one compoennt that takes an icon as a prop

const CardInfoContainer = styled.div`
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 82px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default function IndexCardInfo({ data }) {
    const displaytext = {
        wind: data.wind.speed ? `${data.wind.speed} kt` : 'null',
        temperature: data.temperature ? `${data.temperature} °C` : 'null',
        pressure: data.qnh ? `${data.qnh} hPa` : 'null',
        visibility: data.vis ? `${data.vis} m` :'null',
    }
    return (
        <CardInfoContainer>
            <WindCardInfoBox text={displaytext.wind}></WindCardInfoBox>
            <TempCardInfoBox text={displaytext.temperature}></TempCardInfoBox>
            <PressureCardInfoBox text={displaytext.pressure}></PressureCardInfoBox>
            <VisibilityCardInfoBox text={displaytext.visibility}></VisibilityCardInfoBox>
        </CardInfoContainer>
    );
}
