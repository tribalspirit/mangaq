import React from 'react'
import MenuLinks from './menu'
import LangSwitcher from './lang-switcher'

const Menu = () => (
    <nav>
    <ul>
        <MenuLinks />
        <LangSwitcher />
    </ul>
</nav>
)

export default Menu