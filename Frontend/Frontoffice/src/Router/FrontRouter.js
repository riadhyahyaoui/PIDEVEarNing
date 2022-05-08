import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, Navigate, useHistory } from "react-router-dom";
import FullVideo from "../components/Videoplayer/FullVideo";
import Intro from "../components/Intro/Intro";
import styled, { css } from "styled-components";
import Feature from "../components/Feature/Feature";
import EmotionCamera from "../components/EmotionCamera/EmotionCamera";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/MarketPlace/pages/Home"
import ProductList from "../components/MarketPlace/pages/ProductList";
import Product from "../components/MarketPlace/pages/Product"
import Course from "../components/Course/Course";
import App from "../Backoffice/src/App";
import Cart from "../components/MarketPlace/pages/Cart";

import Evenement from "../components/Evenement/Evenement";
import Evenementdetails from "../components/Evenement/components/Evenementdetails";
import Success from "../components/MarketPlace/pages/Success";
//import Login from "../components/MarketPlace/pages/Login";
import Lesson from "../components/Course/Lesson";
import CourseList from "../components/Course/courseList";

import Login from "../components/views/Login";
import Register from "../components/views/Register";
import Forgot from "../components/views/Forgot";
import resetPassword from "../components/views/resetPassword";
import Activate from "../components/views/activate";
import indexPage from "../components/views/indexPage";
import Profil from "../components/views/profil";
import Reclamation from "../components/views/reclamations";
import Suggestions from "../components/views/suggestions"
import Errors from "../components/views/Errors"
import Music from "../components/views/music"
import Play from "../components/views/playMusic"
import AllMusic from "../components/views/AllMusic"
import Contact from "../components/views/contact"


import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from "../reducers/auth";
import { useContext } from "react";


const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;


const FrontRouter = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [user2, setuser2] = useState(JSON.parse(localStorage.getItem('profile')));
  const [user, setuser] = useState(AuthContext._currentValue.user);

  console.log(AuthContext._currentValue.user)
  console.log(user)
  console.log(user2)

  return (

    <div>

      <Routes>

        <Route exact path="/" element={<><Intro /><IntoShape /><Feature /><FeatureShape /></>} />

        <Route exact path="/karaoke" element={<FullVideo id="full" />} />
        <Route exact path="/emotion" element={<EmotionCamera />} />
        <Route exact path="/marketplace" element={<Home />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/products/:category" element={<ProductList />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/Course" element={<Course />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/evenement" element={<Evenement />} />
        <Route exact path="/Evenementdetails/:id" element={<Evenementdetails />} />
        <Route path="/Course/:type/:lessonId" element={<Lesson />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/courseList" element={<CourseList />} />

        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<Forgot />} />
        <Route exact path="/reset-password/:Passwordtoken" element={<resetPassword />} />

        <Route exact path="/activate/:secretToken" element={<Activate />} />
        <Route exact path="/contact" element={<Contact/>} />

        <Route exact path="/Profil" element={<Profil/>} />
        <Route exact path="/reclamation" element={<Reclamation/>} />
        <Route exact path="/suggestions" element={<Suggestions/>} />
        <Route exact path="/music" element={<Music />}/>
        <Route exact path="/AllMusic" element={<AllMusic/>} />
        <Route exact path="/play/:id" element={<Play />} />



      </Routes>
    </div>
  );
}
export default FrontRouter;
