import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importuj BrowserRouter, Routes i Route
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import logo from './logo.png';
import CommentBox from './components/CommentBox'; // Uvozimo komponentu za komentare
import './App.css';
import Banner from './components/Banner';
import Info from './components/Info';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const workingHours = '30% Popusta';

  useEffect(() => {
    const isLogoShown = sessionStorage.getItem('isLogoShown');

    if (isLogoShown) {
      setLoading(false);
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        setVisible(true);
        sessionStorage.setItem('isLogoShown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      {' '}
      {/* Omotavamo celu aplikaciju u Router */}
      <div className="App">
        {loading ? (
          <div style={{ textAlign: 'center', paddingTop: '50vh' }}>
            <img src={logo} alt="Minimal Logo" className="logo" />
          </div>
        ) : (
          <>
            <Header logo={logo} />
            <Banner />
            {/* Definišemo rute */}
            <Routes>
              <Route path="/" element={<Main workingHours={workingHours} />} />{' '}
              {/* Glavna stranica */}
              <Route path="/komentari" element={<CommentBox />} />{' '}
              {/* Stranica sa komentarima */}
              <Route path="/info" element={<Info />} />{' '}
            </Routes>

            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
