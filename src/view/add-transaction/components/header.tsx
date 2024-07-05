import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 96px;
  padding: 0 12px;
  border-bottom: 1px solid #141332;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;

export const AddTransactionHeader = () => {
  return <Header>Add New Transaction</Header>;
};
