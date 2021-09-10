import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import {FaRegTrashAlt as Trash} from 'react-icons/fa'
import {ImWhatsapp as Wa} from "react-icons/im"
import style from './CardCart.module.css'
import Cart from '../Cart/Cart'

function CardCart() {

    const {cart, addCart } = useContext(AppContext)
    console.log(cart)
    return (
        
        <div className={style.purchase}>

            <div>

                {
                cart.map((product) => <Cart key={product.id} data={product} addCart={addCart} />)
                }

            </div>
            
            <Trash/>

            <button>FINALIZA TU COMPRA <Wa/></button>

        </div>
    )
}

export default CardCart
