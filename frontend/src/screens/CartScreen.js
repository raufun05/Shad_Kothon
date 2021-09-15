import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search
        ? Number(props.location.search.split('=')[1])
        : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    const removeFromCartHandler = (id) => {
        //delect action
    };
    // const checkoutHandler = () => {
    //     props.history.push ('/signin?redirect=shipping');
    // };
    return (
        <div className="row top">
            <div className="col-2">
                <h1>Shoping Cart</h1>
                {cartItems.length === 0 ? (<MessageBox>
                    Cart is Empty. <Link to="/">Go Shoping</Link>
                </MessageBox>
                    )
                    :
                    (
                        <ul>
                            {
                                cartItems.map((item) => (
                                    <li key={item.product}>
                                        <div className="row">
                                            <div>
                                                <img src={item.image}
                                                    alt={item.name} className="small">
                                                </img>
                                            </div>
                                            <div className="min-30">
                                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                                            </div>
                                        <div>
                                            <select value={item.qty} onChange={e => dispatch(addToCart(item.product), Number(e.target.value))}>
                                                {[...Array(item.counInStock).keys()].map((x) => (
                                                    <option key={x + 1}>
                                                        {x + 1}
                                                        </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            ${item.price}
                                        </div>
                                        <div>
                                            <button type="button" onClick={() => removeFromCartHandler(item.product)}>Delete</button>
                                        </div>
                                    </div>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                }

            </div>

        </div>
    )
}