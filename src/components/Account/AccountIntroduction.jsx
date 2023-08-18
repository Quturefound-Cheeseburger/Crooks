import React from "react";
import Introduction from "../Introduction";

const AccountIntroduction = () => {
  const item = `계좌 사기는 이른바 통장 협박 사기로 많이 불리우며,
  최근 급부상한 신종 금융사기 중 하나이다. 개인 및 타인의
  금융 정보, 통장 정보를 이용하여 협박하거나, 사기를 시도하는 행위를 말한다.`;

  return (
    <div>
      <Introduction title={"계좌사기"} introduction={item} />
    </div>
  );
};
export default AccountIntroduction;
