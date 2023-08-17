import React from "react";
import Introduction from "../Introduction";

const VoiceFishingIntroduction = () => {
  const item = `보이스피싱은 전화를 이용하여 타인을 속이거나 협박하여
    자금을 송금하거나 이체하도록 유도하거나,
    또는 개인정보를 알아내어 자금을 송금하거나
    이체하도록 하는 전화금융 사기이다.`;
  return (
    <div>
      <Introduction title={"보이스피싱"} introduction={item} />
    </div>
  );
};
export default VoiceFishingIntroduction;
