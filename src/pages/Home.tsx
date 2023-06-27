import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Div, MainTitle, ExtraTitle, SignOutBtn, BodyContainer, PeopleImg, BtnText } from '../style';
import Logo from '../components/Logo';
import people from '../assets/people.png';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');

  //   if (!accessToken) {
  //     navigate('/auth/login');
  //   }
  // }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    navigate('/auth/login');
  };

  return (
    <Div>
      <Logo/>
        <BodyContainer>
          <MainTitle>CONGRATULATIONS</MainTitle>
          <ExtraTitle>Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work</ExtraTitle>
          <SignOutBtn onClick={handleSignOut}><BtnText>Log out</BtnText></SignOutBtn>
          <PeopleImg src={people} alt="People" />
        </BodyContainer>
   </Div>
  );
};

export default Home;
