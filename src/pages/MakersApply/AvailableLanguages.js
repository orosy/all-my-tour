import React from 'react';
import styled from 'styled-components';
import { LANGUAGE_LIST } from './data';

const AvailableLanguages = ({
  languages,
  onSelect,
  removeLanguage,
  setLanguages,
}) => {
  return (
    <>
      <ContentTitle>
        사용가능 언어
        <DuplicateSelectionAvailable>중복선택 가능</DuplicateSelectionAvailable>
      </ContentTitle>
      <LanguagesWrapper>
        <ComboBox onChange={onSelect}>
          <option value="">사용가능한 언어를 선택해주세요</option>
          {LANGUAGE_LIST.map(language => {
            return (
              <option key={language.id} value={language.language}>
                {language.language}
              </option>
            );
          })}
        </ComboBox>
        <SelectedValues>
          {languages.map((language, index) => {
            return (
              <Language
                id={index}
                key={index}
                onClick={e => removeLanguage(e, languages, setLanguages)}
              >
                {language} &#215;
              </Language>
            );
          })}
        </SelectedValues>
      </LanguagesWrapper>
    </>
  );
};

export default AvailableLanguages;

const ContentTitle = styled.div`
  font-size: 1.2rem;
`;

const DuplicateSelectionAvailable = styled.span`
  padding-left: 5px;
  font-size: 0.8rem;
  color: gray;
`;

const LanguagesWrapper = styled.div`
  width: 500px;
`;

const ComboBox = styled.select`
  width: 500px;
  height: 50px;
  font-size: 1rem;
  text-align: center;
  border-color: #dddddd;
  color: gray;
`;

const SelectedValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Language = styled.div`
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
