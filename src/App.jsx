import React, { useEffect, useState } from "react";
import Toggle from "./components/Toggle";
import ToggleOption from "./components/ToggleOption";

const App = () => {
  const [cheap, setCheap] = useState(true);
  const [fast, setFast] = useState(true);
  const [good, setGood] = useState(false);

  function handleCheap() {
    const toggle = !cheap;
    setCheap(toggle);
    if (toggle && good && fast) {
      const random = Math.random() < 0.5 ? "good" : "fast";
      if (random === "fast") {
        setFast(false);
      } else {
        setGood(false);
      }
    }
  }

  function handleGood() {
    const toggle = !good;
    setGood(toggle);
    if (toggle && cheap && fast) {
      const random = Math.random() < 0.5 ? "cheap" : "fast";
      if (random === "cheap") {
        setCheap(false);
      } else {
        setFast(false);
      }
    }
  }
  function handleFast() {
    const toggle = !fast;
    setFast(toggle);
    if (toggle && cheap && good) {
      const random = Math.random() < 0.5 ? "good" : "cheap";
      if (random === "good") {
        setGood(false);
      } else {
        setCheap(false);
      }
    }
  }

  return (
    <div className="flex flex-col w-full h-dvh items-center justify-center gap-4">
      <h1 className="text-white text-xl">Make Your Move</h1>
      <div className="flex justify-between flex-col w-60 gap-4 bg-base-300 p-8 rounded-lg">
        <ToggleOption value={cheap} onToggle={handleCheap} label={"Cheap"} />
        <ToggleOption value={good} onToggle={handleGood} label={"Good"} />
        <ToggleOption value={fast} onToggle={handleFast} label={"Fast"} />
      </div>
    </div>
  );
};

export default App;
