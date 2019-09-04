import React from 'react'
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
    <li><a className='link' key='home' href='/'>Home</a></li>,
    <li><a className='link' key='manga' href='/manga'>Manga</a></li>,
    <li><a className='link' key='grammar' href='/grammar'>Grammar</a></li>,
    <li><a className='link' key='help' href='/help'>Help</a></li>,
])

export default MenuLinks