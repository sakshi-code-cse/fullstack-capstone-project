import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import SearchPage from './components/SearchPage/SearchPage';
import DetailsPage from './components/DetailsPage/DetailsPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/app" element={<MainPage />} />

        <Route path="/app/product/:productId" element={<DetailsPage />} />

        <Route path="/app/login" element={<LoginPage />} />
        <Route path="/app/register" element={<RegisterPage />} />
        <Route path="/app/profile" element={<Profile />} />
        <Route path="/app/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
