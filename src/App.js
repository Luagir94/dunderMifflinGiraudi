import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


///Pages
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Error404 from "./Pages/Error404";
import ItemDetail from "./Pages/ItemDetail";



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  exact path="/products" component={Products}/>
          <Route  exact path="/products/:productId" component={ItemDetail}/>
          <Route  exact path="/about" component={About}/>
          <Route  exact path="/contact" component={Contact}/>
          <Route  exact path="/cart" component={Cart}/>
          <Route  path="*" component={Error404}/>
        </Switch>
      </Router>
      <header className="App-header">
      </header>
      
    </div> 
  )
}

export default App;
