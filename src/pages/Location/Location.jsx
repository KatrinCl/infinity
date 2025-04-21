import React from 'react'
import './Location.css'
import { Link } from 'react-router-dom'

const Location = () => {
    return (
        <div className='location'>
            <div className="location-container">
                <div className='location-container-img'>
                    <Link to='/'><img className='nav-logo' src="/logo.webp" alt="Логотип компании" /></Link>
                </div>
                <div className="location-container-blocks">
                    <div className='location-container-block'>
                        <div className="location-container-left">
                            <h1>Москва</h1>
                            <p className='location-delivery-p'>доставка</p>
                            <p className='location-time-main'>пн-вс 10:00-18:00</p>
                        </div>
                        <div className="location-container-right">
                            <p className='location-address'>г. Москва, ул. Примерная, д. 123</p>
                            <p className='location-time'>пн-вс с 10:00 до 20:00</p>
                        </div>
                    </div>

                    <div className='location-container-block'>
                        <div className="location-container-left">
                            <h1>Иваново</h1>
                            <p className='location-delivery-p'>доставка</p>
                            <p className='location-time-main'>пн-вс 10:00-18:00</p>
                        </div>
                        <div className="location-container-right">
                            <p className='location-address'>ул. Садовая, 4</p>
                            <p className='location-time'>пн-пт с 9:00 до 21:00,<br/> сб-вс с 11:00 до 21:00</p>
                            <p className='location-address'>проспект Ленина, 8</p>
                            <p className='location-time'>пн-вс с 10:00 до 20:00</p>
                        </div>
                    </div>

                    <div className='location-container-block'>
                        <div className="location-container-left">
                            <h1>Ярославль</h1>
                            <p className='location-delivery-p'>доставка</p>
                            <p className='location-time-main'>пн-вс 10:00-18:00</p>
                        </div>
                        <div className="location-container-right">
                            <p className='location-address'>ул. Комсомольская, 4</p>
                            <p className='location-time'>пн-вс с 10:00 до 22:00</p>
                            <p className='location-address'>ул. Свободы, 1</p>
                            <p className='location-time'>пн-вс с 9:00 до 21:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location