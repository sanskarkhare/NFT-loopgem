import React from "react";
import { useState } from "react";

// Stylesheet
import "./DragDrop.css";

function DragDrop() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [fileNames, setFileNames] = useState([]);

  const dragEnter = (e) => {
    e.preventDefault();
    setIsHighlighted(true);
  };

  const drop = (e) => {
    e.preventDefault();
    setIsHighlighted(false);
    const updateFileNames = [];
    Array.from(e.dataTransfer.files).forEach((file) => {
      updateFileNames.push(file.name);
    });
    setFileNames(updateFileNames);
  };

  return (
    <div className="dragdrop">
      <div
        className={`drop-area ${isHighlighted && "drop-target"}`}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDragEnter={dragEnter}
        onDrop={drop}
        onDragLeave={() => setIsHighlighted(false)}
      >
        <p>Drop your files here</p>
        <br />
        <br />
        OR
        <br />
        <br />
        <input type="file" />
      </div>
      <br />
      <ul>
        {fileNames.map((fileName) => (
          <li>{fileName}</li>
        ))}
      </ul>
    </div>
  );
}

export default DragDrop;
