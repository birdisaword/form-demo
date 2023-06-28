import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';

const Root = () => (
  <HashRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Provider>
  </HashRouter>
);

export default Root;