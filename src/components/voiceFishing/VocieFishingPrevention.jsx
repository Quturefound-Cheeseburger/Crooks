import React from "react";
import styled from "styled-components";

const VocieFishingPrevention = () => {
  const item = [
    "전화로 정부기관이라며 자금이체를 요구하면 일단 보이스피싱 의심",
    "전화·문자로 대출 권유받는 경우 무대응 또는 금융회사 여부 확인",
    "대출 처리비용 등을 이유로 선입금 요구 시 보이스피싱을 의심",
    "저금리 대출 위한 고금리 대출 권유는 100% 보이스피싱",
    "납치·협박 전화를 받는 경우 자녀 안전부터 확인",
    "채용을 이유로 계좌 비밀번호 등 요구 시 보이스피싱 의심",
    "가족 등 사칭 금전 요구 시 먼저 본인 확인",
    "출처 불명 파일·이메일·문자는 클릭하지 말고 삭제",
    "금감원 팝업창 뜨고 금융거래정보 입력 요구 시 100% 보이스피싱",
    "보이스피싱 피해발생 시 즉시 신고 후 피해금 환급 신청",
  ];
  const itemList = item.map((e, i) => <li key={i}>{item[i]}</li>);
  return (
    <Container>
      <List>{itemList}</List>
    </Container>
  );
};

export default VocieFishingPrevention;
const Container = styled.div`
  background-color: gray;
`;
const List = styled.ol`
  text-align: left;
`;
