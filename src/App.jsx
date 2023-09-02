import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoppingCartContext from './context/ShoppingCartContext'


const App = () => {
  return (
    <BrowserRouter> 
    <ShoppingCartContext>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/category/:category' element={<ItemListContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </ShoppingCartContext>
    </BrowserRouter>
  )
}

export default App