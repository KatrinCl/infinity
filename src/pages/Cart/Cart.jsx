import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import simbol from '../../assets/simbol.svg';
import cross_icon from '../../assets/cross_icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { food_list } from '../../assets/assets.js';
import circle_plus from '../../assets/circle_plus.svg';
import circle_minus from '../../assets/circle_minus.svg';

const Cart = () => {
    const { cartItems, removeFromCart, addToCart, getCartItemCount } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        deliveryTime: '',
        paymentMethod: 'cash',
        comment: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const tempData = [];
        for (const itemId in cartItems) {
            const quantity = cartItems[itemId];
            if (quantity > 0) {
                const productData = food_list.find(product => product._id === itemId);
                if (productData) {
                    tempData.push({
                        ...productData,
                        quantity: quantity,
                        totalPrice: productData.price * quantity
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems, food_list]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправка заказа:', { cartData, formData });
        alert('Заказ оформлен!');
    };

    const totalOrderPrice = cartData.reduce((sum, item) => sum + item.totalPrice, 0);

    return (
        <div className='cart'>
            <div className='cart-container'>
                <h1>Корзина</h1>
                <div className='cart-back'>
                    <img src={simbol} alt='' />
                    <Link to='/'>
                        <p>Вернуться в меню</p>
                    </Link>
                </div>
                
                <div className='cart-content'>
                    <div className='cart-items'>
                        {cartData.map((item, index) => (
                            <div key={index} className='cart-item'>
                                <div className='cart-item-image'>
                                    <img onClick={() => navigate(`/product/${item._id}`)} src={item.image} alt={item.name} />
                                </div>

                                <div className='cart-item-details'>
                                    <div className='cart-details-top'>
                                        <p className='cart-item-name'>{item.name}</p>
                                        <img onClick={(e) => {
                                            e.preventDefault();
                                            removeFromCart(item._id);
                                        }} src={cross_icon} alt="Удалить" />
                                    </div>

                                    <div className='cart-details-bottom'>
                                        <div className='cart-item-count'>
                                            <img onClick={() => removeFromCart(item._id)} src={circle_minus} alt="" />
                                            <p>{getCartItemCount(item._id)}</p>
                                            <img onClick={() => addToCart(item._id)} src={circle_plus} alt="" />
                                        </div>
                                        <p className='cart-item-price'>{item.totalPrice} ₽</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-form-container">
                        <div className="cart-form">
                            <h2>Оформление заказа</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Имя</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Ваше имя"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Телефон</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+7 (___) ___-__-__"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="example@mail.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="deliveryTime">Время доставки</label>
                                        <input
                                            type="text"
                                            id="deliveryTime"
                                            name="deliveryTime"
                                            placeholder="Например, 19:00"
                                            value={formData.deliveryTime}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Адрес доставки</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="Улица, дом, квартира"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Способ оплаты</label>
                                        <div className="radio-group">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="cash"
                                                    checked={formData.paymentMethod === 'cash'}
                                                    onChange={handleInputChange}
                                                />
                                                Наличными
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="card"
                                                    checked={formData.paymentMethod === 'card'}
                                                    onChange={handleInputChange}
                                                />
                                                Картой
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="comment">Комментарий к заказу</label>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        placeholder="Ваши пожелания"
                                        value={formData.comment}
                                        onChange={handleInputChange}
                                        rows="3"
                                    />
                                </div>

                                <div className="order-summary">
                                    <p>Итого: <span>{totalOrderPrice} ₽</span></p>
                                </div>

                                <button type="submit" className="submit-order">
                                    Оформить заказ
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;