import {styled} from 'styled-components';


const CardInfoBoxDiv = styled.div`
    height: auto;
    border: 1px solid green;
    box-sizing: border-box;
    width: 62px;
    background-color: white;
`

export default function CardInfoBox({info}) {
    return (
        <CardInfoBoxDiv></CardInfoBoxDiv>
    )

}