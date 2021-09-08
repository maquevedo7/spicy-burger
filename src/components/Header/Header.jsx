import {RiShoppingCart2Fill as Cart} from 'react-icons/ri'

import React from 'react'
import NavBar from '../NavBar/NavBar'
import style from '../Header/Header.module.css'

function Header() {
    return (
        <div className={style.header}>

            <div className={style.logo}>

                <img src="https://i.ibb.co/r369VvZ/navBar.png" alt="background-logo" />
                <Cart className={style.cart}/>

            </div>
                
            <NavBar/>

        </div>
    )
}

export default Header