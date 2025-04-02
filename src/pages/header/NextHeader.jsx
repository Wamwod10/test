import React from 'react'
import "./nextheader.scss"

const NextHeader = () => {
  return (
    <div className='nextheader'>
      <div className="container">
        <div className="nextheader__box">
          <h1 className="nextheader__title">Создаём интернет-магазин, который продаёт!</h1>
          <p className="nextheader__txt">Запустим под ключ — от 5 дней</p>
          <p className="nextheader__text">Быстро, удобно и с гарантией результата. Всё — от дизайна до подключения оплаты и доставки.</p>
          <a href="" className="nextheader__link">Консультация</a>
        </div>
        <img src="16.png" alt="" />
      </div>
    </div>
  )
}

export default NextHeader