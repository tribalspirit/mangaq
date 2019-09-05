import React from 'react'
import { Link } from 'react-router-dom'
/*
    // PREVIOUSLY
const Menu = () => (
    <div>
        <a key='menu1'>Articles</a>
        <a key='menu2'>Articles2</a>
        <a key='menu3'>Articles3</a>
    </div>
)

*/

// 
const MenuLinks = () => ([
    <Link className='link' key='home' to='/'>Home</Link>,
    <Link className='link' key='manga' to='/manga'>Manga</Link>,
    <Link className='link' key='grammar' to='/grammar'>Grammar</Link>,
    <Link className='link' key='help' to='/help'>Help</Link>,
])

export default MenuLinks