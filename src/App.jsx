import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import './pages/home/landingpage.css'

function App() {
  // Scroll to top on page load/reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    // 🔹 Ensure no horizontal scrolling
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);


  return (
    <Router>


      <Routes>

        <Route path="/" element={<Home />} />
      
      </Routes>

      <Footer />

    </Router>

  );
}

export default App;