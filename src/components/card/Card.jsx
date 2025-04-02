import React from 'react'
import "./card.scss";
import "../adapt/adapt.scss";
import { LuPuzzle } from "react-icons/lu";

const Card = () => {
    return (
        <div className='card'>
            <div className="container">
                <div className="card__first-box">
                    <h2 className="adapt__title">Удобная корзина — максимум простоты для клиента</h2>
                    <img src="6.png" alt="" />
                    <p className="card__txt">Корзина вашего интернет-магазина спроектирована так, чтобы покупатель мог легко управлять своими товарами — добавить, изменить количество или удалить лишнее в один клик.</p>
                    <p className="card__text">Всё работает интуитивно:</p>
                    <div className="card__box">
                        <p className="card__box-text"><LuPuzzle />Мгновенное обновление суммы заказа</p>
                        <p className="card__box-text"><LuPuzzle />Подсказки по наличию и размерам</p>
                        <p className="card__box-text"><LuPuzzle />Возможность вернуться к покупкам и продолжить позже</p>
                        <p className="card__box-text"><LuPuzzle />Визуально приятный и понятный интерфейс</p>
                    </div>
                    <p className="card__text-first">Покупателю не нужно «думать» — всё под рукой. А чем удобнее корзина, тем выше конверсия в заказ.</p>
                </div>
                <div className="card__second-box">
                    <h2 className="adapt__title">Удобный и интуитивно понятный раздел «О товаре»</h2>
                    <p className="card__txt">Корзина вашего интернет-магазина спроектирована так, чтобы покупатель мог легко управлять своими товарами — добавить, изменить количество или удалить лишнее в один клик.</p>
                    <p className="card__text">Всё работает интуитивно:</p>
                    <div className="card__box">
                        <p className="card__box-text"><LuPuzzle />Мгновенное обновление суммы заказа</p>
                        <p className="card__box-text"><LuPuzzle />Подсказки по наличию и размерам</p>
                        <p className="card__box-text"><LuPuzzle />Возможность вернуться к покупкам и продолжить позже</p>
                        <p className="card__box-text"><LuPuzzle />Визуально приятный и понятный интерфейс</p>
                    </div>
                    <p className="card__text-first">Покупателю не нужно «думать» — всё под рукой. А чем удобнее корзина, тем выше конверсия в заказ.</p>
                    <img src="7.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Card