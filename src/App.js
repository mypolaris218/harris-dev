import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import TagManager from 'react-gtm-module';


import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

const tagManagerArgs = {
  gtmId: 'GTM-5WSDC94K',
}

TagManager.initialize(tagManagerArgs);

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <HelmetProvider>
      <div className="app">
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
        <BackToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;
