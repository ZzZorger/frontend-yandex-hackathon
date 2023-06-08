import { useNavigate, Routes, Route } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import './App.css';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [onPath, setOnPath] = useState('/printer');

  const path = ['/operation', '/table', '/printer', '/task', '/scan-cell', '/scan-goods', '/scan-package', '/fill-box', '/end-task'];
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
        <Header onPath={onPath} path={path} />
        <Main nextPage={nextPage} onPath={onPath} path={path} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
