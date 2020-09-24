import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ product, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeProduct = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: product.id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={product.image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{product.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{product.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(product.rating).fill().map((_, i) => (
                        <span role="img" aria-label="rating">⭐</span>
                    ))} 
                </div>
                <div className="checkoutProduct__quantity">
                    <p>Quantity: <strong>{product.quantity}</strong></p>
                </div>
                {!hideButton && (
                    <button onClick={removeProduct}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
