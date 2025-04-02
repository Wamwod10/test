import React from 'react'
import "./rule.scss";

const Rule = () => {
    return (
        <div className='rule'>
            <div className="container">
                <h2 className="rule__title">Этапы создания сайта до первых клиентов</h2>
                <div className="rule__box">
                    <div className="rule__box-card">
                        <h2 className="rule__card-title"><span className='rule__span'>1</span> Вы оформляете заявку</h2>
                        <p className="rule__txt">Обудим вашу задачу, поможем выбрать лучшее готовое решение для быстрого запуска</p> 
                    </div>
                    <div className="rule__box-card">
                        <h2 className="rule__card-title"><span className='rule__span'>2</span> Мы заполним и запустим ваш сайт</h2>
                        <p className="rule__txt">У него будет современный дизайн, свой адрес в интернетет, наполнение и все необходимые функциональные возможности</p> 
                    </div>
                    <div className="rule__box-card">
                        <h2 className="rule__card-title"><span className='rule__span'>3</span>Ваш сайт появится в Яндекс и Google</h2>
                        <p className="rule__txt">Вы начнёте получать заказы с сайта и приумножите свои доходы</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rule