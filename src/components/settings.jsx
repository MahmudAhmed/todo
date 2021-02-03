import React, { useState, useEffect } from 'react'
import ColorPicker from 'material-ui-color-picker'
import { saveToLocalStorage } from '../utils/local_storage';


function Settings() {

  const [bgColor, setBGColor] = useState(localStorage.getItem("bgColor") || "#c0e218");
  const [stickyTitle, setStickyTitle] = useState(localStorage.getItem("stickyTitle") || "QuickList");


  // componentDidMount
  useEffect(() => {
    document.getElementById(`app`).style.backgroundColor = bgColor;
    document.getElementById("sticky-title").textContent = stickyTitle;
  }, []);

  const handleBGColor = (color) => {
    let element = document.getElementById(`app`);
    setBGColor(color);
    element.style.backgroundColor = color;
    saveToLocalStorage("bgColor", color);
  }

  const handleReset = () => {
    let element = document.getElementById(`app`);
    setBGColor("#c0e218");
    setStickyTitle("QuickList");
    element.style.backgroundColor = "#c0e218";
    document.getElementById("sticky-title").textContent = "QuickList"
    saveToLocalStorage("bgColor", "#c0e218");
    saveToLocalStorage("stickyTitle", "QuickList");
  }

  const handleTitleChange = (e) => {
    setStickyTitle(e.target.value);
    document.getElementById("sticky-title").textContent = e.target.value
    saveToLocalStorage("stickyTitle", e.target.value);
  }

  return (
    <div className="settings-container">
      <div className="settings-title-container">
        <h2 className="details-h2">Sticky Title:</h2>
        <input id="sticky-title-input" type="text" value={stickyTitle} onChange={handleTitleChange} />
      </div>
      <div className="color-picker-container">
        <h2 className="details-h2">Sticky Color:</h2>
        <ColorPicker
          name='color'
          defaultValue="#00000"
          value={bgColor}
          onChange={handleBGColor}
        />
      </div>
      <button id="default-settings-btn" onClick={handleReset}>Default Settings</button>
    </div>
  );
}

export default Settings;
