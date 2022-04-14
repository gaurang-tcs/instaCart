import React, {useState} from "react";

import './item.styles.scss'

const Item = ({items}) => {
    const { icon, price, type, name, weight } = items;
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
       setIsHovering(true)
      
    }

     const handleMouseRemove = () => {
        setIsHovering(false)
     }

    return (
        <div className="item">
            <img src={`${icon}`} alt='icon' />
            <button className="add-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseRemove}>+ Add</button>
            <button 
             className={`${isHovering ? "" : "hidden"}`} 
             style={{
                width:'7rem',
                height: '2.5rem',
               // border-radius: '20px',
                position: 'absolute',
               // margin-left: '4rem',
                //margin-top: '0.5rem',
               // border: none,
                //font-weight: '600',
                //font-size: '1rem',
                cursor: 'pointer'
                 
                }}
             >
             + Add to cart
             </button>
            <span className="price">{price}</span>
            <span className="type">{type}</span>
            <span className="name">{name}</span>
            <span className="weight">{weight}</span>
        </div>
    )
}

export default Item;