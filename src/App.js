//feature 122

import React ,{Component} from 'react';
import './App.css';
import data from "./data.json"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Product from './component/Product';
import Filter from './component/Filter';


 class App extends Component {

    constructor(){
        super();
        this.state = {
            products : data.products,
            size : "",
            sort : ""
        }
    }

    filterOrder=(event) =>  {
    const sort = event.target.value

    this.setState({
        sort : sort,
        products : this.state.products
        .slice()
        .sort((a,b)=>
            sort === "Lowest"
            ? a.price > b.price
            ? 1:-1

            : sort === "Highest"
            ? a.price < b.price 
                ? 1
                : -1
            :a.id < b.id ? 1:-1
        
        )
    }) }





    filterSize =(event)=>{
       
        if(event === "")
        {
            this.setState({
                size: event.target.value,
                products : data.products
            })
        }
        else(
            this.setState(
                {size: event.target.value,
                    products: data.products.filter(products => products.availableSizes.indexOf(event.target.value) >= 0)
                
                }
            )
        )
    
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
                <Filter count={this.state.products.length}
                    sort = {this.state.sort}
                    size = {this.state.size} 
                    filterOrder ={this.filterOrder}
                    filterSize = {this.filterSize}
                />

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