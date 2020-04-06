import React from 'react'


import CustomButton from '../button/Button.component'
import './cart-dropdown.styles.scss'

const CartDropDown = () => {
    return (
        <div className = "cart-dropdown">
            <div className="cart-items" />
            <CustomButton>Goto Checkout</CustomButton>
            
        </div>
    )
}

export default CartDropDown
