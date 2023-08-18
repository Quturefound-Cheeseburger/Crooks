import React from "react";
import styled from "styled-components"
import {ReactComponent as Stats} from "../../assets/images/SmishingStats.svg"

const SmishingStats = () => {
    return(
        <StatsContainer>
            <Stats/>
        </StatsContainer>
    )
}
export default SmishingStats ;

const StatsContainer = styled.div`
    padding : 30px;
    width : 40vw;
`;