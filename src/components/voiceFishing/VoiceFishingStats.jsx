import React from "react";
import styled from "styled-components"
import {ReactComponent as Stats} from "../../assets/images/VoiceFishingStats.svg"

const VoiceFishingStats = () => {
    return(
        <StatsContainer>
            <Stats/>
        </StatsContainer>
    )
}
export default VoiceFishingStats ;

const StatsContainer = styled.div`
    padding : 30px;
    width : 50vh;
`;