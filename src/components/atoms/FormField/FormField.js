import React from 'react';
import { StyledInput } from '../Input/Input.style';
import styled from 'styled-components';
export const StyledFormField = styled.div`
  padding: 10px;
  input {
    width: 350px;
    height: 35px;
  }
  label {
    padding: 4px 8px;
    color: ${({ theme }) => theme.colors.darkGrey};
    display: block;
  }
`;

export const FormField = ({ name, id, type }) => (
  <StyledFormField>
    <label for={name}>{name}</label>
    <StyledInput name={name} id={id} type={type} />
  </StyledFormField>
);
