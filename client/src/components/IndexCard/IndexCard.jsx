import { styled } from "styled-components";
import IndexCardInfo from "./IndexCardInfo";
import IndexCardHeader from "./IndexCardHeader";



const IndexCardStyle = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 13px 17px;
    margin-top: 16px;
    height: 150px;
    width: 341px;
    background-color: #EDF2FB;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    &:last-child {
        margin-bottom: 16px;
    }
`;

export default function IndexCard({ data }) {
    return (

        <IndexCardStyle >
            <IndexCardHeader data={data}></IndexCardHeader>
            <IndexCardInfo data={data}></IndexCardInfo>
        </IndexCardStyle>
    );
}