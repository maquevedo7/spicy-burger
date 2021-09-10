import React, { useState } from 'react'
import style from  './Product.module.css'
import {FaRegArrowAltCircleDown as RowDown} from "react-icons/fa"
import {AiOutlineMinusCircle as Minus} from "react-icons/ai"
import {AiOutlinePlusCircle as Plus} from "react-icons/ai"
import {FiCheckCircle as Check} from "react-icons/fi"

function Product({addCart, data}) {
    
    const { id, name, category, price, size, ingredients, sauce,accompaniment, img} = data
    
    const [description, setdescription] = useState(false)
    
    
    return (

        <div>

            <div className={style.boxMobile}>

                <div className={style.info}>

                    <img className={style.infoImg} src={img} alt="name" border="0"/>

                    <div className={style.infoGeneral}>
                        
                        <h2 className={style.name}>{name}</h2>

                        {price.map((e) => <p className={style.price}>{e}</p>)}
                       
                        {ingredients? 
                        <div className={style.button} onClick={() => setdescription(!description)}><RowDown/></div>
                        : ""}

                    </div> 

                </div> 

                <div className={description? `${style.description} ${style.descriptionVisible}` :`${style.description} ${style.descriptionHide}`}>

                    {ingredients ? <p>{ingredients}</p> :""}

                    {sauce? 
                    <div>
                        <select className={style.selector}>
                            
                            {sauce.map((e)=><option value="sauce1">{e}</option>)}
                            
                        </select>
                    </div>
                    : ""}

                    {accompaniment?
                    <div>
                        <select className={style.selector}>
                           
                            {accompaniment.map((e) => <option value="accompaniment1">{e}</option>)}
                            
                        </select>
                    </div>
                    : ""}

                </div>
                
                <div className={style.select} >
                    
                    <div>

                        {size? 
                        <select className={style.selector}>

                            {size? size.map((e) => <option value="size1">{e}</option>): ""}
                            
                        </select>
                        : ""}
                    </div>

                    <div className={style.finalSelector}>
                        <Minus className={style.btn}/>
                        <div className={style.total}>
                            <p>valor / cantidad</p>
                        </div>
                        <Plus className={style.btn}/>
                    </div>

                    <button className={style.cart} onClick={()=>addCart(id)}>
                        añadir 
                        <Check/>
                    </button>

                    
                </div>
            </div>

            <div className={style.boxDesktop}>

                <div className={style.info}>

                    <img className={style.infoImg} src={img} alt="name" border="0"/>
                    
                    <div className={style.infoGeneral}>
                        
                        <h2 className={style.name}>{name}</h2>
                        {price.map((e) => <p className={style.price}>{e}</p>)}
                        
                    </div> 

                </div>

                { ingredients ?

                <div className={style.description}>

                    {ingredients? <p>{ingredients}</p>: ""}

                    <div>

                        { 
                        
                        sauce?

                        <select className={style.selector}>

                            {sauce.map((e) => <option value="sauce1">{e}</option>)}
                            
                        </select>

                        : ""}

                    </div>

                    <div>

                        {
                        
                        accompaniment?
                        
                        <select className={style.selector}>
                            
                            {accompaniment.map((e) => <option value="accompaniment1">{e}</option>)}

                        </select>

                        : ""}

                    </div>

                </div>

                : "" }
                
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
                        <div className={style.total}>
                            <p>valor total</p>
                        </div>
                    </div>

                    <button className={style.cart} onClick={()=>addCart(id)}>
                        añadir 
                        <Check/>
                    </button>
                    
                </div>
            </div>

        </div>
        
    )
}

export default Product
