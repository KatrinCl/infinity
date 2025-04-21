import React, { useContext } from 'react'
import './Product.css'
import { Link, useParams } from 'react-router-dom';
import { food_list } from '../../assets/assets.js';
import simbol from '../../assets/simbol.svg'
import circle_plus from '../../assets/circle_plus.svg'
import circle_minus from '../../assets/circle_minus.svg'
import { ShopContext } from '../../context/ShopContext.jsx';

const Product = () => {
    const { productId } = useParams();
    const { getCartItemCount, addToCart, removeFromCart } = useContext(ShopContext);

    const product = food_list.find(item => item._id === productId);
    const quantity = getCartItemCount(productId);

    return (
        <div className='product-page'>
            <div className='product-back'>
                <img src={simbol} alt='' />
                <Link to='/'>
                    <p>Вернуться в меню</p>
                </Link>
            </div>
            <div className="product-container">
                <div className="product-img">
                    <img src={product.image} alt='' />
                    <div className='product-img-details'>
                        <div className='product-img-detail'>
                            <p>Пищевая ценность 100г</p>
                            <p className='product-kkal'>{product.weight1}</p>
                        </div>
                        <div className='product-img-detail'>
                            <p>Пищевая ценность порция</p>
                            <p className='product-kkal'>{product.weight2}</p>
                        </div>
                    </div>
                </div>
                <div className="product-details">
                    <h2>{product.name}</h2>
                    <p className="product-details-weight">Вес: {product.weight}</p>
                    <p className='product-details-composition'>Состав: {product.composition}</p>
                    <div className='product-details-cart'>
                        <div className='product-details-cart-count'>
                           <img onClick={() => removeFromCart(productId)} src={circle_minus} alt="" />
                           <p>{quantity}</p>
                           <img onClick={() => addToCart(productId)} src={circle_plus} alt="" />
                        </div>
                        <div onClick={() => addToCart(productId)} className='product-details-cart-add'>
                            <p className='product-details-add-p'>В корзину</p>
                            <p className='product-details-price'>{product.price} руб.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product