import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'styles/color';
import StyledButton from 'components/CommonStyled/StyledButton';
import axios from 'axios';
import { PW_NEWPW_API } from 'config';

const NewPassword = () => {
  const [values, setValues] = useState({ password: '' });

  const history = useHistory();

  const changePassword = () => {
    const token = localStorage.getItem('pwc-token');

    axios
      .post(
        PW_NEWPW_API,
        { newpw: values.password },
        {
          headers: {
            Authorization: token,
          },
        },
        { withCredentials: true }
      )
      .then(res => {
        console.log(res);
        alert('성공');
        history.push('/welcome');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <NewPwContainer>
      <NewPwDescription>
        <NewPwPtag>이메일 인증이 완료되었습니다.</NewPwPtag>
        <NewPwPtag>새로운 비밀번호를 입력해주세요.</NewPwPtag>
      </NewPwDescription>
      <SettingNewPw>
        <SettingNewPwTitle>새로운 비밀번호</SettingNewPwTitle>
        <SettingNewPwWrapper>
          <SettingNewPwInput
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={handleChange}
          />
          <SettingNewPwInput
            name="repassword"
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            onChange={handleChange}
          />
          <SettingNewPwInfo>
            <i className="fas fa-times"></i>
            <SettingNewPwInfoSpan>
              8~20자의 숫자, 문자, 특수문자 포함
            </SettingNewPwInfoSpan>
          </SettingNewPwInfo>
        </SettingNewPwWrapper>
      </SettingNewPw>
      <SettingNewPwBtn
        onClick={() => {
          changePassword();
        }}
      >
        확인
      </SettingNewPwBtn>
    </NewPwContainer>
  );
};

const NewPwContainer = styled.div`
  width: 1024px;
  margin: 10rem auto 5rem;
`;

const NewPwDescription = styled.div`
  padding-left: 1rem;
`;

const NewPwPtag = styled.p`
  margin-bottom: 0.3rem;
  font-size: 1.4rem;
  font-weight: 600;
`;

const SettingNewPw = styled.div`
  margin-top: 3rem;
`;

const SettingNewPwTitle = styled.span`
  font-size: 0.9rem;
`;

const SettingNewPwWrapper = styled.div`
  position: relative;
  margin: 0.7rem 0;
`;

const SettingNewPwInput = styled.input`
  display: block;
  width: 500px;
  padding: 1.2rem;
  font-size: 1rem;
  border: 1px solid ${color.LIGHTGRAY};

  ::placeholder {
    color: ${color.GRAY};
  }

  &:first-child {
    margin-bottom: 0.5rem;
  }
`;

const SettingNewPwInfo = styled.div`
  margin-top: 0.7rem;
  font-size: 0.8rem;
  color: red;
`;

const SettingNewPwInfoSpan = styled.span`
  margin-left: 0.7rem;
  color: ${color.BLACK};
`;

const SettingNewPwBtn = styled(StyledButton)`
  width: 500px;
  margin-top: 5rem;
  background: ${color.GRAY};
  font-size: 1rem;
`;

export default NewPassword;
