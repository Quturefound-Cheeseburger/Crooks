import React from "react";
import Prevention from "../Prevention";

const SmishingPrevention = () => {
  const item = [
    `지인에게서 온 문자 메시지라도 출처가 확인되지 않은 문자 메시지의 인터넷 주소 클릭하지 않기`,
    `악성코드 등 미확인 앱이 함부로 설치되지 않도록 스마트폰의 보안 설정 강화하기`,
    `이동 통신사의 고객센터나 인터넷 홈페이지를 통해 소액결제를 원천적으로 차단하거나 결제 금액 제한하기`,
    `모바일 전용 백신 프로그램을 설치하고 주기적으로 업데이트하기`,
    `출처가 불분명한 앱 보다는 공식 앱 마켓의 신뢰할 수 있는 앱을 다운받아 이용하기`,
    `보안강화, 업데이트 명목으로 금융정보를 요구하는 경우 절대 입력하지 않기`,
  ];
  return (
    <div>
      <Prevention title={"스미싱"} item={item} />
    </div>
  );
};

export default SmishingPrevention;
