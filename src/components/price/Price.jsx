import React from 'react'
import "./price.scss";
import { LuPuzzle } from "react-icons/lu";
import { FaFigma } from "react-icons/fa6";
import { MdSaveAlt } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { PiStarFour } from "react-icons/pi";
import { FiCreditCard } from "react-icons/fi";
import { LuClipboardPenLine } from "react-icons/lu";
import { FaRegImages } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { GoWorkflow } from "react-icons/go";

const Price = () => {
    return (
        <div className='price'>
            <div className="container">
                <h2 className="price__title">Цены на разработку сайтов</h2>
                <div className="price__box">
                    <div className="price__box-div">
                        <h2 className="price__box-title">Лендинг</h2>
                        <p className="price__box-txt">Одностраничный сайт за 3 дня</p>
                        <div className="price__benefit-box">
                            <p className="price__benefit-txt"><LuPuzzle />Конструктор продающей страницы</p>
                            <p className="price__benefit-txt"><GoDatabase />Наполнение на базу ИИ</p>                                 <p className="price__benefit-txt"><LuClipboardPenLine />10 фото в подарок</p>                             <p className="price__benefit-txt"><LuArrowUpDown />CRM система для бизнеса</p>          
                        </div>
                        <p className="price__text">21 950 ₽</p>
                        <a href="#" className="price__link">Подробнее</a>
                    </div>
                    <div className="price__box-div">
                        <h2 className="price__box-title">Сайт-Бизнес</h2>
                        <p className="price__box-txt">Многостраничный сайт за 5 дней</p>
                        <div className="price__benefit-box">
                            <p className="price__benefit-txt"><FaFigma />Тематический дизайн</p>
                            <p className="price__benefit-txt"><PiStarFour />Более 80 видов блоков</p>                                 <p className="price__benefit-txt"><FaRegImages />Бесплатное наполнение</p>                                 <p className="price__benefit-txt"><IoSettingsOutline />Управление контекстной рекламой</p>
                        </div>
                        <p className="price__text">23 950 ₽</p>
                        <a href="#" className="price__link">Подробнее</a>
                    </div>
                    <div className="price__box-div">
                        <h2 className="price__box-title">Интернет-магазин</h2>
                        <p className="price__box-txt">Сайт для онлайн продаж за 7 дней</p>
                        <div className="price__benefit-box">
                            <p className="price__benefit-txt"><MdSaveAlt />Быстрый импорт товаров</p>
                            <p className="price__benefit-txt"><FiCreditCard />Выгодный интернет-эквайринг</p>                          <p className="price__benefit-txt"><RiMoneyDollarCircleLine />50+ способов оплаты</p>                      <p className="price__benefit-txt"><GoWorkflow />Интеграция с маркетплейсами</p>
                        </div>
                        <p className="price__text">24 950 ₽</p>
                        <a href="#" className="price__link">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price