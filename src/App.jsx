import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/home';

function App() {
  // Add this useEffect to scroll to top on page load/reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="">
        <Home />
        
      </div>
    </div>
  );
}

export default App;