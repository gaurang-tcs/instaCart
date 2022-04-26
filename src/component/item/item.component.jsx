import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../providers/cart/cart.provider";
import { MdDelete } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import SkeletonProduct from '../skeleton/skeletonProduct';
import './item.styles.scss'

const Item = ({ item }) => {
    const { icon, priceview, type, name, weight } = item;
    const [isHovering, setIsHovering] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const { addItem, removeItem, cartItems } = useContext(CartContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, [])

    const addedItem = cartItems.find(obj => {
        return obj.id === item.id
    })

    const quantity = addedItem ? addedItem.quantity : 0;

    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseRemove = () => {
        setIsHovering(false)
    }

    const handleClick = () => {
        setIsShow(true);
        addItem(item);
    }

    return (
        <div>
            {!isLoading ?
                (<div className="item" >
                    <img src={`${icon}`} alt='icon' />

                    <button className={`${isHovering ? "add-to-cart-button" : "hidden"}`} onClick={handleClick}>+ Add to cart</button>

                    {quantity === 0 ?
                        (<button className="add-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseRemove}>+ Add</button>)
                        :
                        (<button className={`${isShow ? "main-button" : "hidden"}`}>
                            <MdDelete className="delete" onClick={() => removeItem(item)} />
                            <div className="quantity">{quantity}</div>
                            <GrAdd className="add" onClick={() => addItem(item)} />
                        </button>
                        )}
                    <div className="item-details">
                        <span className="price">{priceview}</span>
                        <span className="type">{type}</span>
                        <span className="name">{name}</span>
                        <span className="weight">{weight}</span>
                    </div>
                </div>)

                : [1, 2, 3, 4, 5, 6, 7, 8].map((loading) => (
                    <div className="mt-8">
                        <SkeletonProduct />
                    </div>
                ))
            }
        </div>
    )
}

export default Item;