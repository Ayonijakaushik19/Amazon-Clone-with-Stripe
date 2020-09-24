import React, { useState } from 'react';
import { useStateValue } from './StateProvider';
import { useSpring, animated } from 'react-spring'

import './Product.css';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                {/* Title */}
                <p>{title}</p>    

                {/* Price */}      
                <p className="product__price">   
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                {/* Rating */}
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <span role="img" aria-label="rating">⭐</span>
                    ))} 
                </div>
            </div>

            {/* Image */}
            <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            >
                <img style={{'maxHeight': '200px', 'maxWidth': '200px'}} src={image} alt="Product" />
            </animated.div>
            
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
