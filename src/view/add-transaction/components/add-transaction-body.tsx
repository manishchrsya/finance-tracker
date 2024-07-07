import { useCallback } from "react";
import styled from "styled-components";
import { Dropdown, ImageComponent, InputField } from "components";
import addTransactionIllustration from "assets/illustrations/create-transaction.svg";
import { useRecoilState } from "recoil";
import { AddTransactionFormErrorState, AddTransactionFormState } from "store";
import { categoryOption } from "../constants";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  height: 100%;
  padding: 12px 32px;
  padding-top: 20px;

  @media (max-width: 450px) {
    gap: 24px;
  }
`;

const TransactionForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 450px) {
    gap: 20px;
  }
`;

const FormFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FieldLabel = styled.label`
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  text-transform: capitalize;
`;

const TransactionIllustration = styled.div`
  width: 240px;
  height: 240px;

  @media (max-width: 450px) {
    width: 180px;
    height: 180px;
  }
`;

export const AddTransactionBody = () => {
  const [error, setError] = useRecoilState(AddTransactionFormErrorState);

  const [transactionForm, setTransactionForm] = useRecoilState(
    AddTransactionFormState
  );

  const handleChange = useCallback(
    (
      e: any,
      name: keyof typeof transactionForm,
      component: "input" | "select"
    ) => {
      setTransactionForm((prev) => {
        const value = component === "input" ? e.target.value : e;
        return { ...prev, [name]: value };
      });
      setError((prev) => ({ ...prev, [name]: false }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleBlur = useCallback(
    (name: keyof typeof transactionForm) => {
      const value = transactionForm[name] as string;
      if (!value.trim()) {
        setError((prev) => ({ ...prev, [name]: true }));
      }
      if (name === "description" && value.length < 4) {
        setError((prev) => ({ ...prev, [name]: true }));
      }
    },
    [setError, transactionForm]
  );

  return (
    <BodyContainer>
      <TransactionIllustration>
        <ImageComponent src={addTransactionIllustration} />
      </TransactionIllustration>
      <TransactionForm>
        <FormFieldWrapper>
          <FieldLabel>Description</FieldLabel>
          <InputField
            handleChange={(e) => handleChange(e, "description", "input")}
            handleBlur={() => handleBlur("description")}
            id="description"
            name="description"
            placeholder="Enter Description"
            type={"text"}
            value={transactionForm.description}
            autoFocus
            errorMessage="Description should be min 4 characters long"
            isError={error.description}
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <FieldLabel>Category</FieldLabel>
          <Dropdown
            handleChange={(e) => handleChange(e, "category", "select")}
            options={categoryOption}
            value={transactionForm.category}
          />
        </FormFieldWrapper>
        <FormFieldWrapper>
          <FieldLabel>Amount</FieldLabel>
          <InputField
            handleChange={(e) => handleChange(e, "amount", "input")}
            id="amount"
            name="amount"
            placeholder="Enter Amount"
            type={"number"}
            value={transactionForm.amount}
            handleBlur={() => handleBlur("amount")}
            errorMessage="Invalid amount"
            isError={error.amount}
          />
        </FormFieldWrapper>
      </TransactionForm>
    </BodyContainer>
  );
};
