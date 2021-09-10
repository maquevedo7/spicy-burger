import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Product from '../Product/Product'
import style from './List.module.css'


function List() {

  const {products, addCart } = useContext(AppContext) //salen del render context

  return (
        <div className={style.father}>

          <h1>MENÚ</h1>

          <div className={style.productContainer}>

            {
              products.map((product) => <Product key={product.id} data={product} addCart={addCart} />)
            }

          </div> 
          
        
        </div>
    )
}

export default List
