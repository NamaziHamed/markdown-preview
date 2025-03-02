import React, { useEffect, useRef } from "react";
import { marked } from "marked";

function Previewer({ text }) {
  const previewRef = useRef(null);

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.innerHTML = marked(text);
    }
  }, [text]);
  
  return (
    <div className="container preview-container mt-5">
      <div className="row border border-dark justify-content-between bg-success p-1">
        <h3 className="col-3">Preview</h3>
        <div className="col-1">
          <button className="btn">
            <i className="fa-solid fa-maximize"></i>
          </button>
        </div>
      </div>
      <div className="output">
        <p id="preview" ref={previewRef}></p>
      </div>
    </div>
  );
}

export default Previewer;
