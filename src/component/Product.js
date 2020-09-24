import React, { Component } from 'react'
import '../App.css'
 class Product extends Component {
    




    render() {
        return (
            <div>
            <ul className="products">
                {this.props.products.map(product=>(
                <li key={product._id}>
                    <div className="product">
                        <a href="#">
                            <img src={product.image}></img>
                            <p>{product.title}</p>
                        </a>

                        <div className="product-price">
                            <div>
                                ${product.price}
                            </div>
                            <button className="button primary">Add To Cart</button>
                        </div>

                    </div>
                </li>
                ))}
            </ul>
                
            </div>
        )
    }
}

export default Product