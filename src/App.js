//feature 122

import React ,{Component} from 'react';
import './App.css';
import data from "./data.json"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Product from './component/Product';


 class App extends Component {

    constructor(){
        super();
        this.state = {
            products : data.products,
            size : "",
            sort : ""
        }
    }






    render() {

        return (
            <div className="grid-container">
                <header>
                    <a href='/'> React Shopping Cart
        </a>
                </header>

                <main>
                <div className="content">
                <div className="main">
                <Product
                    products = {this.state.products}
                />
                </div>
                <div className="side-bar">

                Side Bar
                </div>

                </div>

                </main>
                <footer>
                    All right is reserved
    </footer>


            </div>

        );
    }
}

export default App