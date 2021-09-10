import style from './Cart.module.css'
import Product from '../Product/Product'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import Purchase from '../Purchase/Purchase'


const Cart = () => {

    const { cart,increase,reduction,removeProduct,total,getTotal } = useContext
    (AppContext);
    
  useEffect(() => {
    getTotal()
  }, [])

  if(cart.length === 0){
    return (<h2 style={{textAlign:"center", paddingTop:'80px'}}>Tu carrito está vacío</h2>)
  }else{
     return (

        <p>añadido</p>
    )
}
}

export default Cart
