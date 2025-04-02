import React from 'react'
import Contacts from '../contacts/Contacts'
import Footer from '../footer/Footer'
import NextHeader from '../header/NextHeader'
import NextPrice from '../price/NextPrice'
import Resp from '../resp/Resp'
import Shop from '../shop/Shop'
import Shops from '../shops/Shops'
import Step from '../step/Step'
import { useNavigate } from "react-router-dom";
import "./nav.scss"

const Nav = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/"); 
    };

    return (
        <div className='main'>
            <div className='nav'>
                <div className="container">
                    <div className="nav__box">
                        <a href="" onClick={handleNavigate} className="nav__logo">Логотип</a>
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
            <NextHeader/>
            <NextPrice/>
            <Shop/>
            <Step/>
            <Shops/>
            <Resp/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default Nav