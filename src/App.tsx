import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import Auth from './pages/Auth';
import Home from './pages/Home';
import { store } from './store/store';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/auth/login" replace={true} />
          }
        />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </Provider>
);

export default Root;
