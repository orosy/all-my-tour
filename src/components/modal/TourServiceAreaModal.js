import React from 'react';
import styled from 'styled-components';
import ServiceArea from '../../pages/MakersApply/CommonComponent/ServiceArea';
import { SERVICE_AREA_LIST } from '../../pages/MakersApply/data';

const TourServiceAreaModal = ({ handleOpenModal, onAreaClick }) => {
  return (
    <ModalWrapper onClick={handleOpenModal}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Flex>
          <div>투어서비스지역을 선택해주세요!</div>
          <Button onClick={handleOpenModal}>완료</Button>
        </Flex>
        <FlexWrap>
          {SERVICE_AREA_LIST.map(area => {
            return (
              <div key={area.id}>
                <div>{area.serviceArea}</div>
                <ServiceArea
                  id={area.id}
                  areaList={area.areaList}
                  onAreaClick={onAreaClick}
                />
              </div>
            );
          })}
        </FlexWrap>
      </ModalContent>
    </ModalWrapper>
  );
};

export default TourServiceAreaModal;

const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 800px;
  height: 500px;
  padding: 2rem;
  background-color: white;
  overflow: scroll;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  color: white;
  background-color: black;
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  align-items: centers;
  justify-content: space-between;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
