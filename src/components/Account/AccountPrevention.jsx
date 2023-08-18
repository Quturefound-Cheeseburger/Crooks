import React from "react";
import Prevention from "../Prevention";

const AccountPrevention = () => {
  const item = [
    "알 수 없는 출처의 돈 이체 거부 및 송금 은행에 착오송금 사실 전달",
    "스마트폰 해킹을 예방하기 위해 스마트폰의 보안 설정을 확인",
    "계좌 입금 및 출금을 실시간으로 알려주는 알림 서비스 신청",
    "인터넷 사기 의심 전화 및 계좌번호 조회 서비스 활용",
    "금융감독원 정보포털을 활용하여, 사고예방시스템을 활용",
    "개인정보가 포함된 어플 및 사이트의 비밀번호를 강화하고 주기적으로 변경",
  ];

  return (
    <>
      <Prevention title={"계좌사기"} item={item} />
    </>
  );
};

export default AccountPrevention;
