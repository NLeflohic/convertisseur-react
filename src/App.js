import React, { useState } from 'react';
import Header from "./Header";
import ConverterInput from "./ConverterInput";
import Icon from "./Icon";
import './App.css';

const App = () => {
  const [src, setSrc] = useState(0);
  const [dest, setDest] = useState(0);

  return (
    <div className="App">
      <Header />
      <form onSubmit={() => {
        console.log(src + " " + dest);
      }}>
        <ConverterInput className="src" valueSrc={src} valueDest={dest} functionSrc={setSrc} functionDest={setDest} />
        <Icon />
        <ConverterInput className="dest" valueSrc={dest} valueDest={src} functionSrc={setDest} functionDest={setSrc} />
      </form>
    </div>
  );
}

export default App;
