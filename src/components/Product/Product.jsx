import React, { useState } from 'react'
import style from  './Product.module.css'
import {FaRegArrowAltCircleDown as RowDown} from "react-icons/fa"
import {AiOutlineMinusCircle as Minus} from "react-icons/ai"
import {AiOutlinePlusCircle as Plus} from "react-icons/ai"

function Product() {

    const [description, setdescription] = useState(false)

    return (

        <div>

            <div className={style.boxMobile}>

                <img className={style.img} src="https://i.ibb.co/s1XQFj4/triple.jpg" alt="name" border="0"/>
                <h2 className={style.name}>spicy burger</h2>
                <div className={style.button} onClick={() => setdescription(!description)}><RowDown/></div>

                <div className={description? `${style.description} ${style.descriptionVisible}` :`${style.description} ${style.descriptionHide}`}>

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

            <div className={style.boxDesktop}>

                <img className={style.img} src="https://i.ibb.co/s1XQFj4/triple.jpg" alt="name" border="0"/>
                <h2 className={style.name}>spicy burger</h2>

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
                    
                    <div className={style.finalSelector}>
                        <div className={style.size}>
                            <p>sola</p>
                        </div>
                        <Minus className={style.btn}/>
                        <p>un</p>
                        <Plus className={style.btn}/>
                    </div>

                    <div className={style.finalSelector}>
                        <div className={style.size}>
                            <p>en combo</p>
                        </div>
                        <Minus className={style.btn}/>
                        <p>un</p>
                        <Plus className={style.btn}/>
                    </div>

                    <div className={style.finalSelector}>
                        <div className={style.price}>
                            <p>valor total</p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
        
    )
}

export default Product
