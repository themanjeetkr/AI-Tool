import { useState } from 'react';
import reactLogo from '/favicon.svg'; // ✅ Fixed
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-3xl font-bold underline">
      Hello world!
    </div>
  );
}

export default App;
