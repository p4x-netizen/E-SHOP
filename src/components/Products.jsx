import React from 'react'
import './products.css'
import nike_icon from '../assets/Nike.png'
import sufuria_icon from '../assets/sufuria.png'
import iphone_icon from '../assets/iphone.png'
import sweater_icon from '../assets/sweater.png'
import microwave_icon from '../assets/microwave.png'
import fridge_icon from '../assets/fridge.png'
import headphone_icon from '../assets/headphones.png'
import hp_icon from '../assets/hp.png'

const Products = () => {
function addToCart() {
    const message = document.getElementById("message");

    message.innerHTML = "✅ Product added to cart!";
    message.style.display = "block";

    setTimeout(function () {
        message.style.display = "none";
    }, 3000);
}

 
  return (
 <div className='prod'>
    <div className="categories">
      <h2>Browse Categories</h2>
    </div>
    <div className="btn-categories">
      <button className='btn-browse'><i class="fa-solid fa-shoe-prints"></i> Shoes</button>
      <button className='btn-browse'><i class="fa-solid fa-laptop"></i> Electronics</button>
      <button className='btn-browse'><i class="fa-solid fa-shirt"></i> Wearables</button>
      <button className='btn-browse'><i class="fa-solid fa-keyboard"></i> Accessories</button>
      <button className='btn-browse'><i class="fa-solid fa-kitchen-set"></i>Utensils</button>
      <button className='btn-browse' onClick={()=>{alert('Scroll down to Featured Products')}}>View all<i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div className="products" >
      <h2>Featured products <i class="fa-solid fa-circle-arrow-down"></i></h2>
      <div className="tools">
      <div className="card1" >
        <img src={nike_icon} alt="" />
        <p>Nike shoes</p>
        <h2>$300.00</h2>
        <button className="btn-card" onClick={()=>{alert('Item added to Cart')}}>Add-Cart</button>
      </div>
       <div className="card2">
        <img src={sufuria_icon} alt="" />
        <p>A sufuria</p>
        <h2>$100.00</h2>
        <button className="btn-card" onClick={()=>{alert('Item added to Cart')}}>Add-Cart</button>
      </div>
       <div className="card3">
        <img src={iphone_icon} alt="" />
        <p>Iphone 14 pro </p>
        <h2>$1300.00</h2>
        <button className="btn-card"onClick={()=>{alert('Item added to Cart')}} >Add-Cart</button>
      </div>
       <div className="card4">
        <img src={sweater_icon} alt="" />
        <p>Cotton sweater</p>
        <h2>$50.00</h2>
        <button className="btn-card"onClick={()=>{alert('Item added to Cart')}}>Add-Cart</button>
      </div>
      </div>
      <br />
      <div className="accesories">
          <div className="card5">
        <img src={hp_icon} alt="" />
        <p>Hp EliteBook</p>
        <h2>$2000.00</h2>
        <button className="btn-card"onClick={()=>{alert('Item added to Cart')}}>Add-Cart</button>
      </div>
       <div className="card6">
        <img src={microwave_icon} alt="" />
        <p>Ramtoms miwave</p>
        <h2>$300.00</h2>
        <button className="btn-card"onClick={()=>{alert('Item added to Cart')}}>Add-Cart</button>
      </div>
       <div className="card7">
        <img src={headphone_icon} alt="" />
        <p> Oraimo headset </p>
        <h2>$90.00</h2>
        <button className="btn-card"onClick={()=>{alert('Item added to Cart')}}>Add-Cart</button>
      </div>
       <div className="card8">
        <img src={fridge_icon} alt="" />
        <p>Samsung Fridge</p>
        <h2>$2500.00</h2>
        <button className="btn-card" onClick={()=>{alert("Added to cart")}}>Add-Cart</button>
      </div>
      </div>
    </div>
    <div className="footer">
      <p> &copy; 2026 ShopCo. All Rights Reserved.</p>
      <i class="fa-brands fa-square-facebook"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-square-x-twitter"></i>
      <button onClick={()=>{alert("Reach us on 0796884110 or Whatsapp 0799213446")}}>Contact-Us </button>
      <button>About-Us</button>
      <button>Privacy</button>
    </div>
  </div>
  )
}

export default Products
