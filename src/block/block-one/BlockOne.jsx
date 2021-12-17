import React from 'react'
import './BlockOne.css'

const BlockOne = () =>{
    return (
        <section className="block-one">
            <div className="container">
            <div className="block-one__inner">
                <h1 className="block-one__title">
                    Для кого:<br/> 
                </h1>
                <div className="block-one__items">
                    <div className="block-one__item">
                        <img className="block-one__item-img" src="img/pngwi.com.png" />
                        <h6 className="block-one__item-title">
                            
                           Знаешь, как важно состояние для реализации целей и понимаешь, что этот энергетический заряд напрямую связан со здоровьем и внутренним балансом. 
                
                        </h6>
                    </div>
                    <div className="block-one__item">
                        <img className="block-one__item-img" src="img/pngwing.com.png" />
                        <h6 className="block-one__item-title">
                           Принимаешь свое тело и заботишься о нем, как о самом дорогом, что у тебя есть.
                        </h6>
                    </div>
                    <div className="block-one__item">
                        <img className="block-one__item-img" src="img/pngwin.com.png" />
                        <h6 className="block-one__item-title">
                        К своим желаниям, мечтам подходишь, как к королеве, потому что знаешь, что в них твой огонек, твоя сексуальность.
                        </h6>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default BlockOne
