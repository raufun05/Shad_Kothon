import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'


function App() {
    const cart = useSelector((state) => state.cart);
    const {cartItems}= cart;
  return (
      <BrowserRouter>
    <div className = "grid-container">
    <header className = "row">
       <div className ="brand">
           <button onclick="openMenu()">
               &#9776;
           </button>
           <Link to="/"> Shad Kothon</Link>
       </div>
       <div className="header-links">
           <Link to="/cart">Cart
           {cartItems.length > 0 && (
               <span className = "badge"> {cartItems.length} </span>
           )}
           </Link>
           <Link to="/signin">Sign In</Link>
       </div>
    </header>
    {/* <aside className="sidebar">
        <h1>Food Categories</h1>
        <button className="sidebar-close-button" onClick="closeMenu()">x</button>
        <ul className="category">
            <li className="appetize">
                <a href="index.html">Appetizers</a>
            </li>
            <li>
                <a href="index.html">Desserts</a>
            </li>
            <li className="entrees">
                <a href="index.html">Entrees</a>
            </li>
        </ul>
    </aside> */}
    {/* <div className="row down">
  <div className="column 1">
  <div className="logo-section">
            <div id="logo">
                <a href="https://www.shadkothon.com"> <img className="logo" src="images/ShadKothon_Logo.jpg" alt="Logo" /></a>
            </div>
          </div>
  </div>

</div> */}
    
    <main>
        
          {/* <div className="dropdown">
              <button  className="dropbtn">Food Categories <i className="fa fa-caret-down" aria-hidden="true"></i></button>
              <div id="myDropdown" className="dropdown-content">
                <a href="index.html">Appetizers</a>
                <a href="index.html">Desserts</a>
                <a href="index.html">Entrees</a>
              </div>
            </div> */}
            <Route path = "/cart/:id?" component ={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
       
    </main>
    <footer className = "footer">
        All right reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
