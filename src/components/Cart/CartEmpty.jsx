import React from 'react';
import emptyCart from "../../assets/img/empty-cart.png";

export const CartEmpty = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пуста <span role="img" aria-label={null}>😕</span></h2>
            <p>
                Для того, чтобы заказать, перейдите на главную страницу.
            </p>
            <img src={emptyCart} alt="Empty cart"/>
            <a href="/" className="button button--black">
                <span>Вернуться назад</span>
            </a>
        </div>
    );
};

