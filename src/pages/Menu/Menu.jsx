import React, { useState } from 'react';
import './Menu.css';
import ProductItem from '../../components/ProductItem/ProductItem.jsx';
import { food_list } from '../../assets/assets.js';

const Menu = () => {
  // Состояние для хранения выбранной категории
  const [selectedCategory, setSelectedCategory] = useState('Все');
  
  // Получаем уникальные категории из food_list
  const categories = [...new Set(food_list.map(item => item.category))];
  
  // Фильтруем продукты по выбранной категории
  const filteredProducts = selectedCategory === 'Все' 
    ? food_list 
    : food_list.filter(item => item.category === selectedCategory);

  return (
    <div className='menu'>
      <img className='menu-banner' src="./menu1.jpg" alt="" />
      
      {/* Меню категорий */}
      <div className='menu-list'>
        {categories.map((category, index) => (
          <p 
            key={index}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </p>
        ))}
      </div>

      {/* Отображение продуктов */}
      <div className='menu-products'>
        {filteredProducts.map((item, index) => (
          <ProductItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;