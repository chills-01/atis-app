import IndexWrapper from "../components/IndexCard/IndexWrapper";
import SearchBarContainer from "../components/SearchBarContainer";
import NavBarContainer from "../components/NavBarContainer";
import { styled } from "styled-components";

const IndexPageDiv = styled.div`
    height: 100%;
`;

export default function IndexPage({ data }) {
    return (
        <IndexPageDiv>
            <SearchBarContainer />
            <IndexWrapper weatherData={data} />
            <NavBarContainer />
        </IndexPageDiv>
    );
}
