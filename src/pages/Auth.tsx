import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import { AuthContainer } from '../style';

const Auth = () => {
  return (
    <AuthContainer>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthContainer>
  );
};

export default Auth;

