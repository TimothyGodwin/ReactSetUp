
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Login from '../pages/login/Login';
import PostListPage from '../pages/post/PostListPage';



const AppRouter: React.FC = () => {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/post" element={<PostListPage />} />
   
  </Routes>

    
  );
};

export default AppRouter;
