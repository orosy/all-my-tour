import React from 'react';
import styled from 'styled-components';

const Required = () => {
  return <RequiredWrapper>*</RequiredWrapper>;
};

export default Required;

const RequiredWrapper = styled.span`
  color: red;
`;
