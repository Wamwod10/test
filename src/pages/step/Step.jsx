import React from 'react'
import "./step.scss"

const Step = () => {
  return (
    <div className='step'>
        <div className="container">
            <h2 className="step__title">Этапы создания сайта до первых клиентов</h2>
            <div className="step__box">
                <div className="step__box-div">
                    <p className="step__box-numb">1</p>
                    <h3 className="step__box-title">Вы оформляете заявку</h3>
                    <p className="step__box-text">Обсудим вашу задачу, поможем выбрать лучшее готовое решение для быстрого запуска</p>
                </div>
                <div className="step__box-div">
                    <p className="step__box-numb">2</p>
                    <h3 className="step__box-title">Мы заполним и запустим ваш сайт</h3>
                    <p className="step__box-text">У него будет современный дизайн, свой адрес в интернете, наполнение и все необходимые функциональные возможности</p>
                </div>
                <div className="step__box-div">
                    <p className="step__box-numb">3</p>
                    <h3 className="step__box-title">Ваш сайт появится в Яндекс и Google</h3>
                    <p className="step__box-text">Вы начнете получать заказы с сайта и приумножите свои доходы</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step