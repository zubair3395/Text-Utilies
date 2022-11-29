import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {
  const [color, setColor ] = useState("dark");
  function modeLight(){
    setColor("light");
  }
  function modeDark(){
    setColor("dark");
  }
  return (
  <div class={`bg-${color=="dark"? "dark" : "light"} text-${color=="dark"? "light" : "dark"}`}>
  <Navbar modeLight={modeLight} modeDark={modeDark} color={color}/>
  <TextArea color={color}/>
  
  </div>
  );
}

export default App;
