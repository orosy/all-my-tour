import React from 'react';
import styled from 'styled-components';
import { TOUR_SPECIALTY_LIST } from './data';

const TourSpecialty = ({
  specialtyList,
  selectValue,
  removeLanguage,
  setSpecialtyList,
}) => {
  return (
    <>
      <ContentTitle>
        투어 전문분야
        <DuplicateSelectionAvailable>중복선택 가능</DuplicateSelectionAvailable>
      </ContentTitle>
      <TourSpecialtyWrapper>
        <ComboBox id="language" name="language" onChange={selectValue}>
          <option value="">투어 전문분야를 선택해주세요</option>
          {TOUR_SPECIALTY_LIST.map(tour => {
            return (
              <option key={tour.id} value={tour.content}>
                {tour.content}
              </option>
            );
          })}
        </ComboBox>
        <SelectWrapper>
          {specialtyList.map((specialty, index) => {
            return (
              <Specialty
                id={index}
                key={index}
                onClick={e =>
                  removeLanguage(e, specialtyList, setSpecialtyList)
                }
              >
                {specialty} &#215;
              </Specialty>
            );
          })}
        </SelectWrapper>
      </TourSpecialtyWrapper>
    </>
  );
};

export default TourSpecialty;

const ContentTitle = styled.div`
  font-size: 1.2rem;
`;

const DuplicateSelectionAvailable = styled.span`
  padding-left: 5px;
  font-size: 0.8rem;
  color: gray;
`;

const TourSpecialtyWrapper = styled.div`
  width: 500px;
`;

const ComboBox = styled.select`
  width: 500px;
  height: 50px;
  text-align: center;
  border-color: #dddddd;
  font-size: 1rem;
  color: gray;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Specialty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 0.5rem 0.25rem;
  padding: 0rem 1rem;
  background-color: black;
  color: white;
  cursor: pointer;
`;
