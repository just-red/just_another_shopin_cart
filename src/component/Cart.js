import React, { Component } from 'react'
import '../App.css'


export default class Cart extends Component {


    constructor(props){
        super()
        this.state ={
            showForm : false,
            name : "",
            email: "",
            address: "",
        }
    }



    handleInput = (e) => {
        this.setState(
            {
               [e.target.name] : e.target.value,
            }
        )
    }

    createOrder = (e) => {

        e.preventDefault() //???
        const order = {
            name : this.state.name,
            email: this.state.email,
            address : this.state.address,
            cartItems: this.props.cartItems,
          
        }
        this.props.createOrder(order)

    }



    render() {

        const { cartItems } = this.props
          

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


                        <button
                        onClick = {() => this.setState({
                            showForm : true})}   className="button primary">Proceed</button>

                         
                    </div> : <div> There's no item in the card </div>}
                   

                {this.state.showForm === true ? <div className="cart">

                    <form  className="form-container" onSubmit= {this.createOrder}>

                    
                    <ul>

                    <li>
                        <label>Email</label>
                        <input required onChange={this.handleInput} name="email" type="text" ></input>
                    </li>
                    <li>
                        <label>Name</label>
                        <input required onChange={this.handleInput} name="name" type="text"></input>
                    </li>
                    <li>
                        <label>Address</label>
                        <input required onChange={this.handleInput} name="address" type="text"></input>
                    </li>

                    <li><button className="button primary" type="submit">Checkout</button></li>


                    </ul>

                    
                    
                    </form>


                            </div> :
                    <div> </div>}


                       



            </div>
        )
    }
}
