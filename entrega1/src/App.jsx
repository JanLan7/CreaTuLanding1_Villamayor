import React from 'react'
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import './App.css'

const App = ()=>{
  return (
    <>
      <NavBar/>
      <div className="main-content">
        <h1 className="main-title">Tienda Online</h1>
        <ItemListContainer mensaje="Bienvenidos a nuestra tienda online!" />
      </div>
    </>
  )
}

export default App
