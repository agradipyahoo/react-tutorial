import React from 'react';
import logo from './logo.svg';
import './App.css';

class SignUp extends React.Component {
    render(){
      return (
          <div>
            <label>user Id</label> <input type="text" ></input>
            <label>passwprd</label> <input type="password"></input>
          </div>
      );
    }
}

class Hello extends React.Component {
  render(){
    return (
      <div>
        <SignUp/>
        <button> Hello World</button>
      </div>
    
    );
  }
}

class App extends  React.Component {
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        Somnath How are you?  hello
        <Hello/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
  
        <footer>
  
        </footer>
      </div>
    );
  }
  
}

export default App;
