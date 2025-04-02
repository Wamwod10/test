import React from 'react'
import "./nextprice.scss"
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaLayerGroup } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { CiPalette } from "react-icons/ci";
import { PiStarFour } from "react-icons/pi";
import { FaRegImages } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbFileImport } from "react-icons/tb";
import { HiOutlineCreditCard } from "react-icons/hi2";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";

const NextPrice = () => {
  return (
    <div className='nextprice'>
        <div className="container">
            <h2 className="nextprice__title">Цены на разработку сайтов</h2>
            <div className="nextprice__box">
                <div className="nextprice__box-div">
                    <h2 className="nextprice__box-title">Лендинг</h2>
                    <p className="nextprice__box-text">Одностраничный сайт за 3 дня</p>
                    <div className="nextprice__line"></div>
                    <div className="nextprice__text-box">
                        <p className="nextprice__box-txt"><IoExtensionPuzzleOutline className='icon' />Конструктор продающей...</p>
                        <p className="nextprice__box-txt"><FaLayerGroup className='icon' />Более 80 видов блоков</p>
                        <p className="nextprice__box-txt"><FaPenToSquare className='icon' />Бесплатные наполнение </p>
                        <p className="nextprice__box-txt"><FaChartLine className='icon' />Управление контекстной...</p>
                    </div>
                    <div className="nextprice__line"></div>
                    <p className="nextprice__box-price price-top">21 950 ₽</p>
                    <a href="" className="nextprice__link">Подробнее</a>
                </div>
                <div className="nextprice__box-div">
                    <h2 className="nextprice__box-title">Сайт-Бизнес</h2>
                    <p className="nextprice__box-text">Многостраничный сайт за 5 дней</p>
                    <div className="nextprice__line"></div>
                    <div className="nextprice__text-box">
                        <p className="nextprice__box-txt"><CiPalette className='icon' />Тематичный дизайн</p>
                        <p className="nextprice__box-txt"><PiStarFour className='icon' />Наполнение на базе ИИ</p>
                        <p className="nextprice__box-txt"><FaRegImages className='icon' />10 фото в подарок</p>
                        <p className="nextprice__box-txt"><IoSettingsOutline className='icon' />CRM система для бизнеса</p>
                    </div>
                    <div className="nextprice__line"></div>
                    <p className="nextprice__box-price">23 950 ₽</p>
                    <a href="" className="nextprice__link">Подробнее</a>
                </div>
                <div className="nextprice__box-div">
                    <p className="nextprice__popular"><AiFillFire className='icon-fire'/>Популярный тариф</p>
                    <h2 className="nextprice__box-title">Интернет-магазин</h2>
                    <p className="nextprice__box-text">Сайт для онлайн продаж за 7 дней</p>
                    <div className="nextprice__line"></div>
                    <div className="nextprice__text-box">
                        <p className="nextprice__box-txt"><TbFileImport className='icon' />Быстрый импорт товаров</p>
                        <p className="nextprice__box-txt"><HiOutlineCreditCard className='icon' />Выгодный интернет-эквайринг</p>
                        <p className="nextprice__box-txt"><FaMoneyBillWave className='icon' />50+ способов оплаты</p>
                        <p className="nextprice__box-txt"><FaProjectDiagram className='icon' />Интеграция с Маркетплейсами</p>
                    </div>
                    <div className="nextprice__line"></div>
                    <p className="nextprice__box-price">24 950 ₽</p>
                    <a href="" className="nextprice__link">Подробнее</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NextPrice