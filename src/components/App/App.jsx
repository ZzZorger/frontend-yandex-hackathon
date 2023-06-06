import { useNavigate, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [onPath, setOnPath] = useState('/start');
  const path = ['/start', '/scan', '/main', '/box', '/finish'];
  function nextPage() {
    switch (onPath) {
      case path[0]:
        setOnPath(path[1]);
        navigate(path[1]);
        break;
      case path[1]:
        setOnPath(path[2]);
        navigate(path[2]);
        break;
      case path[2]:
        setOnPath(path[3]);
        navigate(path[3]);
        break;
      case path[3]:
        setOnPath(path[4]);
        navigate(path[4]);
        break;
      case path[4]:
        setOnPath(path[0]);
        navigate(path[0]);
        break;
    }
  }
  return (
    <div className="body">
      <div className="page">
        <Header onPath={onPath} />
        <Main nextPage={nextPage} onPath={onPath} path={path} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
