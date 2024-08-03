// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login';
import PrivateRoutes from './components/PrivateRoutes';
import Home from './Home';
import SignUp from './components/SignUp';
import RestaurantView from './components/RestaurantView';
import FoodList from './components/ProductCard';
const App = () => {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path="/login" element={<LoginPage/>} />
           <Route path="/signup" element={<SignUp/>} />
           <Route path="/" element={<FoodList/>} />
           {/* <Route path="/restaurant/:id" element={<RestaurantView/>} /> */}
        </Routes>
          <Routes>
              <Route element={<PrivateRoutes />}>
              {/*
                <Route path={`/closed-tasks`} element={<AllClosedIssue/>} />
                <Route path={`/chat`} element={<ChatScreen/>} />
                <Route path={`/view/:id`} element={<ViewTask/>} /> */}
              </Route>
            </Routes>
          
      
      </BrowserRouter>

        </>
    );
};

export default App;
