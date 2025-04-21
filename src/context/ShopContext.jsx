import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    // Используем хук состояния для хранения элементов корзины
    const [cartItems, setCartItems] = useState(() => {
        // При инициализации загружаем корзину из localStorage
        const savedCart = localStorage.getItem('cart');
        // Если корзина существует в localStorage, парсим её, иначе возвращаем пустой объект
        return savedCart ? JSON.parse(savedCart) : {};
    });

    // Хранение списка продуктов (пока не используется)
    const [products, setProducts] = useState([]);

    // Используем хук эффекта для сохранения корзины в localStorage при изменении
    useEffect(() => {
        // Сохраняем текущие элементы корзины в localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]); // Эффект сработает каждый раз, когда cartItems изменится

    // Функция для добавления товара в корзину
    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev, // Копируем предыдущие элементы корзины
            [itemId]: (prev[itemId] || 0) + 1 // Увеличиваем количество товара на 1
        }));
    };

    // Функция для удаления товара из корзины
    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            // Если товара нет в корзине, просто возвращаем предыдущие элементы
            if (!prev[itemId]) return prev;

            const newQuantity = prev[itemId] - 1; // Уменьшаем количество товара на 1
            if (newQuantity <= 0) {
                // Если количество товара стало 0 или меньше, удаляем его из корзины
                const newCart = { ...prev }; // Копируем предыдущие элементы корзины
                delete newCart[itemId]; // Удаляем товар
                return newCart; // Возвращаем обновленную корзину
            }

            // Если количество товара больше 0, просто обновляем его количество
            return {
                ...prev,
                [itemId]: newQuantity
            };
        });
    };

    // Функция для получения количества конкретного товара в корзине
    const getCartItemCount = (itemId) => {
        return cartItems[itemId] || 0; // Возвращаем количество товара или 0, если его нет
    };

    // Функция для получения общего количества товаров в корзине
    const getCartCount = () => {
        // Суммируем все количества товаров в корзине
        return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    };

    // Объект value, который будет передан в контекст
    const value = {
        cartItems, // Текущие элементы корзины
        products, // Список продуктов (пока не используется)
        addToCart, // Функция для добавления товара в корзину
        removeFromCart, // Функция для удаления товара из корзины
        getCartItemCount, // Функция для получения количества конкретного товара
        getCartCount, // Функция для получения общего количества товаров в корзине
    };

    // Возвращаем провайдер контекста с переданным значением и дочерними элементами
    return (
        <ShopContext.Provider value={value}>
            {props.children} {/* Дочерние компоненты, которые могут использовать контекст */}
        </ShopContext.Provider>
    );
};

// Экспортируем провайдер, чтобы его можно было использовать в других компонентах
export default ShopContextProvider;