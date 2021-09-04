import React from 'react'
import style from  './Product.module.css'
import {FaRegArrowAltCircleDown as RowDown} from "react-icons/fa"
import {AiOutlineMinusCircle as Minus} from "react-icons/ai"
import {AiOutlinePlusCircle as Plus} from "react-icons/ai"

function Product() {
    return (
        <div className={style.box}>

            <img className={style.img} src="https://i.ibb.co/s1XQFj4/triple.jpg" alt="name" border="0"/>
            <h2 className={style.name}>spicy burger</h2>
            <div className={style.button}><RowDown/></div>
            
            <div className={style.description}>

                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus esse, laborum eius sed sunt sint</p>

                <div>
                    <select className={style.selector}>
                        <option value="sauce1">salsa BBQ de whisky</option>
                        <option value="sauce2">salsa BBQ picante</option>
                    </select>
                </div>

                <div>
                    <select className={style.selector}>
                        <option value="accompaniment1">zanahoria</option>
                        <option value="accompaniment2">apio</option>
                    </select>
                </div>

            </div>
             
            <div className={style.select} >
                
                <div>
                    <select className={style.selector}>
                        <option value="size1">sola</option>
                        <option value="size2">en combo</option>
                    </select>
                </div>

                <div className={style.finalSelector}>
                    <Minus className={style.btn}/>
                    <div className={style.price}>
                        <p>valor / cantidad</p>
                    </div>
                    <Plus className={style.btn}/>
                </div>
                
            </div>
        </div>
    )
}

export default Product
