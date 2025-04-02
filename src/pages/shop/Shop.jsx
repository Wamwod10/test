import React from 'react';
import "./shop.scss";

const Shop = () => {
  return (
    <div className='shop'>
        <div className="container">
            <h2 className="shop__title">Выберите свой интернет магазин</h2>
            <div className="shop__box">
                <img className='shop__img' src="17.png" alt="" />
                <div className="shop__swiper-box">
                    <h2 className="shop__swiper-title">Популярные шаблоны</h2>
                   <div className="shop__swipe-div">
                       <div>
                       <img className='shop__swiper-img' src="18.png" alt="" />
                       <p className="shop__swiper-txt">Идеален для продажи смартфонов, ноутбуков, аксессуаров и бытовой техники.</p>
                       </div>
                       <div>
                       <img className='shop__swiper-img' src="18.png" alt="" />
                       <p className="shop__swiper-txt">Модные новинки для всей семьи — повседневная, спортивная и сезонная одежда, обувь и аксессуары с доставкой на дом.</p> 
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Shop;