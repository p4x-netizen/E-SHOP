import React from 'react'
import './Shopping.css'
import nike_icon from '../assets/Nike.png'
import sufuria_icon from '../assets/sufuria.png'
import iphone_icon from '../assets/iphone.png'
import sweater_icon from '../assets/sweater.png'



   

const Shopping = ({items}) => {
    function toggleContent() {
    const content = document.getElementById("content");

    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

  return (
    <div>
      <div className="shopping">
        <div className="cart-items">
            <div className="icon">
                <i class="fa-solid fa-cart-shopping" ></i>
                <h2>Cart-Items</h2>
                </div> 
            
            <div className="btn">
                <h3 onClick={toggleContent}>4 Items</h3>
            </div>
            <div className="content" id='content'>
                <div className="shoes">
                    <img src={nike_icon} alt="nike shoes" />
                    <h6>Nike shoes</h6>
                    <h4>$300.00</h4>
                </div>
                  <div className="sufuria">
                    <img src={sufuria_icon} alt="nike shoes" />
                    <h6>Sufuria</h6>
                    <h4>$100.00</h4>
                </div>
                  <div className="phone">
                    <img src={iphone_icon} alt="iphone" />
                    <h6>Iphone 14 pro</h6>
                    <h4>$1300.00</h4>
                </div>
                  <div className="sweater">
                    <img src={sweater_icon} alt="sweater" />
                    <h6>A carndigan</h6>
                    <h4>$50.00</h4>
                </div>
               
            </div>
            <div className="total">
                <div className="sub-total">
                    <h3>Sub-total</h3>
                    <h3>$1750.00</h3>
                </div>
                <div className="shipping">
                    <h3>Shipping</h3>
                    <h3>Free</h3>
                </div>
                <div className="price">
                    <h3>Total</h3>
                    <h3>$1750.00</h3>
                </div>
                <div className="checkout">
                    <button className='checkout-btn'><a href="https://buy.stripe.com/test_aFafZggPRbtjdzae9r5wI00">Checkout</a><i class="fa-solid fa-arrow-right"></i></button>
                </div>
        
            </div>
            </div>
            </div>
   
    </div>
  )
}

export default Shopping
