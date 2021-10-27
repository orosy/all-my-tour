import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from 'components/CommonStyled/StyledButton';

const Welcome = () => {
  const history = useHistory();

  return (
    <WelcomeContainer>
      <WelcomeDescription>
        <WelcomeTitle>환영합니다.</WelcomeTitle>
        <WelcomeMessage>
          메이커스에 지원하고 <br /> 투어를 이끄는 가이드가 되어보세요
        </WelcomeMessage>
      </WelcomeDescription>
      <ApplyMakersBtn
        onClick={() => {
          history.push('/signin');
        }}
      >
        로컬 메이커스 지원하기
      </ApplyMakersBtn>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  width: 1024px;
  margin: 12rem auto 5rem;
`;

const WelcomeDescription = styled.div`
  padding-left: 1rem;
`;

const WelcomeTitle = styled.p`
  margin-bottom: 0.3rem;
  font-size: 1.4rem;
`;

const WelcomeMessage = styled.p`
  margin-top: 1rem;
  line-height: 1.4;
  font-size: 1rem;
  font-weight: 300;
`;

const ApplyMakersBtn = styled(StyledButton)`
  display: block;
  margin: 30rem auto 0;
`;

export default Welcome;
