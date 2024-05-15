import s, { DefaultTheme } from "styled-components";

export const theme = {
    primary: '#b2daed',
    secondary: '#333',
};

interface BtnProps {
    variant?: 'primary' & 'secondary';
    margin?: '1' & '2';
}

export const Filters = s.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const ButtonFilter = s.button<BtnProps>`
  background: ${props => props.variant === 'primary' ? props.theme.primary : props.theme.secondary};
  border: 1px solid ${props => props.variant === 'secondary' ? props.theme.primary : props.theme.secondary};
  color: ${props => props.variant === 'secondary' ? props.theme.primary : props.theme.secondary};
  width: 100px;
  padding: 4px 5px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  margin: 0 10px;

  &:hover{
    cursor: pointer;
  }
`;

export const StyledInput = s.input`
  width: 150px;
  padding: 10px 20px;
  margin: 10px 0;
  background: transparent;
  text-align: center;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${theme.primary};
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  outline: none;

  &:focus {
    border-color: #d5c8b8;
    outline: none;
  }
`;

export const ButtonDefault = s.button<BtnProps>`
  background: transparent;
  border: 1px solid #d5c8b8;
  color: #d5c8b8;
  width: auto;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  margin: 0 0 0 10px;

  &:hover{
    cursor: pointer;
  }
`;