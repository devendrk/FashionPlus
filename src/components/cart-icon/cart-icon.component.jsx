import React from 'react'
import {connect} from 'react-redux'

import {toggleCardHidden} from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon } from "../../assetes/cart.svg";


import  './cart-icon.styles.scss'
const CartIcon = ({toggleCardHidden})=>{
    return (
        <div className = "cart-icon">
            <ShoppingIcon className = "shopping-icon" onClick = {toggleCardHidden}/>
            <span className = "item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch=>({
    toggleCardHidden:()=>dispatch(toggleCardHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)