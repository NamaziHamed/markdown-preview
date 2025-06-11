import React, { useEffect, useRef } from "react";
import { marked } from "marked";

function Previewer({ text, handleClick }) {
  const previewRef = useRef(null);

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.innerHTML = marked(text, { breaks: true, gfm: true });
    }
  }, [text]);

  return (
    <div className="container preview-container mt-5">
      <div className="row border border-dark justify-content-between align-items-center bg-success p-1">
        <h3 className="col-auto mb-0">Preview</h3>
        <div className="col-auto position-relative">
          <button
            onClick={handleClick}
            id="full-size"
            className="btn position-absolute top-0 end-0"
            style={{ transform: "translate(0, -50%)" }}
          >
            <i className="fa-solid fa-maximize"></i>
          </button>
        </div>
      </div>
      <div className="output" id="preview" ref={previewRef}></div>
    </div>
  );
}

export default Previewer;
