import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Explore from './pages/explore';
import Explore2grey from './pages/explore2Grey';
import Author from './pages/Author';
import AuthorGrey from './pages/AuthorGrey';
import Activity from './pages/activity';
import Activitygrey from './pages/activityGrey';
import auth from '../core/auth';
import Profile from './pages/Profile';
import CreatePage from './pages/create';
import Create2 from './pages/create2';
import Home from './pages/home';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const isAuth = auth.getToken() !== null;

  return (
      isAuth ? children : <Navigate to="/login" state={{ from: location }} replace />
  )
};

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header/>
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path="/Author">
        <Route 
          path=":authorId" 
          element={
            <ProtectedRoute>
              <Author />
            </ProtectedRoute>
          } 
        />
      </Route>
      <Route path="/Profile">
        <Route 
          path=":authorId" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
      </Route>
      <Route path="/home" element={<Home />} />
      {/* <Route element={<Home1grey/>} path="/home1Grey" /> */}
      <Route element={<Create2/>} path="/explore" />
      {/* <Route element={<Explore2grey/>} path="/explore2Grey" />
      <Route element={<AuthorGrey />} path="/AuthorGrey/:authorId" />
      <Route element={<Activity />} path="/activity" />
      <Route element={<Activitygrey />} path="/activityGrey" />
      <Route element={<CreatePage/>} path="/create"/> */}
      <Route element={<Create2/>} path="create"/>
      
    </Routes>
    <ScrollToTopBtn />
  </div>
);
export default app;