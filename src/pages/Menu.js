import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
import "../styles/Menu.css"

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'> Our Menu </h1>
        <div className='menuList'>
            {
                MenuList.map((item, key) => {
                    return <MenuItem img={item.image} name={item.name} price={item.price} key={key}/>
                } )

            }
        </div>
    </div>
  )
}

export default Menu