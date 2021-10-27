import StyledButton from 'components/CommonStyled/StyledButton';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'styles/color';
import axios from 'axios';
import { SIGN_IN_API } from 'config';
import useToggle from 'hooks/useToggle';

const Signin = () => {
  const history = useHistory();
  const [isOn, toggleisOn] = useToggle();

  const [disable, setDisable] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  useEffect(() => {
    if (emailValidation && passwordValidation) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [emailValidation, passwordValidation]);

  useEffect(() => {
    if (!formValues.email.length) return;
    checkEmailValidation(formValues.email);
  }, [formValues.email]);

  useEffect(() => {
    if (!formValues.password.length) return;
    checkPasswordValidation(formValues.password);
  }, [formValues.password]);

  const checkEmailValidation = email => {
    const regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setEmailValidation(regExp.test(email));
  };

  const checkPasswordValidation = password => {
    const regExp =
      /^(?=.*[0-9a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/i;
    setPasswordValidation(regExp.test(password));
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleLogin = e => {
    e.preventDefault();

    axios
      .post(SIGN_IN_API, {
        email: formValues.email,
        password: formValues.password,
        token_status: isOn,
      })
      .then(response => {
        if (response.data.message === 'SUCCESS') {
          alert('로그인되었습니다.');
          localStorage.setItem('access_token', response.data.token);
          history.push('/');
        }
      })
      .catch(error => {
        const message = error.response.data.message;
        if (message === 'PASSWORD_ERROR') {
          alert('비밀번호가 일치하지 않습니다.');
        }
      });
  };

  return (
    <>
      <SigninContainer>
        <SigninForm onSubmit={handleLogin}>
          <SigninInput
            name="email"
            type="text"
            placeholder="아이디(이메일)"
            onChange={handleChange}
          />
          <SigninInput
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleChange}
          />
          <SigninBtn disabled={disable}>로그인</SigninBtn>
          <StayLoggedIn>
            <StayLoggedInCheck onClick={toggleisOn} />
            <StayLoggedInSpanTag>로그인 상태 유지</StayLoggedInSpanTag>
          </StayLoggedIn>
        </SigninForm>
      </SigninContainer>
      <SigninEtc>
        <SigninExtra
          onClick={() => {
            history.push('/findpassword');
          }}
        >
          비밀번호 찾기
        </SigninExtra>
        <SigninExtra
          onClick={() => {
            history.push('/terms');
          }}
        >
          회원가입
        </SigninExtra>
      </SigninEtc>
    </>
  );
};

const SigninContainer = styled.div`
  display: flex;
  width: 1024px;
  margin: 10rem auto 3rem;
  justify-content: center;
`;

const SigninForm = styled.form``;

const SigninInput = styled.input`
  display: block;
  width: 500px;
  margin-top: 1.2rem;
  padding: 1.2rem;
  font-size: 1rem;
  border: 1px solid ${color.LIGHTGRAY};

  ::placeholder {
    color: ${color.GRAY};
  }
`;

const SigninBtn = styled(StyledButton)`
  width: 500px;
  margin-top: 1.2rem;
  padding: 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${color.WHITE};

  background: ${props =>
    props.disabled ? `${color.GRAY}` : `${color.DARKGRAY}`};
`;

const StayLoggedIn = styled.div`
  margin-top: 1rem;
`;

const StayLoggedInCheck = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.4rem;
`;

const StayLoggedInSpanTag = styled.span`
  color: ${color.DARKGRAY};
`;

const SigninEtc = styled.div`
  display: flex;
  justify-content: center;
`;

const SigninExtra = styled.span`
  color: ${color.GRAY};
  cursor: pointer;

  &:first-child {
    content: '';
    padding-right: 1rem;
    border-right: 1px solid ${color.GRAY};
  }

  &:last-child {
    padding-left: 1rem;
  }
`;

export default Signin;
