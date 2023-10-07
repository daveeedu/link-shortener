import './App.css';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route {...{
            path:"/", 
            element: <Home />
            }}/>
          <Route {...{
            path:"/AboutPage", 
            element:<AboutPage />
            }}/>
          <Route {...{path: "/ContactPage", 
          element: <ContactPage />}}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
