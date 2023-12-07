import React, { useState, useEffect } from 'react'
import './help.css'

const Help = () => {
  return (<>
    <div className="help-component">
            <h1>Jak korzystać z serwisu</h1>

            <section className="text-image-section">
                <div className="text">
                    <h2>Strona główna</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed non veritatis vitae tempore numquam rerum ratione itaque ipsum quidem, explicabo esse amet sit at fuga, accusamus cumque in atque.</p>
                </div>
                <div className="image">
                    <img src="path_to_your_image.jpg" alt="GIF strony głównej" />
                </div>
            </section>

            <section className="image-text-section">
                <div className="image">
                    <img src="path_to_your_second_image.jpg" alt="GIF przepisów" />
                </div>
                <div className="text">
                    <h2>Wybór kuchni</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed non veritatis vitae tempore numquam rerum ratione itaque ipsum quidem, explicabo esse amet sit at fuga, accusamus cumque in atque.</p>                
                </div>
            </section>
            <section className="text-image-section">
                <div className="text">
                    <h2>Wyświetlenie szczegółów przepisu</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed non veritatis vitae tempore numquam rerum ratione itaque ipsum quidem, explicabo esse amet sit at fuga, accusamus cumque in atque.</p>
                </div>
                <div className="image">
                    <img src="path_to_your_image.jpg" alt="GIF strony głównej" />
                </div>
            </section>
            <section className="image-text-section">
                <div className="image">
                    <img src="path_to_your_second_image.jpg" alt="GIF przepisów" />
                </div>
                <div className="text">
                    <h2>Przepisy wegańskie</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed non veritatis vitae tempore numquam rerum ratione itaque ipsum quidem, explicabo esse amet sit at fuga, accusamus cumque in atque.</p>                
                </div>
            </section>
            <section className="text-image-section">
                <div className="text">
                    <h2>Planer posiłków</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed non veritatis vitae tempore numquam rerum ratione itaque ipsum quidem, explicabo esse amet sit at fuga, accusamus cumque in atque.</p>
                </div>
                <div className="image">
                    <img src="path_to_your_image.jpg" alt="GIF strony głównej" />
                </div>
            </section>
            <section className="image-text-section">
                <div className="image">
                    <img src="path_to_your_second_image.jpg" alt="GIF przepisów" />
                </div>
                <div className="text">
                    <h2>Zapisywanie ulubionych przepisów</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et sed non veritatis vitae tempore numquam rerum ratione itaque ipsum quidem, explicabo esse amet sit at fuga, accusamus cumque in atque.</p>                
                </div>
            </section>
        </div>
        </>
  )
}

export default Help