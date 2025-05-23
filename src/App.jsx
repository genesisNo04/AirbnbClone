import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className="app">
        <Router>

          <Header />

          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/" element={<Home />} />
            <Route path="" element={<Home />} />
          </Routes>

          <Footer />

        </Router>
      </div>
  )
}

export default App
