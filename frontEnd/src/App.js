import React from 'react';
import logo from './logo.svg';
import './App.css';
import {inputDate} from './hotelUtil/dateInput'


function App() {
 // window.location.href =inputDate("10/17/2019", "11/17/2019")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

            {/*`${console.log(document.querySelector('a').href)}`*/}
          Learn React
      </header>
    </div>
  );
}

export default App;
