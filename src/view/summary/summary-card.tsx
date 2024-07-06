import { FC } from "react";
import styled from "styled-components";
import { formatPrice } from "utils";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 138px;
  background-color: #1d1d41;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-right: 36px;
`;

const CardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const GraphDetails = styled.div``;
const MoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const ResultIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #64cff6;
`;

const ProgressIcon = styled.i`
  font-size: 36px;
  font-weight: 600;
`;

const ResultAmount = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
`;

const Span = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #8c89b4;
  margin-left: 16px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: green;
    top: 50%;
    left: 0;
    margin-left: -16px;
    transform: translate(-50%, -50%);
  }
`;

interface ISummary {
  label: string;
  amount: number;
}

export const SummaryCard: FC<ISummary> = ({ amount, label }) => {
  return (
    <Container>
      <CardDetails>
        <ResultIcon>
          <ProgressIcon className="ri-arrow-right-up-line" />
        </ResultIcon>
        <MoneyWrapper>
          <Span>{label}</Span>
          <ResultAmount>{formatPrice(amount)}</ResultAmount>
        </MoneyWrapper>
      </CardDetails>
      <GraphDetails>
        {/* this is blank space need to figure out something for this place */}
      </GraphDetails>
    </Container>
  );
};
