import React from 'react';
import styled from 'styled-components';
import HoverInformation from './HoverInformation';
import { useApplyContext } from 'contexts/Context';
import {
  TOUR_TYPE_LIST,
  MAXIMUM_NUMBER_PEOPLE_BOARD,
  MAXIMUM_NUMBER_LOADS,
} from './data';

const ListAvailableTours = ({ clickTourType, tourType, onTourNumChange }) => {
  const { setHover } = useApplyContext();
  return (
    <TourTypeWrapper>
      <Position>
        진행가능한 투어의 종류
        <Question
          src="images/question.png"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <HoverInformation />
      </Position>
      <div>
        <ButtonWrapper>
          {TOUR_TYPE_LIST.map(type => {
            return (
              <Button
                key={type.id}
                onClick={e => clickTourType(e)}
                tourType={tourType.type}
                content={type.content}
              >
                {type.content}
              </Button>
            );
          })}
        </ButtonWrapper>
        {tourType.type === '차량투어' && (
          <LoadsAndPeople>
            탑승 가능한 최대 인원
            <ComboBox onChange={e => onTourNumChange(e, 'peopleNum')}>
              <option value=""></option>
              {MAXIMUM_NUMBER_PEOPLE_BOARD.map(number => {
                return (
                  <option key={number.id} value={number.number}>
                    {number.number}
                  </option>
                );
              })}
            </ComboBox>
            명 적재 가능한 짐의 갯수
            <ComboBox onChange={e => onTourNumChange(e, 'loadsNum')}>
              <option value=""></option>
              {MAXIMUM_NUMBER_LOADS.map(number => {
                return (
                  <option key={number.id} value={number.number}>
                    {number.number}
                  </option>
                );
              })}
            </ComboBox>
            개
          </LoadsAndPeople>
        )}
      </div>
    </TourTypeWrapper>
  );
};

export default ListAvailableTours;

const TourTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
`;

const Question = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 0.2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const Button = styled.button`
  width: 158px;
  height: 50px;
  color: ${props => (props.tourType === props.content ? 'white' : 'gray')};
  background-color: ${props =>
    props.tourType === props.content ? 'black' : 'white'};
  border: 1px solid #dddddd;
  font-size: 1rem;
  cursor: pointer;
`;

const LoadsAndPeople = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: gray;
`;

const Position = styled.div`
  font-size: 1.2rem;
  position: relative;
`;

const ComboBox = styled.select`
  width: 50px;
  height: 30px;
  margin: 0.5rem;
  border-color: #dddddd;
  font-size: 1rem;
  text-align: center;
  color: gray;
`;
