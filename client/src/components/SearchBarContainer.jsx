import styled from "styled-components";

const SearchBarContainerDiv = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 82px;
    position: absolute;
    inset: 0 0 0 0;
`;

export default function SearchBarContainer() {
    return <SearchBarContainerDiv></SearchBarContainerDiv>

}