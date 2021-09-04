import React from 'react'
import products from '../../data-base/menu.json'
import Product from '../Product/Product'
import style from './List.module.css'

function List() {
    console.log(List)
    return (
        <div className={style.father}>

          <h1>MENÚ</h1>

          <div className={style.productContainer}>

            {
              products.map((Element)=>
              <Product key={Element.id}/>
              )
            }

          </div>
          
        
        </div>
    )
}

export default List
