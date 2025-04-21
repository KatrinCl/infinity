import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import tg_icon from '../../assets/tg.svg'
import whatsapp_icon from '../../assets/whatsapp.svg'

const Navbar = () => {
    const { getCartCount } = useContext(ShopContext);
    const [showContactModal, setShowContactModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [phone, setPhone] = useState('+7');
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [code, setCode] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Закрытие меню при клике на пункт
    const closeMobileMenu = () => {
      setIsMenuOpen(false);
    };
  


    const toggleContactModal = () => {
        setShowContactModal(!showContactModal);
    };

    const toggleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
        setIsCodeSent(false);
        setPhone('+7');
        setCode('');
    };

    const handleOutsideClick = (e, modalType) => {
        if (e.target === e.currentTarget) {
            if (modalType === 'contact') {
                toggleContactModal();
            } else if (modalType === 'login') {
                toggleLoginModal();
            }
        }
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (value.startsWith('+7') && value.length <= 12) {
            setPhone(value);
        }
    };

    const handleSendCode = (e) => {
        e.preventDefault();
        // Здесь должна быть логика отправки кода
        console.log('Отправка кода на номер:', phone);
        setIsCodeSent(true);
    };

    const handleCodeChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 6) {
            setCode(value);
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Здесь должна быть логика проверки кода
        console.log('Проверка кода:', code);
        toggleLoginModal();
    };    

    return (
        <div className='nav'>
            <div className='nav-top'>
            <div className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`burger-line ${isMenuOpen ? 'open' : ''}`}></div>
                </div>
                <div className='nav-delivery'>
                    <img src="./logo3.jpg" alt="Логотип доставки" />
                    <div className='nav-delivery-text'>
                        <p className='text-1'>ДОСТАВКА</p>
                        <p>ПН/ВС 10:00/18:00</p>
                        <p className='text-2'>*заказы принимаем только на сайте</p>
                    </div>
                </div>
                <Link to='/'><img className='nav-logo' src="./logo.webp" alt="Логотип компании" /></Link>
                <div className='nav-top-right'>
                    <Link className='nav-location' to='/location'>
                        <img src="./location.svg" alt="Локация" />
                        <p>Москва</p>
                    </Link>
                    <div className='contact-button' onClick={toggleContactModal}>
                        <img src="./call.svg" alt="Контактная информация" />
                        <p>Связаться</p>
                    </div>
                    <div>
                        <Link to='/cart' className='nav-cart'>
                            <img src="./cart_icon.svg" alt="Корзина" />
                            <p className='cart-dot'>{getCartCount()}</p>
                        </Link>
                        <p>Корзина</p>
                    </div>
                    <div className='nav-user' onClick={toggleLoginModal}>
                        <img src="./home.svg" alt="Личный кабинет" />
                        <p>Войти</p>
                    </div>
                </div>
            </div>

            <div className="nav-bottom">
                <Link to='/menu'><p>меню</p></Link>
                <img src="./dot-red.svg" alt="" />
                <Link to='/conditions'><p>условия доставки</p></Link>
                <img src="./dot-red.svg" alt="" />
                <p>бонусная карта</p>
                <img src="./dot-red.svg" alt="" />
                <p>рестораны</p>
                <img src="./dot-red.svg" alt="" />
                <Link to='/about'><p>о нас</p></Link>
                <img src="./dot-red.svg" alt="" />
                <p>отзывы</p>
            </div>

            {/* Модальное окно контактов */}
            {showContactModal && (
                <div className="contact-modal" onClick={handleOutsideClick}>
                    <div className="modal-content">
                        <span className="close-modal" onClick={toggleContactModal}>&times;</span>
                        <div className="contact-info">
                            <div className='contact-info-details'>
                            <p><strong>Телефон:</strong> +7 (901) 285-35-63</p>
                            <div className="social-links">
                                <img src={tg_icon} alt="tg" />
                                <img src={whatsapp_icon} alt="WhatsApp" />
                            </div>
                            </div>
                            <p><strong>Email:</strong> info@infinity.com</p>
                            <p><strong>Часы работы:</strong> ПН-ВС 10:00-18:00</p>
                            <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 123</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Добавьте мобильное меню */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to='/menu' onClick={closeMobileMenu}><p>меню</p></Link>
                <Link to='/conditions' onClick={closeMobileMenu}><p>условия доставки</p></Link>
                <p onClick={closeMobileMenu}>бонусная карта</p>
                <p onClick={closeMobileMenu}>рестораны</p>
                <Link to='/about' onClick={closeMobileMenu}><p>о нас</p></Link>
                <p onClick={closeMobileMenu}>отзывы</p>
                
                {/* Контакты в мобильном меню */}
                <div className='mobile-contact' onClick={toggleContactModal}>
                    <img src="/call.svg" alt="Контактная информация" />
                    <p>Связаться</p>
                </div>
            </div>

            {/* Модальное окно входа */}
            {showLoginModal && (
                <div className="modal" onClick={(e) => handleOutsideClick(e, 'login')}>
                    <div className="modal-content auth-modal">
                        <span className="close-modal" onClick={toggleLoginModal}>&times;</span>
                        <h2>Авторизация</h2>
                        
                        {!isCodeSent ? (
                            <form onSubmit={handleSendCode}>
                                <div className="form-group">
                                    <label>Ваш номер телефона</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        required
                                        className="phone-input"
                                    />
                                </div>
                                <button type="submit" className="submit-button">
                                    Выслать код
                                </button>
                                <div className="auth-agreement">
                                    <p>
                                        Нажимая на кнопку "Выслать код", даю согласие на обработку персональных данных. 
                                        С положением о конфиденциальности и защите персональных данных ознакомлен и согласен.
                                    </p>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleLoginSubmit}>
                                <div className="form-group">
                                    <label>Код из SMS</label>
                                    <input
                                        type="text"
                                        value={code}
                                        onChange={handleCodeChange}
                                        required
                                        placeholder="Введите 6-значный код"
                                        maxLength="6"
                                        className="code-input"
                                    />
                                </div>
                                <button type="submit" className="submit-button">
                                    Войти
                                </button>
                                <div className="auth-resend">
                                    <p>Не получили код? <button type="button" onClick={handleSendCode}>Отправить повторно</button></p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default Navbar;