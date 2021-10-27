import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'styles/color';
import StyledButton from 'components/CommonStyled/StyledButton';
import ModalPortal from 'components/modal/Portal';
import Modal from 'components/modal/Modal';
import TERMS_DATA from './data';

const Terms = () => {
  const history = useHistory();

  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    ckbox1: false,
    ckbox2: false,
    ckbox3: false,
    ckbox4: false,
  });
  const [modalOn, setModalOn] = useState(false);

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  const toggleCheck = inputName => {
    setChecked(prevState => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  const selectAll = value => {
    setCheckedAll(value);
    setChecked(prevState => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  const handleModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <Container>
      <TermsDescription>
        올마이투어 메이커스 <br /> 서비스약관에 동의해주세요.
      </TermsDescription>
      <CheckboxWrapper>
        <CheckboxAgree
          type="checkbox"
          id="ckbox"
          onChange={e => selectAll(e.target.checked)}
          checked={checkedAll}
        />
        <CheckboxLabel>모두 동의합니다.</CheckboxLabel>
        <CheckboxDescription>
          선택항목에 동의하지 않은 경우도 회원가입 및 <br /> 일반적인 서비스를
          이용할 수 있습니다.
        </CheckboxDescription>
        <CheckboxTermsWrapper>
          {TERMS_DATA.map((data, idx) => {
            return (
              <TermsContainer key={idx}>
                <CheckboxAgree
                  type="checkbox"
                  name={data.name}
                  onChange={() => {
                    toggleCheck(data.name);
                  }}
                  checked={checked[data.name]}
                />
                <CheckboxLabel>{data.label}</CheckboxLabel>
                <TermsIcon onClick={handleModal}>
                  <i className="fas fa-chevron-right"></i>
                </TermsIcon>
                <ModalPortal>
                  {modalOn && (
                    <Modal content={data.content} onClose={handleModal} />
                  )}
                </ModalPortal>
              </TermsContainer>
            );
          })}
        </CheckboxTermsWrapper>
      </CheckboxWrapper>
      <AgreeBtn
        onClick={() => {
          history.push({
            pathname: '/signup',
            state: { checked },
          });
        }}
      >
        동의합니다
      </AgreeBtn>
    </Container>
  );
};

const Container = styled.div`
  width: 1024px;
  margin: 10rem auto 5rem;
`;

const TermsDescription = styled.p`
  padding-left: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.7;
`;

const CheckboxWrapper = styled.div`
  margin-top: 3rem;
`;

const CheckboxAgree = styled.input`
  margin-bottom: 1.4rem;
`;

const CheckboxLabel = styled.label`
  margin-left: 0.5rem;
  font-size: 1.1rem;
`;

const CheckboxDescription = styled.p`
  margin: 0 0 2rem 1.8rem;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.7;
`;

const CheckboxTermsWrapper = styled.div`
  padding-top: 2rem;
  border-top: 1px solid ${color.LIGHTGRAY};
`;

const TermsContainer = styled.div`
  position: relative;
  margin: 1rem 0 2rem 0;
`;

const TermsIcon = styled.div`
  position: absolute;
  top: 0;
  right: 3rem;
  cursor: pointer;
`;

const AgreeBtn = styled(StyledButton)`
  display: block;
  margin: 5rem auto 0;
  padding: 1.4rem 10rem;
`;

export default Terms;
