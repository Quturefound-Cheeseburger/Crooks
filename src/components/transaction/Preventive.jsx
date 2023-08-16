import React, { useState, useRef, useEffect } from "react";
import "./Preventive.css";



function Introduction() {
    return (
        <div id={"Pre"}>
            <h2>예방법</h2>
            <br/>
            <br/>
            <p> 1. '더치트'와 '사이버킵'에서 판매자 정보(계좌, 전화번호, 이메일 등)를 입력하여 사기 접수 사례 조회하기 </p>
            <p> 2. 거래 사이트에서 판매자의 판매 후기, 글 등 확인하기 </p>
            <p> 3. 판매자 계좌번호 명의 확인하기 </p>
            <p> 4. 판매자가 보내주는 결제 사이트가 아닌 거래 플랫폼 내의 안전결제 시스템 이용하기 </p>
            <p> 5. 판매자가 절반 입금 유도 시 거래 파기하기 </p>
            <p> 6. 문제 발생 시 빠른 조치를 위해 거래는 평일에 하기 </p>
            <p>구매자들을 속여 돈을 받고 자취를 감춰 피해금을 편취하는 범죄이다.</p>
            <br/>
        </div>
    );
}

export default Introduction;


