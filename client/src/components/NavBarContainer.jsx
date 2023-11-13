import styled from "styled-components";

const NavBarContainerDiv = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 78px;
    position: absolute;
    inset: calc(100vh - 76px) 0 0 0;
`;

export default function NavBarContainer() {
    return <NavBarContainerDiv>
    </NavBarContainerDiv>

}