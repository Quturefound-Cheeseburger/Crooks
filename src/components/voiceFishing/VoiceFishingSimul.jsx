import React, { useState } from "react";
import styled from "styled-components"
import {ReactComponent as Phone} from "../../assets/Icons/phone.svg"
import Simulation from "../chatbot/Simulation";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import VoiceFishing from "../chatbot/actionProviders/VoiceFishing";
const VoiceFishingSimul = () => {
    const [index, setIndex] = useState(0);
    const handleIndex = ()=>{
        setIndex(1);
    }
    return(
        <Container> 
            {index === 0 &&
                <Img src={process.env.PUBLIC_URL + '/vfImage/Simul1.svg' }
                    onClick={handleIndex}/>}
            {index === 1 ? 
            <>
                <BotHeader><Phone/>통화 중..</BotHeader>
                <Simulation 
                    config={config}
                    MessageParser={MessageParser}
                    ActionProvider={VoiceFishing}/>
            </>
            : null
            }
        </Container>
    )
}
export default VoiceFishingSimul
const Container = styled.div`
    margin-left : auto;
    margin-right : auto;
`
const BotHeader = styled.div`
    padding-left : 10em;
    boder : solid;
    padding : 5px;
    text-align : left;
    position : fixed;
    height:30px;
    z-index:1;
    width : 340px;
    background-color : #EFEFEF;
`
const Img = styled.img`
    border-radius : 30px;
    width : 350px;
    height : 70vh;
`