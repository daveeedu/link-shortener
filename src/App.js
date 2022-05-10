import './App.css';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { HashRouter, Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/AboutPage" element={<AboutPage />}/>
          <Route path="/ContactPage" element={<ContactPage />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
