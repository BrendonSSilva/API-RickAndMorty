import s, { DefaultTheme } from "styled-components";

export const theme = {
  primary: '#b2daed',
  secondary: '#333',
  tertiary: '#ecf0a6',
};

interface BtnProps {
  variant?: 'primary' & 'secondary';
  margin?: '1' & '2';
}

export const Filters = s.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  gap: 10px; /* Adiciona espaço entre os botões */

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonFilter = s.button<BtnProps>`
  background: ${props => props.variant === 'primary' ? props.theme.primary : props.theme.secondary};
  border: 1px solid ${props => props.variant === 'secondary' ? props.theme.primary : props.variant === 'tertiary' ? props.theme.tertiary : props.theme.secondary};
  color: ${props => props.variant === 'secondary' ? props.theme.primary : props.variant === 'tertiary' ? props.theme.tertiary : props.theme.secondary};
  width: 100px;
  padding: 4px 5px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  margin: 5px 10px;

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

export const Card = s.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0 30px;

@media(max-width: 1400px) {
  grid-template-columns: repeat(4, 1fr);
}
@media(max-width: 1024px) {
  grid-template-columns: repeat(3, 1fr);
}
@media(max-width: 767px) {
  grid-template-columns: repeat(2, 1fr);
}
@media(max-width: 400px) {
  grid-template-columns: repeat(1, 1fr);
}
`

export const CardCharacter = s.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  font-size: 16px;
  margin: 10px auto;

p{
  margin: 5px 0;
  display: flex;

  span{
    margin-right: 5px;
  }
}

img{
    width: 150px;
    border-radius: 10px;
}
summary {
  display: flex;
  align-items: center;
  color: ${theme.tertiary};
  
  &:hover {
    transition: .2s;
    cursor: pointer;
    color: #fff;
  }
}
`

export const FooterInfos = s.div`
display: flex;
justify-content: center;
margin: 0 auto;

svg{
  stroke: #fff;
  margin: 10px;
  stroke: ${theme.primary};
  
  &:hover {
    stroke: ${theme.tertiary};
  }
}
`