import React, { Component } from "react";
import Editor from "./components/editor";
import Previewer from "./components/previewer";
import { marked } from "marked";

class App extends Component {
  state = { editor: "### this is a markupt previewer app", text: marked.parse("### this is a markupt previewer app") };

  updateEditor = (e)=>{
    const newValue = e.target.value
    const html = marked.parse(newValue);
    this.setState({editor : newValue, text: html})
  }


  render() {
    return (
      <div className="container main-container">
        <div className="">
          <div className="col">
            <Editor editor = {this.state.editor} updateEditor={this.updateEditor}/>
          </div>
          <div className="col">
            <Previewer text={this.state.text} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
