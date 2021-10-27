import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'styles/color';
import StyledButton from 'components/CommonStyled/StyledButton';
import axios from 'axios';
import { PW_EMAIL_API, PW_AUTH_API } from 'config';

const FindPassword = () => {
  const [values, setValues] = useState({
    email: '',
    number: '',
    auth_number: '',
  });

  const history = useHistory();

  const [isHidden, setIsHidden] = useState(true);
  const [disable, setDisable] = useState(false);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);

  const sendEmail = () => {
    axios
      .post(PW_EMAIL_API, {
        email: values.email,
      })
      .then(res => {
        console.log(res);
        alert('성공');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const authEmail = () => {
    axios
      .post(PW_AUTH_API, {
        email: values.email,
        auth_number: values.auth_number,
      })
      .then(res => {
        if (res.data.message === 'SUCCESS') {
          alert('성공');
          localStorage.setItem('pwc-token', res.data.token);
          history.push('/newpassword');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!isHidden && time.current > 0) {
      timerId.current = setInterval(() => {
        setMinutes(parseInt(time.current / 60));
        setSeconds(time.current % 60);
        time.current -= 1;
      }, 1000);

      return () => {
        clearInterval(timerId.current);
      };
    }
  }, [isHidden, time]);

  useEffect(() => {
    if (time.current < 0) {
      clearInterval(timerId.current);
    }
  }, [seconds]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const isHiddenChange = () => {
    setIsHidden(!isHidden);
  };

  return (
    <PasswordContainer>
      <PasswordDescription>
        <PasswordPtag>비밀번호 재설정을 위해</PasswordPtag>
        <PasswordPtag>이메일 인증을 진행합니다.</PasswordPtag>
        <PasswordSpanTag>
          가입하신 이메일로 본인 인증을 진행해주세요.
        </PasswordSpanTag>
      </PasswordDescription>
      <Certification>
        <CertificationTitle>아이디(이메일)</CertificationTitle>
        <CertificationWrapper>
          <CertificationInput
            name="email"
            type="text"
            placeholder="이메일을 입력해주세요."
            onChange={handleChange}
            disabled={disable}
          />
          <CertificationBtn1
            disabled={disable}
            onClick={() => {
              isHiddenChange();
              setDisable(true);
              sendEmail();
            }}
          >
            인증번호 받기
          </CertificationBtn1>
        </CertificationWrapper>
        <CertificationWrapper>
          <CertificationHidden isHidden={isHidden}>
            <CertificationInput
              name="auth_number"
              type="text"
              onChange={handleChange}
            />
            <CertificationTimer>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </CertificationTimer>
            <CertificationDeleteBtn>
              <i className="fas fa-times-circle"></i>
            </CertificationDeleteBtn>
            <CertificationBtn2
              type="text"
              onClick={() => {
                authEmail();
              }}
            >
              인증번호 확인
            </CertificationBtn2>
          </CertificationHidden>
        </CertificationWrapper>
        <CertificationUl>
          <Certificationli>
            ∙ 입력한 이메일 주소로 인증번호가 발송됩니다.
          </Certificationli>
          <Certificationli>
            ∙ 인증번호가 오지 않는다면 스팸 차단 여부를 확인해주세요.
          </Certificationli>
        </CertificationUl>
      </Certification>
    </PasswordContainer>
  );
};

const PasswordContainer = styled.div`
  width: 1024px;
  margin: 10rem auto 5rem;
`;

const PasswordDescription = styled.div`
  padding-left: 1rem;
`;

const PasswordPtag = styled.p`
  margin-bottom: 0.3rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const PasswordSpanTag = styled.span`
  display: inline-block;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 300;
`;

const Certification = styled.div`
  margin-top: 3rem;
`;

const CertificationTitle = styled.span`
  font-size: 0.9rem;
`;

const CertificationWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0.7rem 0;
`;

const CertificationHidden = styled.div`
  display: ${props => (props.isHidden ? 'none' : 'flex')};
`;

const CertificationInput = styled.input`
  display: block;
  width: 500px;
  padding: 1.2rem;
  font-size: 1rem;
  border: 1px solid ${color.LIGHTGRAY};

  ::placeholder {
    color: ${color.GRAY};
  }

  background: ${props =>
    props.disabled ? `${color.DISABLED}` : `${color.WHITE}`};
  color: ${props => (props.disabled ? `${color.GRAY}` : `${color.DARKGRAY}`)};
`;

const CertificationTimer = styled.span`
  position: absolute;
  top: 1.2rem;
  left: 25rem;
  font-size: 1rem;
`;

const CertificationDeleteBtn = styled.div`
  position: absolute;
  top: 1.1rem;
  left: 28rem;
  font-size: 1.2rem;
  color: ${color.LIGHTGRAY};
  cursor: pointer;
`;

const CertificationBtn1 = styled(StyledButton)`
  width: 220px;
  height: 58px;
  margin-left: 1rem;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;

  background: ${props =>
    props.disabled ? `${color.DISABLED}` : `${color.WHITE}`};
  color: ${props => (props.disabled ? `${color.GRAY}` : `${color.DARKGRAY}`)};
  border: ${props =>
    props.disabled ? `1px solid ${color.GRAY}` : `1px solid ${color.BLACK}`};
`;

const CertificationBtn2 = styled(StyledButton)`
  width: 220px;
  height: 58px;
  margin-left: 1rem;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  background: ${color.WHITE};
  color: ${color.DARKGRAY};
  border: 1px solid ${color.BLACK};
`;

const CertificationUl = styled.ul``;

const Certificationli = styled.li`
  margin-top: 0.4rem;
  font-size: 0.8rem;
`;

export default FindPassword;
