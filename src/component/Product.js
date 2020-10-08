import React, { Component } from 'react'
import '../App.css'
import Fade from "react-reveal/Fade"
import Modal from "react-modal"
import Zoom from "react-reveal/Zoom"


 class Product extends Component {
    
    constructor(props){
        super(props)
        this.state = {
           product : null
        }
    }
   
    
    handleModal = (product) => {
        this.setState({product})
    }
    handleModalClose = () => {
        this.setState({product:null})
    }
















    render() {

        const {product} = this.state


        return (
            <div>

            <Fade bottom cascade>
            <ul className="products">
                {this.props.products.map(product=>(

                <li key={product._id}>

                    <div className="product">

                        <a href="#" onClick={()=>this.handleModal(product)}>

                            <img src={product.image}></img>
                            <p>{product.title}</p>

                        </a>











                        <div className="product-price">
                            <div>
                                ${product.price}
                            </div>
                            <button  onClick={() => this.props.addToCart(product)} className="button primary" >
                            Add To Cart</button>
                        </div>

                    </div>
                </li>
                ))}
            </ul>
                </Fade>

                    {product && (


                    <Modal isOpen={this.state.product}
                        onRequestClose = {this.handleModalClose}
                    >
                        <Zoom>

                            <button className="button primary" onClick={this.handleModalClose}>
                                X
                                    </button>
                          <div className="product-details">
                              <img src={product.image}></img>
                          </div>
                          <div className="product-details-description">
                              <p>
                                  <strong>{product.title}</strong>
                              </p>
                              <p>{product.description}</p>
                              <p>
                                  Available Sizes{" "}
                                  {product.availableSizes.map((x) => 
                                      (<span>{" "}
                                      
                                      <button className="button primary">{x}</button>
                                                              </span>
        
                                      ))}
                              </p>

                                    <div className="product-price">
                                        <div>${product.price}</div>
                                    </div>

                                <button onClick={() => 
                              {  this.handleModalClose() 
                                this.props.addToCart(product)}} className="button primary" >
                                    Add To Cart</button>

                          </div>

                        </Zoom>



                    </Modal>


                    )}





            </div>
        )
    }
}

export default Product