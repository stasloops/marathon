import React from 'react'
import './BlockFour.css'

const  BlockFour = () => {
    return (
        <section className="block-four">
            <div className="container">
            <div className="block-four__inner">
                <h1 className="block-four__title">
                    Как проходит интенсив
                </h1>
                <div className="block-four__items">
                    <div className="block-four__item">
                        <div className="grid">
                            <img className="block-four__item-img world" src="img/world.png" />
                            <h6 className="block-four__item-title">
                         Онлайн участие из любой точки мира, без записи.
                         
                            </h6>
                        </div>
                    </div>
                    <div className="block-four__item">
                        <div className="grid">
                            <img className="block-four__item-img doth" src="img/doth.png" />
                            <h6 className="block-four__item-title">
                               Вебинар с необычной, интересной теорией.
                                Практика собрана , как концентрат из лучших и нашумевших техник: расстановки, остеопатия, психосоматика, тетахилинг.
                            </h6>
                        </div>
                    </div>
                    <div className="block-four__item">
                        <div className="grid">
                            <img className="block-four__item-img human" src="img/human.png" />
                            <h6 className="block-four__item-title">
                            Работать можно с парами и самосстоятельно . 
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default BlockFour
