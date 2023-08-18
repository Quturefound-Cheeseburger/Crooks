import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./Simul.css";


const Simul = () => {
    const SlideComponent = () => {
        const slideRef = useRef(null);
        const [currentImgOrder, setCurrentImgOrder] = useState(0);
        const IMG_WIDTH = 368; 
        const slideRange = currentImgOrder * IMG_WIDTH;

        useEffect(() => {
            slideRef.current.style.transition = "transform 0.01s ease-in-out";
            slideRef.current.style.transform = `translateX(-${slideRange}px)`;
        }, [currentImgOrder]);

        const moveToNextSlide = () => {
            if (currentImgOrder === 19) {
                setCurrentImgOrder(0);
            } else {
                setCurrentImgOrder(currentImgOrder + 1);
            }
        };

        return (
            <div className="simul">
                <Wrapper>
                    <SlideWrapper ref={slideRef}>
                        <Img src="/img/3/3-1.svg" alt="Image 1" onClick={moveToNextSlide}/> {/* 수정 */}
                        <Img src="/img/3/3-2.svg" alt="Image 2" onClick={moveToNextSlide}/> {/* 수정 */}
                        <Img src="/img/3/3-3.svg" alt="Image 3" onClick={moveToNextSlide} /> {/* 수정 */}
                        <Img src="/img/3/3-4.svg" alt="Image 4" onClick={moveToNextSlide}/>
                        <Img src="/img/3/3-5.svg" alt="Image 5" onClick={moveToNextSlide}/>
                        <Img src="/img/3/3-6.svg" alt="Image 6" onClick={moveToNextSlide}/>
                        <Img src="/img/3/3-7.svg" alt="Image 7" onClick={moveToNextSlide}/>
                        <Img src="/img/3/3-8.svg" alt="Image 8" onClick={moveToNextSlide}/>
                        <Img src="/img/3/3-9.svg" alt="Image 9" onClick={moveToNextSlide}/>
                        <Img src="/img/3/3-10.svg" alt="Image 10" onClick={moveToNextSlide}/>
                        <Img src="/img/3/3-11.svg" alt="Image 11" onClick={moveToNextSlide}/>
                        <Img src="/img/3/3-12.svg" alt="Image 12" onClick={moveToNextSlide} />
                        <Img src="/img/3/3-13.svg" alt="Image 13" onClick={moveToNextSlide}/>
                        
                    </SlideWrapper>
                </Wrapper>
                {/*<button onClick={moveToNextSlide}>다음</button>*/}
            </div>
        );
    };

    return (
        <div id={"simul"}>
            <SlideComponent />
        </div>
    );
}
export default Simul;

const Wrapper = styled.div`
  width: 368px;
  height: 650px;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 7400px;
  height: 13000px;
  transition: transform 0.01s ease-in-out;
`;

const Img = styled.img`
  width: 368px;
  height: 650px;
  image-rendering: crisp-edges;
`;
