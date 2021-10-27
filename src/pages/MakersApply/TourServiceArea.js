import React from 'react';
import styled from 'styled-components';
import TourServiceAreaModal from 'components/modal/TourServiceAreaModal';
import { useApplyContext } from 'contexts/Context';

const TourServiceArea = ({ handleOpenModal, tourServiceAreaModal }) => {
  const { serviceAreaList, setServiceAreaList } = useApplyContext();

  const handleAreaClick = e => {
    const selectedValue = e.target.firstChild.data;
    serviceAreaList.includes(selectedValue)
      ? setServiceAreaList(
          serviceAreaList.filter(area => {
            return area !== selectedValue;
          })
        )
      : setServiceAreaList([...serviceAreaList, selectedValue]);
  };

  return (
    <>
      <Title>투어서비스지역</Title>
      <div>
        <Button onClick={handleOpenModal}>
          투어 가능 지역을 선택해주세요.
        </Button>
        <SelectWrapper>
          {serviceAreaList.map((area, index) => {
            return (
              <Area id={index} key={index} onClick={handleAreaClick}>
                {area} &#215;
              </Area>
            );
          })}
        </SelectWrapper>
      </div>
      {tourServiceAreaModal && (
        <TourServiceAreaModal
          handleOpenModal={handleOpenModal}
          onAreaClick={handleAreaClick}
        />
      )}
    </>
  );
};

export default TourServiceArea;

const Title = styled.div`
  font-size: 1.2rem;
`;

const Button = styled.button`
  width: 500px;
  height: 50px;
  padding: 0rem 1rem;
  color: gray;
  background-color: #f2f4fa;
  border: 1px solid #dddddd;
  font-size: 1rem;
  cursor: pointer;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 500px;
`;

const Area = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0rem 1rem;
  margin: 0.5rem 0.25rem;
  background-color: black;
  color: white;
  cursor: pointer;
`;
