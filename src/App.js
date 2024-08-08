import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import Home from './page/Home/Home';
import About from './page/About/About';
import Activity from './page/Activity/Activity';
import RecommendSite from './page/RecommendSite/RecommendSite';
import JoinQuipu from './page/JoinQuipu/JoinQuipu';
import Showcasemain from './page/ShowcaseMain/Showcasemain';
import ShowcasemainMobile from './page/ShowcaseMain/showcaseMainMobile';
import Showcasedetail from './page/ShowcaseDetail/Showcasedetail';
import Interview from './page/Interview/Interview';
import Footer from './page/Footer/Footer';
import { Event, Start, Quiz, Roulette, Result } from './page/Event/Event';
import Error from './page/Error/Error';
import Navbar from './component/navbar';
import useScroll from './hooks/useScroll';

function MainLayout() {
  const navigate = useNavigate();
  const scrollY = useScroll();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleOffset = () => {
      setOffsetY(scrollY * 0.2);
    };
    handleOffset();
  }, [scrollY]);

  return (
    <>
      <Navbar />
      <Outlet />
      <div className="event-button" style={{ transform: `translateY(${offsetY}px)` }}>
        <button onClick={() => navigate('/event')}>go to event !</button>
      </div>
    </>
  );
}

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <>
              <Element name="home">
                <Home />
              </Element>
              <Element name="about">
                <About />
              </Element>
              <div
                className="blank-box"
                style={{ background: 'linear-gradient(to bottom, white, #ebf0ff)' }}
              />
              <Element name="activity">
                <Activity />
              </Element>
              <div
                className="blank-box"
                style={{ background: 'linear-gradient(to bottom, #ebf0ff, #cbddff)' }}
              />
              <Element name="recommend-site">
                <RecommendSite />
              </Element>
              <Element name="contact">
                <Footer />
              </Element>
            </>
          }
        />
        <Route path="*" element={<Error />} />
      </Route>
      <Route path="/join-quipu" element={<JoinQuipu />} />
      <Route path="/quipu-dev" element={<Showcasemain />} />
      <Route path="/quipu-dev-mobile" element={<ShowcasemainMobile />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/quipu-dev/detail" element={<Showcasedetail />} />
      <Route path="/event" element={<Event />}>
        <Route index element={<Start />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="roulette" element={<Roulette />} />
        <Route path="result" element={<Result />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContent />
    </Router>
  );
}

export default App;
