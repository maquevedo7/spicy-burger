import {RiShoppingCart2Fill as Cart} from 'react-icons/ri'
import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import style from '../Header/Header.module.css'


function Header() {
    return (
        <div>

            <div className={style.headerMobile}>

                <div className={style.logo}>

                    <Link to="/">
                    <img src="https://i.ibb.co/DKk8LQP/navBar.png" alt="background-logo" />
                    </Link>
                    <span>0</span>
                    <Link to="/cart">
                        <Cart className={style.cart} width="30"/>
                    </Link>

                </div>

                <NavBar/>

            </div>

          <div className={style.headerTab}>

                <div className={style.logo}>

                    <img src="https://i.ibb.co/tPj6tTX/nav-Bar-Tab.png" alt="background-logo" />
                    <Link to="/cart"><Cart className={style.cart}/></Link>

                </div>

                <NavBar/>

            </div>

            <div className={style.headerDesktop}>

                <div className={style.logo}>

                    <img src="https://i.ibb.co/wWDR86h/navBarD.png" alt="background-logo" />
                    <Link to="/cart"><Cart className={style.cart}/></Link>

                </div>

                <NavBar/>

            </div>
            

        </div>
    )
}

export default Header