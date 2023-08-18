const bot1 = `[국제발신]
[oo카드]
김oo님
1,680,000원 결제 완료
PAYCO
문의:02-6403-1660`;
const scenario = [
  {
    sub: "bot",
    text: bot1,
  },
  { sub: "client", text: "(? 모르는 번호네.. 스미싱인가?)" },
];
export default scenario;
