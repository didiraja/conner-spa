import React, { Component } from "react";
import SVG from 'react-inlinesvg';

import './index.styl'

class App extends Component {
    constructor() {
      super();
    }
    render() {
      return (
        <>
        <h1>Olaaa Mundo!</h1>  

        <SVG src="assets/img/react.svg" />
        </>
      );
    }
  }
  export default App;