import React from 'react';
import styled from 'styled-components';

const AddHomepage = ({
  inputValue,
  onHomepageValueChange,
  onInputAddressClick,
  onAddressAddClick,
  pageList,
  onRemoveHomepageClick,
}) => {
  return (
    <>
      <ContentTitle>홈페이지 또는 SNS</ContentTitle>
      <AddHomePageWrapper>
        <Flex>
          <InputBox
            value={inputValue}
            placeholder="홈페이지 또는 SNS를 입력해주세요."
            onChange={onHomepageValueChange}
            onClick={() => onInputAddressClick()}
          />
          <Button onClick={() => onAddressAddClick()}>+</Button>
        </Flex>
        {pageList.map((address, index) => {
          return (
            <Flex id={index} key={index}>
              <AddedHomePage>{address}</AddedHomePage>
              <Button onClick={e => onRemoveHomepageClick(e)}>-</Button>
            </Flex>
          );
        })}
      </AddHomePageWrapper>
    </>
  );
};

export default AddHomepage;

const ContentTitle = styled.div`
  font-size: 1.2rem;
`;

const AddHomePageWrapper = styled.div`
  width: 500px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin-top: 0.5rem;
`;

const InputBox = styled.input`
  width: 440px;
  height: 50px;
  padding-left: 1rem;
  font-size: 1rem;
  border: 1px solid #dddddd;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid #dddddd;
  font-size: 35px;
  color: gray;
  cursor: pointer;
`;

const AddedHomePage = styled.div`
  display: flex;
  align-items: center;
  width: 440px;
  height: 50px;
  padding-left: 1rem;
  border: 1px solid #dddddd;
  font-size: 1rem;
  cursor: pointer;
`;
