import React from 'react'
import "./templete.scss";

const Templete = () => {

    const cards = [
        { id: 1, title: "Электроника", subtext: "Идеален для продажи смартфонов, ноутбуков, аксессуаров и бытовой техники.", img: "3.png" },
        { id: 2, title: "Одежда и обувь", subtext: "Модные новинки для всей семьи — повседневная, спортивная и сезонная одежда, обувь и аксессуары с доставкой на дом.", img: "3.png" },
        { id: 3, title: "Товары для дома", subtext: "Уют, стиль и комфорт — всё для обустройства вашего дома: мебель, текстиль, освещение и декор в одном магазине.", img: "3.png" },
        { id: 4, title: "Косметика", subtext: "Косметика и средства по уходу за кожей, волосами и телом — для вашей красоты и уверенности каждый день.", img: "3.png" }
    ]

    return (
        <div className='templete'>
            <div className="container">
                <div className="templete__box">
                    <p className="templete__txt">Популярные шаблоны</p>
                    <p className="templete__text">Выберите свой интернет магазин</p>
                </div>
                <div className="templete__card">
                    {cards.map(card => (
                        <div key={card.id} data-id={card.id}>
                            <div className="templete__box-div">
                                <div>
                                    <h2 className="templete__title">{card.title}</h2>
                                    <p className="templete__card-txt">{card.subtext}</p>
                                </div>
                                <img src={card.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Templete