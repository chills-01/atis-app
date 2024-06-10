import { useEffect, useState, useRef } from "react";
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
    const [liked, setLiked] = useState(false);
    const isMounted = useRef(false);

    // update api when like button pressed
    useEffect(() => {
        async function fetchAllData() {
            // set weather data not on page load
            if (isMounted.current) {
                console.log(`setting state of ${data.icao} to ${liked}`);
            } else {
                isMounted.current = true;
            }
            
        }
        try {
            fetchAllData();
        } catch (e) {
            console.log(e);
        }
    }, [liked]);

    return (

        <IndexCardStyle >
            <IndexCardHeader data={data} liked={liked} setLiked={setLiked}></IndexCardHeader>
            <IndexCardInfo data={data}></IndexCardInfo>
        </IndexCardStyle>
    );
}