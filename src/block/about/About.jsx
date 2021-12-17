import React from 'react'
import './About.css'

const About = () => {
    return (
        <section className="about">
            <img className="eli" src="img/eli.png"/>
            <img className="eli-two" src="img/eli.png"/>
            <img className="myice" src="img/myice.png"/>
            <img className="myice-two" src="img/myice.png"/>
            <div className="container">
            <div className="about-inner">
                <div className="about-left">
                    <img className="about-img" src="img/ekaterina.jpg"/>
                    <button className="about-button">Хочешь</button>
                </div>
                <div className="about-right">
                    <h3 className="about-right__name">
                      Я - Екатерина Ябанжи,<br/> автор интенсива
                    </h3>
                    <div className="about-right__items">
                        <div className="about-right__item">
                            <span className="about-number">1.</span>
                            <p className="about-content">
                                Психолог Сексолог 
                                с 12-ти летним опытом в сфере здоровья и красоты.
                            </p>
                        </div>
                        <div className="about-right__item">
                            <span className="about-number">2.</span>
                            <p className="about-content">
                               Специальности: Акушерка, детский массажист, остеопат, косметолог, телесноориентированный терапевт
                                специалист
                                 психосоматики, тета хилинга и расстановок и кресения.
                            </p>
                        </div>
                        <div className="about-right__item">
                            <span className="about-number">3.</span>
                            <p className="about-content">
                                Такой междисциплинарный подход, допускает прямой перенос методов из психологии 
                                медицины, остеопатии и других дисциплин в психологию сексуальности. 
                                Поэтому открывает широкий выбор индивидуального подхода с высокой эффективностью .
                            </p>
                        </div>
                        <div className="about-right__item">
                            <span className="about-number">4.</span>
                            <p className="about-content">
                                Выбираю не учитилей, а сами дисциплины, науки. которые помогают человеку лучше понять себя
                                Чтобы любить себя, не достаточно просто думать, что любишь. 
                                Уверена, что чем больше знаний о человеке, о строении физического и психического, тем более адекватна любовь к себе. 
                                Поэтому, постоянно обучаюсь и повышаю квалификацию, прохожу индивидуальную терапию у экспертов из разных областей. <div className=""></div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default About
