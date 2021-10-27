import StyledButton from 'components/CommonStyled/StyledButton';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'styles/color';

const Nav = () => {
  const history = useHistory();
  const token = localStorage.getItem('access_token');

  return (
    <NavContainer>
      <NavLeft>
        <NavLogo
          Img={'/images/allmytour.jpeg'}
          onClick={() => {
            history.push('/');
          }}
        />
        <NavTitle
          onClick={() => {
            history.push('/');
          }}
        >
          allmytour makers
        </NavTitle>
      </NavLeft>
      <NavRight>
        <NavSigninBtn
          onClick={() => {
            if (!!token) {
              history.push('/mypage');
            } else {
              history.push('/signin');
              if (!!token) {
                alert('로그인되었습니다.');
              }
            }
          }}
        >
          {!!token ? '마이 페이지' : '로그인'}
        </NavSigninBtn>
      </NavRight>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 21rem 1rem 20rem;
  justify-content: space-between;
  background-color: ${color.WHITE};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 3;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const NavLogo = styled.img.attrs(props => ({
  src: props.Img,
}))`
  width: 60px;
  cursor: pointer;
`;

const NavTitle = styled.span`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.4rem;
  cursor: pointer;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;

const NavSigninBtn = styled(StyledButton)`
  padding: 0.5rem;
  font-size: 1rem;
  background: ${color.WHITE};
  color: ${color.BLACK};
  border: 1px solid ${color.BLACK};
`;

export default Nav;
