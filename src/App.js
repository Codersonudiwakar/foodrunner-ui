// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login';
import PrivateRoutes from './components/PrivateRoutes';
const App = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
           <Route path="/login" element={<LoginPage/>} />
        </Routes>

          <Navbar/>
    <div className="home-page">
    {/* <ToastContainer position="top-right" /> */}
      
    
       
        </div>
        <div className="main-section"> 
          <main className="main-content">
          <Routes>
              <Route element={<PrivateRoutes />}>
              {/* <Route path={`/`} element={<HomePage/>} /> */}
                {/* <Route path={`/all-open-issue`} element={<AllOpenIssue/>} />
                <Route path={`/high-priority-issue`} element={<HighPriorityIssue/>} />
                <Route path={`/medium-priority-issue`} element={<MediumPriorityIssue/>} />
                <Route path={`/low-priority-issue`} element={<LowPriorityIssue/>} />
                <Route path={`/my-task`} element={<MyTask/>} />
                <Route path={`/closed-tasks`} element={<AllClosedIssue/>} />
                <Route path={`/chat`} element={<ChatScreen/>} />
                <Route path={`/view/:id`} element={<ViewTask/>} /> */}
              </Route>
            </Routes>
          </main>
        </div>
      
      </BrowserRouter>

        </>
    );
};

export default App;
