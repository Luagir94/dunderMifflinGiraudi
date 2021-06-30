import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductGrid from './Components/ProductGrid';





function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      </header>

      <ProductGrid/>
  
      
    </div> 
  )
}

export default App;
