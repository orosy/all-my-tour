import React from 'react';
import styled from 'styled-components';
import { BANK_LIST } from './data';

const BankAccountInformation = ({
  onBankSelect,
  onBankAccountChange,
  bankAccount,
}) => {
  const { bankAccountName, bankAccountNumber, bankAccountHolder } = bankAccount;
  return (
    <>
      <Title>입금받을 계좌번호</Title>
      <div>
        <ComboBox onChange={onBankSelect} value={bankAccountName}>
          <option value="">은행명</option>
          {BANK_LIST.map(bank => {
            return (
              <option key={bank.id} value={bank.name}>
                {bank.name}
              </option>
            );
          })}
        </ComboBox>
        <div>
          <Input
            name="bankAccountNumber"
            type="text"
            placeholder="계좌번호를 입력해주세요"
            value={bankAccountNumber}
            onChange={onBankAccountChange}
          />
        </div>
        <div>
          <Input
            name="bankAccountHolder"
            type="text"
            placeholder="예금주를 입력해주세요"
            value={bankAccountHolder}
            onChange={onBankAccountChange}
          />
        </div>
      </div>
    </>
  );
};

export default BankAccountInformation;

const Title = styled.div`
  font-size: 1.2rem;
`;

const Input = styled.input.attrs(props => ({
  type: props.type,
}))`
  border: 1px solid #dddddd;
  width: 500px;
  height: 50px;
  padding-left: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const ComboBox = styled.select`
  width: 500px;
  height: 50px;
  margin-bottom: 1rem;
  text-align: center;
  border-color: #dddddd;
  font-size: 1rem;
  color: gray;
`;
