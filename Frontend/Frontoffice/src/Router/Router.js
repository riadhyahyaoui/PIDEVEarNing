import React from 'react';
import { Route, Switch, BrowserRouter,Routes } from 'react-router-dom';
import FullVideo from "../components/Videoplayer/FullVideo";
import Intro from "../components/Intro/Intro";
import styled, {css} from "styled-components";
import Feature from "../components/Feature/Feature";
import EmotionCamera from "../components/EmotionCamera/EmotionCamera";
import Navbar from "../components/Navbar/Navbar";
import Marketplace from "../components/MarketPlace/MarketPlace";

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


const Router = () => (
    <BrowserRouter>
        <Navbar/>
        <Routes>

            <Route exact path="/" element={<><Intro/><IntoShape/><Feature/><FeatureShape/></>}/>
            <Route exact path="/karaoke" element={<FullVideo id="full"/>}/>
            <Route exact path="/emotion" element={<EmotionCamera/>}/>
            <Route exact path="/marketplace" element={<Marketplace/>}/>
        </Routes>
    </BrowserRouter>
);
export default Router;
