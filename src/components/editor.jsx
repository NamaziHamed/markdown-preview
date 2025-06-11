import React, { Component } from "react";

class Editor extends Component {

  render() {
    return (
      <div className="container editor-container mt-4">
        <div className="row border border-dark justify-content-between bg-success p-1 position-relative">
          <h3 className="col-3">Editor</h3>
          <div className="col-auto position-absolute top-0 end-0">
            <button  onClick={this.props.handleClick} id="full-size" className="btn">
              <i className="fa-solid fa-maximize"></i>
            </button>
          </div>
        </div>
        <div className="textarea-container">
          <textarea
          value={this.props.editor}
          onChange={(e)=>this.props.updateEditor(e)}
            name=""
            id="editor"
            className="overflow-auto bg-success"
            style={{ '--bs-bg-opacity': '0.2', height: 'calc(100vh - 15rem)' }}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default Editor;

