import React from 'react';

function App() {
  return (
    <div className = "grid-container">
    <header className = "row">
       <div className ="brand">
           <button onclick="openMenu()">
               &#9776;
           </button>
           <a href="index.html"> Shad Kothon</a>
       </div>
       <div className="header-links">
           <a href="cart.html">Cart</a>
           <a href="signin.html">Sign In</a>
       </div>
    </header>
    <aside className="sidebar">
        <h1>Food Categories</h1>
        <button className="sidebar-close-button" onclick="closeMenu()">x</button>
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
    </aside>
    <main>
        <div className="logo-section">
            <div id="logo">
                <a href="https://www.shadkothan.com"> <img className="logo" src="images/ShadKothon_Logo.jpg" alt="Logo" /></a>
            </div>
          </div>
          <div className="dropdown">
              <button  className="dropbtn">Food Categories <i className="fa fa-caret-down" aria-hidden="true"></i></button>
              <div id="myDropdown" className="dropdown-content">
                <a href="index.html">Appetizers</a>
                <a href="index.html">Desserts</a>
                <a href="index.html">Entrees</a>
              </div>
            </div>
        <div className="row center">
            <div className="card">
                <a href="product.html">
                    <img className="product-image" src="images/chanar_shondesh.jpg" alt="chanar_shondesh"/>
                </a>
                <div className="card-body">
                    <a href="product.html"> 
                        <h1>Chanar Shondesh</h1>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>      
                   </div>
                    <div className="price">
                       Price $50.00
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="product-image" src="images/chanar_shondesh.jpg" alt="chanar_shondesh"/>
                </a>
                <div className="card-body">
                    <a href="product.html"> 
                        <h1>Chanar Shondesh</h1>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>      
                   </div>
                    <div className="price">
                       Price $50.00
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="product-image" src="images/chanar_shondesh.jpg" alt="chanar_shondesh"/>
                </a>
                <div className="card-body">
                    <a href="product.html"> 
                        <h1>Chanar Shondesh</h1>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>      
                   </div>
                    <div className="price">
                       Price $50.00
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="product-image" src="images/chanar_shondesh.jpg" alt="chanar_shondesh"/>
                </a>
                <div className="card-body">
                    <a href="product.html"> 
                        <h1>Chanar Shondesh</h1>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>      
                   </div>
                    <div className="price">
                       Price $50.00
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="product-image" src="images/chanar_shondesh.jpg" alt="chanar_shondesh"/>
                </a>
                <div className="card-body">
                    <a href="product.html"> 
                        <h1>Chanar Shondesh</h1>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star-full-o"></i></span>      
                   </div>
                    <div className="price">
                       Price $50.00
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="product-image" src="images/chanar_shondesh.jpg" alt="chanar_shondesh"/>
                </a>
                <div className="card-body">
                    <a href="product.html"> 
                        <h1>Chanar Shondesh</h1>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star-half-o"></i></span>      
                   </div>
                    <div className="price">
                       Price $50.00
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="product-image" src="images/chanar_shondesh.jpg" alt="chanar_shondesh"/>
                </a>
                <div className="card-body">
                    <a href="product.html"> 
                        <h1>Chanar Shondesh</h1>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star-half-o"></i></span>      
                   </div>
                    <div className="price">
                       Price $50.00
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer className = "footer">
        All right reserved
    </footer>
</div>
  );
}

export default App;
