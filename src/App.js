import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/landing/Landing';
import Chat from './pages/flip/Flip';
import Subscription from './pages/subscription/Subscription';
import Footer from './components/footer/Footer';
import Check from './pages/check/Check'
import { useNavigate } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ paddingBottom: '60px' }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/flip" element={<Chat />} />
            <Route path="/check" element={<Check />} />
            <Route path="/subscription" element={<Subscription />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}




export default App;
