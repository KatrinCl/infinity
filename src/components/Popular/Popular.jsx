import React from 'react'
import './Popular.css'
import ProductItem from '../ProductItem/ProductItem'
import { popular_list } from '../../assets/assets.js'
import { Link } from 'react-router-dom'


const Popular = () => {
    return (
        <div className='popular'>
            <div className="popular-container">
                <h1>Популярное</h1>
                <div className='popular-products'>
                    {popular_list.slice(0, 4).reverse().map((item, index) => {
                        return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    })}
                </div>
                    <div className="popular-link">
                        <Link to='/menu'><p>Перейти к меню</p></Link>
                    </div>
            </div>
        </div>
    )
}

export default Popular