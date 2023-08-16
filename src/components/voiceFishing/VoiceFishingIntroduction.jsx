import React from "react";
import styled from "styled-components"

const VoiceFishingIntroduction = () => {
    return(
        <IntroductionContainer>
            <TitleContainer>
                <Title>보이스피싱</Title>
            </TitleContainer>
            <Introduction>
            보이스피싱은 전화를 이용하여 타인을 속이거나 협박하여
            자금을 송금하거나 이체하도록 유도하거나,
            또는 개인정보를 알아내어 자금을 송금하거나
            이체하도록 하는 전화금융 사기이다.
            </Introduction>
        </IntroductionContainer>
    )
}
export default VoiceFishingIntroduction ;
const IntroductionContainer = styled.div`
    background-color : gray;
    width : 50vh;
    height : 70vh;
`;
const TitleContainer = styled.div`
    text-align : left;
    margin : 0px;
`
const Title = styled.h1`
    margin : 0px;
    font-size : 30px;
    height : 30vh;
`
const Introduction = styled.div`
    height : 40vh;
`
