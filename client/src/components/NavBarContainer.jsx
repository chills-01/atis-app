import styled from "styled-components";

const NavBarContainerDiv = styled.div`
    border: 1px solid red;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 78px;
`;

export default function NavBarContainer() {
    return <NavBarContainerDiv></NavBarContainerDiv>

}