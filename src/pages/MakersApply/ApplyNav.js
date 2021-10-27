import React from 'react';
import styled from 'styled-components';

const ApplyNav = ({ onSubmitClick, onDraftClick, onReviseClick, mode }) => {
  return (
    <ApplyNavWrapper>
      <Content>
        <Title>메이커스 {mode === 'apply' ? '지원하기' : '수정하기'}</Title>
        <div>
          {mode === 'apply' ? (
            <>
              <Button onClick={e => onDraftClick(e)}>임시저장</Button>
              <MarginButton onClick={() => onSubmitClick()}>
                메이커 지원서 제출
              </MarginButton>
            </>
          ) : (
            <MarginButton onClick={e => onReviseClick(e)}>
              메이커 지원서 수정
            </MarginButton>
          )}
        </div>
      </Content>
    </ApplyNavWrapper>
  );
};

export default ApplyNav;

const ApplyNavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  height: 92px;
  background-color: white;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
`;

const Title = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.4rem;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  font-size: 1rem;
  background-color: #c7ccdb;
  cursor: pointer;
`;

const MarginButton = styled(Button)`
  background-color: black;
  margin-left: 0.5rem;
`;
