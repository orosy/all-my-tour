import styled from 'styled-components';
import { color } from 'styles/color';

const StyledInput = styled.input`
  display: block;
  width: 800px;
  margin-top: 0.5rem;
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid ${color.LIGHTGRAY};

  ::placeholder {
    color: ${color.GRAY};
  }
`;

export default StyledInput;
