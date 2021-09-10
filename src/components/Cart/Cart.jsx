import React from 'react'
import style from './Cart.module.css'

function Cart() {
    return (
        <div className={style.final}>
            <div className={style.shop}>
                <span>TU COMPRA</span>
                <p>Productos añadidos</p>
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
    )
}

export default Cart
