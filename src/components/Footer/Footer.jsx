import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="footer-list">
                    <Link to='/menu'><p>меню</p></Link>
                    <img src="/dot-white.svg" alt="" />
                    <Link to='/conditions'><p>условия доставки</p></Link>
                    <img src="/dot-white.svg" alt="" />
                    <Link><p>бонусная карта</p></Link>
                    <img src="/dot-white.svg" alt="" />
                    <Link><p>рестораны</p></Link>
                    <img src="/dot-white.svg" alt="" />
                    <Link to='/about'><p>о нас</p></Link>
                    <img src="/dot-white.svg" alt="" />
                    <Link><p>отзывы</p></Link>
                </div>
                <img className='vkontakte' src="./vk.svg" alt="" />
                <div className="footer-bottom">
                    <div className='footer-p'>
                        <p>© 2016-2025 Сеть ресторанов "Infinity"</p>
                        <p>www.restoraninfinity.ru</p>
                        <p> г. Москва, ул. Примерная, д. 123</p>
                        <p>+7 (901)-285-3563</p>
                    </div>
                    <div className='footer-p-right'>
                        <p>Онлайн оплата</p>
                        <p>Положение о конфиденциальности <br/> и защите персональных данных</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer