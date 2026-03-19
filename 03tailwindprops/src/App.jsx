import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
function App() {
  return (
    <div>
      <h1 className="text-3xl bg-green-500 p-3 rounded">
        Vite with Tailwind
      </h1>
      <Card username='sumit' />
      <Card />
      <Card />
    </div>
  );
}

export default App
