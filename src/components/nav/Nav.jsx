import React from 'react'
import "./nav.scss"

const Nav = () => {
  return (
    <div className='nav'>
        <div className="container">
            <div className="nav__box">
                <a href="#" className="nav__logo">Логотип</a>
                <ul className="nav__list">
                    <li className="nav__item"><a href="#" className="nav__link">Цены</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Этапы работы</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Популярное</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Адаптивность</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Удобство</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav