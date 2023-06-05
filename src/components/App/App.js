import { useNavigate, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import './App.css';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [onPath, setOnPath] = useState('/start');
  function nextPage() {
    if (onPath === '/start') {
      setOnPath('/main');
      navigate('/main');
    }
  }
  return (
    <div className="body">
      <div className="page">
        <Header onPath={onPath} />
        <Routes>
          <Route path={onPath} element={<Main nextPage={nextPage} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
