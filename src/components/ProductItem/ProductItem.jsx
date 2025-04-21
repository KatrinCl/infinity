import React, { useContext } from 'react';
import './ProductItem.css';
import { Link } from 'react-router-dom';
import circle_plus from '../../assets/circle_plus.svg';
import circle_minus from '../../assets/circle_minus.svg';
import { ShopContext } from '../../context/ShopContext';

const ProductItem = ({ id, name, price, image }) => {
    const { addToCart, removeFromCart, getCartItemCount } = useContext(ShopContext);
    const quantity = getCartItemCount(id);

    return (
        <div className='food-item'>
            <Link to={`/product/${id}`} className='food-item-img-container'>
                <img src={image} alt={name} />
            </Link>
            <div className="food-item-info">
                <p className='food-name'>{name}</p>
                <div className='food-options'>
                    <div className="food-options-count">
                        <img 
                            src={circle_minus} 
                            alt="" 
                            onClick={() => removeFromCart(id)}
                            className={quantity === 0 ? 'disabled-icon' : ''}
                        />
                        <p>{quantity}</p>
                        <img 
                            src={circle_plus} 
                            alt="" 
                            onClick={() => addToCart(id)}
                        />
                    </div>
                    <p className='food-options-price'>{price} руб.</p>
                </div>
            </div>
            <div className='food-add-cart' onClick={() => addToCart(id)}>
                <p>{quantity > 0 ? 'В корзине' : 'В корзину'}</p>
            </div>
        </div>
    );
};

export default ProductItem;