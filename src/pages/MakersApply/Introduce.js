import React from 'react';
import styled from 'styled-components';
import Required from './CommonComponent/Required';

const Introduce = ({ onChange, makerIntroduceLength, value }) => {
  return (
    <>
      <ContentTitle>
        메이커 소개<Required>*</Required>
      </ContentTitle>
      <MakerIntroduceWrapper>
        <MakerIntroduceInput
          name="makerIntroduce"
          onChange={onChange}
          placeholder="2~3문장으로 메이커님의 이력과 간단한 소개를 영문으로 작성해주세요"
          maxLength={200}
          value={value}
        />
        <MakerIntroduceCount>
          {`${makerIntroduceLength}/200`}
        </MakerIntroduceCount>
      </MakerIntroduceWrapper>
    </>
  );
};

export default Introduce;

const ContentTitle = styled.div`
  font-size: 1.2rem;
`;

const MakerIntroduceWrapper = styled.div`
  position: relative;
`;

const MakerIntroduceInput = styled.textarea`
  width: 500px;
  height: 150px;
  padding: 0.6rem;
  font-size: 1rem;
  border: 1px solid #dddddd;
`;

const MakerIntroduceCount = styled.div`
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  font-size: 0.7rem;
  color: #dddddd;
`;
