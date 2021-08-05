import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


///Navigation
import NavBar from './Components/NavBar';
import Footer from './Components/FooterNav';


///Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Error404 from "./Pages/Error404";
import ItemDetail from "./Pages/ItemDetail";
import ItemCategory from "./Pages/ItemCategory";




//Context 
import {CartProvider} from "./Contexts/CartContext"



function App() {

  return (
    <CartProvider>
    <div className="App">
      <Router>
        <NavBar/>
        <div>
          <div>
            
          </div>
        <Switch>
          <Route  exact path="/dunderMifflinGiraudi" component={Home}/>
          <Route  exact path="/products" component={Products}/>
          <Route  exact path="/products/:productId" component={ItemDetail}/>
          <Route  exact path="/category/:categoryId" component={ItemCategory}/>
          <Route  exact path="/cart" component={Cart}/>
          <Route  path="*" component={Error404}/>
        </Switch>
        </div>

        <Footer/>
      </Router>
      <header className="App-header">
      </header>

    </div> 
    </CartProvider>
  )
}

export default App;