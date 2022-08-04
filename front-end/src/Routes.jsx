import React from 'react'
import {BrowserRouter, Routes as Switch, Route  } from 'react-router-dom'
import Header from './components/Header/Header'
import Administrator from './pages/Administrator/Administrator'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products'

const Routes = () => {
  return (
    <BrowserRouter>
    <Header/>
    
    <Switch>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:categoria' element={<Products/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/administrator' element={<Administrator/>}/>
    </Switch>

    </BrowserRouter>
  )
}

export default Routes