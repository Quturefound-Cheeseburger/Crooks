import React from "react";
import styled from "styled-components"

const VoiceFishingIntroduction = ({title,introduction}) => {
    return(
        <IntroductionContainer>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <Introduction>
            {introduction}
            </Introduction>
        </IntroductionContainer>
    )
}
export default VoiceFishingIntroduction ;
const IntroductionContainer = styled.div`
    min-width : 35vh;
    width : 40vw;
    height : 70vh;
    margin-left : 20px;
    padding : 0;
`;
const TitleContainer = styled.div`
    text-align : left;
    margin : 0px;
`
const Title = styled.h1`
    margin : 0px;
    font-size : 2em;
    height : 30vh;
`
const Introduction = styled.div`
    height : 40vh;
    `