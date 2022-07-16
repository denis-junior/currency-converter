import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateHomepage } from './pages/PrivateHomepage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PublicHomepage } from './pages/PublicHomepage';
import { PrivateHomepageContextProvider } from './contexts/PrivateHomepageContext';
function App() {

  //state for direction of the registers flow or use BrowserRouter

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicHomepage />} />
        <Route path="/app" element={<>
          <PrivateHomepageContextProvider>
            <PrivateHomepage/>
          </PrivateHomepageContextProvider>
        </>
          } />
        <Route path="/session" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
