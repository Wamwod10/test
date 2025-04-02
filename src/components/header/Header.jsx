import React from 'react'
import { useState, useEffect } from 'react';
import "./header.scss"

const Header = () => {

  const [text, setText] = useState('');
  const fullText = 'Создаём интернет-магазин, который продаёт!';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText.charAt(index));
      index += 1;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='header'>
      <div className="container">
        <div className="header__box">
          <h1 className="header__title">{text}</h1>
          <a href="#" className="header__link">Консультация</a>
        </div>
        <div className="header__second-box">
          <p className="header__second-text">Быстро, удобно и с гарантией результата. Всё — от дизайна до подключения оплаты и    доставки</p>
          <img src="1.png" alt="" className="header__second-img" />
          <p className="header__second-txt">Запустим под ключ — от 5 дней</p>
        </div>
      </div>
    </div>
  )
}

export default Header