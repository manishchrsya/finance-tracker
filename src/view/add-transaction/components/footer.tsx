import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { Button } from "components";
import { AddTransactionModalStatus } from "store";

const Footer = styled.div`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  align-items: center;
  padding: 0 12px;
  border-top: 1px solid #141332;
`;

export const AddTransactionFooter = () => {
  const setIsOpen = useSetRecoilState(AddTransactionModalStatus);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddTransaction = useCallback(() => {
    //
  }, []);

  return (
    <Footer>
      <Button handleClick={handleClose}>Close</Button>
      <Button handleClick={handleAddTransaction}>Add</Button>
    </Footer>
  );
};
