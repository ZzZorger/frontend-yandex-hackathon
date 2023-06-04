import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import './App.css';

function App() {
  return (
    <div className="body">
      <div className="page">
        <Header onPath={'start'} />
        <Routes>
          <Route path="/start" element={<Main />} />
          <Route path="/order" element={<Main />} />
          <Route path="/goods" element={<Main />} />
          <Route path="/package" element={<Main />} />
          <Route path="/end" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
