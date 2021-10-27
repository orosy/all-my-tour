import React from 'react';
import styled from 'styled-components';
import StyledButton from 'components/CommonStyled/StyledButton';

const Main = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <MainImage Img={'/images/tourguide.jpeg'} />
        <MainImage Img={'/images/introduction.jpeg'} />
        <MainBtn>메이커가 되어 투어를 등록해보세요!</MainBtn>
      </MainWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 1024px;
  margin: 8rem auto 5rem;
`;

const MainWrapper = styled.div``;

const MainImage = styled.img.attrs(props => ({
  src: props.Img,
}))`
  width: 100%;
  padding-top: 3rem;
`;

const MainBtn = styled(StyledButton)`
  display: block;
  margin: 5rem auto 0;
`;

export default Main;
