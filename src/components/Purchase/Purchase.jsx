import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import {FaRegTrashAlt as Trash} from 'react-icons/fa'
import {ImWhatsapp as Wa} from "react-icons/im"
import style from './Purchase.module.css'
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

            <div className={style.final}>
           
                <div className={style.shop}>
                    <span>TU COMPRA</span>
                    <p><Cart/></p> {/* Get elements from Cart */}
                    <span>TOTAL:</span>
                </div>
                <div className={style.form}>
                    <p>DATOS DE ENVÍO</p>
                    <form className="dataform" action="form">
                        <input type="text" placeholder="Nombre"/>
                        <input type="text" placeholder="Dirección completa"/>
                        <input type="text" placeholder="Celular"/>
                    </form>
                </div>

            </div>
            
            <Trash/>

            <button>FINALIZA TU COMPRA <Wa/></button>

        </div>
    )
}

export default CardCart
