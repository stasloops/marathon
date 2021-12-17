import React from 'react'
import './BlockTwo.css'

const BlockTwo = () => {
    return (
        <section className="block-two">
            <div className="container">
            <div className="block-two__inner">
                <h1 className="block-two__title">
                    Чему вы научитесь
                </h1>
                <div className="block-two__items">
                    <div className="block-two__item">
                        <img className="kissping" src="img/kissping.png"/>
                        <h6 className="block-two__item-title">
                            Решишься быть собой
                        </h6>
                        <p className="block-two__item-content">
                            Раскроешь свой потенциал через научную точку зрения
                            Например, узнаешь, что тело человека, вид сзади (ягодицы, спина и голова) повторяют очертания мужского полового органа и почему особое внимание уделяют позвоночнику
                            и многое др.
                        </p>
                    </div>
                    <div className="block-two__item">
                    <img className="kissping" src="img/kissping.png"/>
                        <h6 className="block-two__item-title">
                            Связь с телом
                        </h6>
                        <p className="block-two__item-content">
                            Остеопатическая приятная и полезная практика, для красоты и здоровья, твоей нервной системе точно понравится.
                        </p>
                    </div>
                    <div className="block-two__item">
                    <img className="kissping" src="img/kissping.png"/>
                        <h6 className="block-two__item-title">
                            Практика (расстановочные техники)
                        </h6>
                        <p className="block-two__item-content">
                           Волшебство через науку. Попробуешь нашумевшие и набирающие популярность расстановки. Поймешь, что для того, чтобы ощутить 
                           себя женщиной, нужен мужчина, а мужчине, что бы ощутить себя мужчиной, нужна она, женщина, а не мать.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default BlockTwo
