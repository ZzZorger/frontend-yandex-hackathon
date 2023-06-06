import { useNavigate, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.css';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [onPath, setOnPath] = useState('/');
  function nextPage() {
    if (onPath === '/') {
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
