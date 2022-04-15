import React, { useState ,useContext } from "react";
import { CartContext } from "../../providers/cart/cart.provider";
import { MdDelete } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';

import './item.styles.scss'

const Item = ({ item }) => {
    const { icon, priceview, type, name, weight } = item;
    const [isHovering, setIsHovering] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const { addItem, removeItem } = useContext(CartContext);

    const handleMouseEnter = () => {
        setIsHovering(true)

    }

    const handleMouseRemove = () => {
        setIsHovering(false)
    }

    const handleClick = () => {
        addItem(item);
        setIsShow(true);
    }
    return (
        <div className="item">
            <img src={`${icon}`} alt='icon' />

            <button className="add-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseRemove} >+ Add</button>

            <button  className={`${isHovering ? "add-to-cart-button" : "hidden"}`} onClick={handleClick}>+ Add to cart</button>

            <button className={`${isShow ? "main-button" : "hidden"}`}> 
                <MdDelete className="delete" onClick={() => removeItem(item)}/>
                <GrAdd className="add" onClick={() => addItem(item)} />
            </button>

            <div className="item-details">
                <span className="price">{priceview}</span>
                <span className="type">{type}</span>
                <span className="name">{name}</span>
                <span className="weight">{weight}</span>
            </div>

        </div>
    )
}

export default Item;