import React from 'react'
import './Main.css'

const Main = () =>{
    return (<>
       <img className="main-background" src="img/17 1.jpg" />
      <section className="main">
        <div className="container">
          <div className="main-inner">
            <div className="main-left">
                <div className="main-left__content">
                  <h4 className="main-title__one">
                    Бесплатный трансформационный интенсив
                  </h4>
                  <h4 className="main-data">
                      Проходит 
                     18-19 декабрь
                  </h4>
                  <h1 className="main-title__two">
                    Путь к мечте
                  </h1>
                  <h3 className="main-title__three">
                    Такой информации, а точнее точки зрения на все,  вроде бы привычное, ты вряд-ли где услышишь.<div className=""></div>Время идет, жизнь меняется, и взгляд на роль женщины в мире так же стал другим. 
                    Неизменными остались только установки и их нужно менять.
                  </h3>
                  <a target="_blank" href="https://instagram.com/e.k.yabanzhi?utm_medium=copy_link">
                    <button className="main-button">Хочешь</button>
                  </a>
                </div>
            </div>
            <div className="main-right">
                <img className="main-img" src="img/image0.jpeg" />
            </div>
          </div>
          </div>
      </section>
   </> )
}

export default Main; 
 