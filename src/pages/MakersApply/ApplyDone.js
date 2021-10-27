import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from 'components/CommonStyled/StyledButton';

const ApplyDone = () => {
  const history = useHistory();

  return (
    <WelcomeContainer>
      <WelcomeDescription>
        <WelcomeTitle>메이커스 지원이 완료 되었습니다.</WelcomeTitle>
        <WelcomeMessage>
          영업일 기준 7일 이내에 지원서 검토 후 <br />
          입력하신 이메일을 통해 메이커스 계약서가 전달될 예정입니다.
          <br />
          심사 진행 상태의 경우 MYPAGE에서 확인이 가능합니다.
        </WelcomeMessage>
      </WelcomeDescription>
      <ApplyMakersBtn
        onClick={() => {
          history.push('/mypage');
        }}
      >
        메이커스 심사 상태 확인하기
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

export default ApplyDone;
