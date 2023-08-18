import React from "react";
import styled from "styled-components";
import { ReactComponent as Stats } from "../../assets/images/VoiceFishingStats.svg";

const AccountStats = () => {
  return (
    <StatsContainer>
      <Stats />
    </StatsContainer>
  );
};
export default AccountStats;

const StatsContainer = styled.div`
  padding: 30px;
  width: 40vw;
`;
