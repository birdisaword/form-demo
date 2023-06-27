import styled from 'styled-components'
import { Button, TextField } from '@mui/material';
import sparks from './assets/sparks.png'

// Auth style

export const AuthContainer = styled.div`
width: 424px;
margin-left: 508px;
background-color: #1D283A;
height: 100vh;
overflow-y: hidden;
`

// Logo styles

export const LogoContainer = styled.div`
  width: 134px;
  height: 79px;
  // margin-top: 8px;
  margin-left: 48px;
  position: absolute;
`
export const BigTitle = styled.h3`
  font-family: Montserrat-bold;
  font-size: 36px;
  line-height: 54px;
  color: white;
  margin: 0
`
export const SmallTitle = styled.h5`
  font-family: Montserrat-semibold;
  font-size: 16px;
  color: #539713;
  margin: 0
`

// Login and Register styles

export const FormTitleWrapper = styled.div`
  width: 255px;
  height: 84px;
  position: absolute;
  top: 199px;
  margin-left: 48px;
  justify-content: center;
  align-items: center; 
`;

export const FormTitle = styled.h1`
  font-family: Montserrat-bold;
  font-size: 56px;
  line-height: 84px;
  color: #FFFFFF;
  margin: 0;
`;

export const FieldContainer = styled.div`
  width: 100%; 
  max-width: 328px;
  position: absolute;
  top: 300px;
  margin-left: 28px;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; 
`;

export const StyledTextField = styled(TextField)`
  & .MuiInputBase-input {
    color: white;
  }

  & .MuiFormLabel-root {
    color: white;
  }

  & .MuiInput-underline {
    width: 328px;
    margin-bottom: 15px;
  }

  & .MuiInput-underline:before {
    border-bottom: 0.4px solid white;
  }

  & .MuiInput-underline:hover {
    border-bottom: 0.4px solid white;
  }
`

export const SubmitBtn = styled(Button)`
  &.MuiButton-root {
  width: 328px;
  background-color: #539713;
  color: white;
  margin-top: 15px
  }
  &.MuiButton-root:hover {
    background-color: #3C7C0B;
  }
`

export const Link = styled.div`
  list-style-type: none;
  color: #F1F2F1;
  font-size: 12px;
  line-height: 18.6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`
export const Hypertext = styled.a`
  color: #7FAAF0;
  margin-left: 5px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #e4e8f4;
  }
  &:active {
    transform: translateY(1px);
  }
`

export const NavButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: #7FAAF0
`;

// Visibility button styles

export const VisibilityBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 10px;
  height: 10px;
  margin-left: 280px;
  transform: translateY(-450%);
`;

export const VisibilityImg = styled.img`
  width: 20px
`

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
`;

// Home page styles

export const Div = styled.div`
position: absolute;
padding-top: 48px;
min-width: 100%;
height: 100%;
  background-color: #1D283A;
  height: 100vh;
  background-image: url(${sparks});
  background-repeat: no-repeat;
  background-size: 250px 150px;
  background-position: 70% 8%
`;

export const BodyContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
transform: translateY(-48px);
`;

export const MainTitle = styled.h2`
  font-family: 'Montserrat-bold';
  font-size: 48px;
  line-height: 72px;
  color: white;
  `;

export const ExtraTitle = styled.h5`
  font-family: 'Montserrat-semibold';
  font-size: 16px;
  line-height: 24.8px;
  color: white;
  width: 466px;
  transform: translateY(-30%);
`;

export const SignOutBtn = styled.button`
  width: 99px;
  height: 44px;
  background-color: #539713;
  color: white;
  margin-top: 15px;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
   &:hover {
     background-color: #3C7C0B;
   }
`;

export const BtnText = styled.p`
font-family: 'Montserrat';
font-size: 16px;
`

export const PeopleImg = styled.img`
  height: 250px;
  transform: translateY(30%);
`