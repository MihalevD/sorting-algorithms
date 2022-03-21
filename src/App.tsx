import React, { useState } from "react";
import { GridBox } from "./components/GridBox";
import { NavbarMain } from "./components/NavbarMain";

function App() {
  const [value, setValue] = useState("10");
  const [array, setArray] = useState([]);
  return (
    <div className='App'>
      <header>
        <NavbarMain
          sliderValue={value}
          setSliderValue={setValue}
          array={array}
          setArray={setArray}
        />
      </header>
      <main>
        <GridBox columns={value}></GridBox>
      </main>
    </div>
  );
}

export default App;
