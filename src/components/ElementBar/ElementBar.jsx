import React from 'react'
import style from '../ElementBar/ElementBar.module.css'
import {icons} from '../../data-base/dataicon'

function ElementBar() {

    return (
        <div className={style.category}>

                {
                    icons.map((icon, index) =>(
                
                        <div>
                            <div className={style.icon}>{icon.icon}</div>
                            <p>{icon.txt}</p>
                        </div>

                    ))

                }

                

        </div>
    )
}

export default ElementBar

