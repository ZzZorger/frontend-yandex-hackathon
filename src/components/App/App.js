import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [onPath, setOnPath] = useState('/start');
  return (
    <div className="body">
      <div className="page">
        <Header onPath={onPath} />
        <Routes>
          <Route path={onPath} element={<Main setOnPath={setOnPath} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
