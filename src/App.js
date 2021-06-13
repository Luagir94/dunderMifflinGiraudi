import './App.css';
import React from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './Components/ItemListConteiner';



const Datos = {
  Nombre: 'Resma Autor',
  Imagen : 'https://d3ugyf2ht6aenh.cloudfront.net/stores/655/318/products/10110121-4bd295f637cb6edc6e15217377951954-640-0.png',
  Precio : 10
}

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      </header>

      <ItemListConteiner datos={Datos}/>
      <ItemListConteiner datos={Datos}/>
      <ItemListConteiner datos={Datos}/>
  
      
    </div> 
  )
}

export default App;
