import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { useTransition, animated } from 'react-spring';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    const transitions = useTransition(basket, item => item.id, {
        from: { opacity: 0, transform: 'translate3d(0%,-100%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%, 0%,0)' },
        leave: { opacity: 0, transform: 'translate3d(100%,0%,0)' }
    });

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Amazon Advert"/>

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {transitions.map(({ item, key, props }) => {
                        return <animated.div key={key} style={props}>
                            <CheckoutProduct
                                product={item}
                            />
                        </animated.div>
                    })}
                    {/* {basket.map(item => {
                        return <CheckoutProduct
                            product={item}
                        />
                    })} */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
