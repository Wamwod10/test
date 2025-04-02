import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__box">
                <h2 className="footer__title">Делаем сайты <br/> <span>по-настоящему эффективными</span></h2>
                <p className="footer__txt">Мы работаем в сфере создания и продвижения сайтов с 2008 года. За это время у нас сотни реализованных проектов и благодарности от клиентов, которые смогли вместе с нами вывести свой бизнес на новый уровень</p>
                <img src="24.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer