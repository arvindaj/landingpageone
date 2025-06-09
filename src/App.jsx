import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  // Scroll to top on page load/reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      
        <div className="p-0 m-0">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      
    </Router>
  );
}

export default App;