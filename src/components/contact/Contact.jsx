import React from 'react'
import "./contact.scss";

const Contact = () => {
  return (
    <div className='contact'>
        <div className="container">
            <div className="contact__box">
                <div className="contact__box-div">
                    <h2 className="contact__title">Форма обратной связи</h2>
                    <input type="text" className='contact__input' placeholder='ФИО'/>
                    <input type="text" className='contact__input' placeholder='|+7 03'/>
                    <a href="#" className="contact__link">Консультация</a>
                </div> 
                <img src="8.png" alt="" /> 
            </div>
        </div>
    </div>
  )
}

export default Contact