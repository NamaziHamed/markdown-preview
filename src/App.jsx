import React, { Component } from "react";
import Editor from "./components/editor";
import Previewer from "./components/previewer";
import { marked } from "marked";

class App extends Component {
  state = {
    editor: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://namazihamed.github.io/), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
          - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
`,
    text: marked.parse("### this is a markupt previewer app"),
  };

  updateEditor = (e) => {
    const newValue = e.target.value;
    const html = marked.parse(newValue);
    this.setState({ editor: newValue, text: html });
  };

  componentDidMount = () => {
    const html = marked.parse(this.state.editor);
    this.setState({ text: html });
  };

  handleFullSizeClick = (e) => {
    e.preventDefault();
    const parentDiv = e.target.closest(".container");
    let otherDiv;
    parentDiv.classList.contains("editor-container")
      ? (otherDiv = document.querySelector(".preview-container"))
      : (otherDiv = document.querySelector(".editor-container"));

    if (parentDiv.classList.contains("editor-container")) {
      const textareaEl = parentDiv.querySelector("textarea");
      if (!textareaEl.classList.contains("full-height")) {
        textareaEl.classList.add("full-height");
        otherDiv.classList.add("hidden");
      } else {
        textareaEl.classList.remove("full-height");
        otherDiv.classList.remove("hidden");
      }
    }

    if (parentDiv.classList.contains("preview-container")) {
      const previewP = parentDiv.querySelector("#preview");
      if (!previewP.classList.contains("full-height")) {
        previewP.classList.add("full-height");
        otherDiv.classList.add("hidden");
      } else {
        previewP.classList.remove("full-height");
        otherDiv.classList.remove("hidden");
      }
    }
  };

  render() {
    return (
      <div className="container main-container">
        <div className="">
          <div className="col">
            <Editor
              editor={this.state.editor}
              updateEditor={this.updateEditor}
              handleClick={this.handleFullSizeClick}
            />
          </div>
          <div className="col">
            <Previewer
              text={this.state.text}
              handleClick={this.handleFullSizeClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
