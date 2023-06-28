import { Route, Routes, useLocation } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import { AuthContainer } from '../style';

const Auth = () => {
  const location = useLocation();

  return (
    <AuthContainer>
      <Routes location={location}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </AuthContainer>
  );
};

export default Auth;
