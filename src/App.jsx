import { useState } from 'react';
import reactLogo from '/favicon.svg'; // ✅ Fixed
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;
