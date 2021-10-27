import React from 'react';
import styled from 'styled-components';
import { useApplyContext } from 'contexts/Context';

const HoverInformation = () => {
  const { hover } = useApplyContext();
  return (
    <>
      {hover && (
        <Hover>
          차량으로 이동하는 투어 진행이 가능하신가요?
          <br />
          <br />
          렌트 및 차량 가이드님과 협업 가능시에도
          <br />
          가능으로 선택해주시면 됩니다.
        </Hover>
      )}
    </>
  );
};

export default HoverInformation;

const Hover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 13px;
  left: 185px;
  width: 280px;
  height: 90px;
  border: 1px solid #dddddd;
  background-color: white;
  font-size: 0.8rem;
`;
