import React from 'react';
import styled from 'styled-components';
import { useApplyContext } from 'contexts/Context';

const ServiceArea = ({ areaList, onAreaClick }) => {
  const { serviceAreaList } = useApplyContext();

  return (
    <ServiceAreaWrapper>
      {areaList.map(area => {
        return (
          <Area
            key={area.id}
            onClick={onAreaClick}
            serviceAreaList={serviceAreaList}
            area={area.area}
          >
            {area.area}
          </Area>
        );
      })}
    </ServiceAreaWrapper>
  );
};

export default ServiceArea;

const Area = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100px;
  margin: 0.5rem 0.5rem 0.5rem 0rem;
  color: white;
  background-color: ${props =>
    props.serviceAreaList.includes(props.area) ? 'black' : '#dddddd'};
  cursor: pointer;
`;

const ServiceAreaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 365px;
  margin-bottom: 1rem;
`;
