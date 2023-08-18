import React from "react";
import Introduction from "../Introduction";
const SmishingIntroduction = () => {
  const item =
    "스미싱(smishing)은 문자메시지(SMS)와 피싱(Phising)의 합성어로 악성 앱 주소가 포함된 휴대폰 문자(SMS)를 대량으로 전송 후 이용자가 악성 앱을 설치하도록 유도하여 금융 정보 등을 탈취하는 신종 금융 사기이다.";
  return (
    <div>
      <Introduction title={"스미싱"} introduction={item} />
    </div>
  );
};
export default SmishingIntroduction;
