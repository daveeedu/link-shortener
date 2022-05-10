import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { HashRouter, Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route exact path="/HomePage" element={<HomePage />}/>
          <Route path="/AboutPage" element={<AboutPage />}/>
          <Route path="/ContactPage" element={<ContactPage />}/>
          </Routes>
    </div>
  );
}

export default App;
