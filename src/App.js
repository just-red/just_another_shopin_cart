//feature 1

import  React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App(props) {


  return (
    <div className="grid-container">
      <header>
        <a  href='/'> React Shopping Cart
        </a> 
      </header> 

    <main>Product List</main>
    <footer>
      All right is reserved 
    </footer>

     
    </div>

  );
}

export default App;
