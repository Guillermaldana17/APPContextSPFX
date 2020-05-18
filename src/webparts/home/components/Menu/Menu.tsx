import * as React from 'react'
import style from './Menu.module.scss'
import { useEffect, useContext, Fragment } from 'react';
import SharepointContext from '../Context/Sharepoint/SharepointContext'
import {useMenu} from '../Context/SP/SPProvider'

const Menu = (props:any) => {
    const {menu} = useMenu();
    
    return (
        <div className='card'>
            <div className='card-header'>
                <h6 className={style.pretitle}>Menu principal</h6>
            </div>
            <div className='card-body'>
            {
                menu.map((item) =>{
                    <p>{item.Title}</p>
                })
            }
            </div>
        </div>
    );
}

export default Menu;