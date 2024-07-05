import { Fragment, useCallback, useMemo, useRef } from "react";
import styled from "styled-components";
import { useGetTransactions } from "../hooks";
import { formFields } from "../constants";
import { ImageComponent } from "components";
import addTransactionIllustration from "assets/illustrations/create-transaction.svg";

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  height: 100%;
  padding: 12px 32px;
  padding-top: 20px;
`;

const TransactionForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

const FieldLabel = styled.label`
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  text-transform: capitalize;
`;

const FieldField = styled.input`
  font-size: 16px;
`;

const TransactionIllustration = styled.div`
  width: 240px;
  height: 240px;
`;

export const AddTransactionBody = () => {
  const { getFormFields } = useGetTransactions();

  const ref = useRef();

  const handleChange = useCallback((e: any, name: any) => {
    //
  }, []);

  const renderForm = useMemo(() => {
    return formFields.map((field) => {
      return (
        <FormFieldWrapper key={field.name}>
          <FieldLabel>{field.label}</FieldLabel>
          {/* <FieldField placeholder={field.placeholder} /> */}
          <Fragment>{getFormFields(field, ref, handleChange)}</Fragment>

          {/* <InputField
            value={""}
            handleChange={() => ({})}
            id={"id"}
            name=""
            placeholder=""
            type={"text"}
            isError={true}
            errorMessage="something went wrong"
            inputRef={ref}
          />
          <Dropdown
            handleChangeCountry={() => ({})}
            options={[] as any}
            value={{}}
          /> */}
        </FormFieldWrapper>
      );
    });
  }, [getFormFields, handleChange]);

  return (
    <BodyContainer>
      <TransactionIllustration>
        <ImageComponent src={addTransactionIllustration} style={{}} />
      </TransactionIllustration>
      <TransactionForm>{renderForm}</TransactionForm>
    </BodyContainer>
  );
};
