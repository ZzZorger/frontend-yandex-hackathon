import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

function App() {
  return (
    <div className="body">
      <div className="page">
        <Header onPath={'start'} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
