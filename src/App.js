import React, { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp
function App() {

  useEffect(() => {

  }, [])

  const onClose = () => {
    tg.close()
  }
  return (
    <div className="App">
      <button onClick={onClose}>Закрити</button>
    </div>
  );
}

export default App;
