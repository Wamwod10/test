import React from 'react'
import "./templetes.scss";
import "../templete/templete.scss";

const Templetes = () => {

    const cards = [
        { id: 1, title: "Косметика и уход", subtext: "Косметика и средства по уходу за кожей, волосами и телом — для вашей красоты и уверенности каждый день.", img: "3.png" },
        { id: 2, title: "Косметика и уход", subtext: "Косметика и средства по уходу за кожей, волосами и телом — для вашей красоты и уверенности каждый день.", img: "3.png" }
    ]

    return (
        <div className='templetes'>
            <div className="container">
                <div className="templete__box templetes__box">
                    <p className="templetes__txt">Популярные шаблоны</p>
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

export default Templetes