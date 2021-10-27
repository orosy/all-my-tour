import React from 'react';
import styled from 'styled-components';
import Required from './Required';

const InputBoxDiv = ({ onChange, data, value }) => {
  const { title, placeholder, name, type } = data;
  return (
    <>
      {data && (
        <>
          <ContentTitle>
            {title}
            <Required />
          </ContentTitle>
          <Input
            value={value}
            placeholder={placeholder}
            name={name}
            type={type}
            onChange={onChange}
          />
        </>
      )}
    </>
  );
};

export default InputBoxDiv;

const ContentTitle = styled.div`
  font-size: 1.2rem;
`;

const Input = styled.input`
  width: 500px;
  height: 50px;
  padding-left: 1rem;
  font-size: 1rem;
  border: 1px solid #dddddd;
`;
