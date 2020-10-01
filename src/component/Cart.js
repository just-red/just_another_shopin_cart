import React, { Component } from 'react'
import '../App.css'


export default class Cart extends Component {
    render() {

        const { cartItems } = this.props
            console.log(cartItems)

        return (
            <div>
                    {cartItems.length === 0 ? <div className="cart">Cart is empty</div>
                    :
                    
                    <div className="cart">you have {cartItems.length} items in the cart</div>
                    
                    }

                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item)=> (

                                <li>
                                    <div>
                                        <img src={item.image}></img>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                    </div>
                                    <div className="right">
                                       {item.count} x $ {item.price}
                                        <button onClick = {()=>this.props.removeFromCart(item)}>Remove Item</button>
                                    </div>
                                    

                                </li>


                            ))}
                        </ul>
                    </div>   
                               
                                    {cartItems.length !== 0 ?
                    <div className="cart">
                        <div className="total">
                            Total : $ {""} {cartItems.reduce((a, c) =>
                            a + c.price * c.count, 0

                        )}
                        </div>
                        <button className="button primary">Proceed</button>
                    </div> 
                    : 
                    <div></div> }


                       



            </div>
        )
    }
}
