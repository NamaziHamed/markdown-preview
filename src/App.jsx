import React, { Component } from 'react';
import Editor from './components/editor';
import Previewer from './components/previewer';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="container main-container">
        <div className="">
          <div className='col'><Editor /></div>
          <div className='col'><Previewer /></div>
        </div>
      </div>
    );
  }
}
 
export default App;