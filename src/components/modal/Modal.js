import React from 'react';
import ModalPortal from './Portal';
import styled from 'styled-components';
import { color } from 'styles/color';

const Modal = ({ content, onClose }) => {
  return (
    <ModalPortal>
      <Background>
        <Content>{content}</Content>
        <CloseBtn onClick={onClose}>&times;</CloseBtn>
      </Background>
    </ModalPortal>
  );
};

const Background = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.01);
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  text-align: center;
`;

const Content = styled.div`
  position: relative;
  padding: 200px;
  width: 1024px;
  height: 100%;
  overflow: scroll;
  background: ${color.WHITE};
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 100px;
  right: 340px;
  color: ${color.GRAY};
  font-size: 2rem;
  z-index: 10;
  cursor: pointer;
`;

export default Modal;
