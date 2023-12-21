import React, { useState, useEffect } from 'react'
import './help.css'
import home from '../../assets/images/gif/home.gif'
import recipes from '../../assets/images/gif/recipes.gif'
import vege from '../../assets/images/gif/vege.gif'
import recipe_details from '../../assets/images/gif/recipe_details.gif'
import meal_planner from '../../assets/images/gif/meal_planner.gif'

const Help = () => {
  return (<>
    <div className="help-component">
            <h1>Jak korzystać z serwisu</h1>

            <section className="text-image-section">
                <div className="text">
                    <h2>Strona główna</h2>
                    <p>Na stronie głównej serwisu - w jego głównym miejscu, znajduje się slider z przyciskiem, który kieruje do wyboru przepisów z konkretnych kuchni. Poniżej znajdują się 2 przepisy - na najlepsze włoskie śniadanie oraz obiad. Następnie wyświetlone zostają najlepsze przepisy - według bazy Spoonacular. Na końcu znajduje się sekcja wegańska z przyciskiem kierującym do najlepszych wegańskich przepisów. </p>
                </div>
                <div className="image">
                    <img src={home} alt="GIF strony głównej" />
                </div>
            </section>

            <section className="image-text-section">
                <div className="image">
                    <img src={recipes} alt="GIF przepisów" />
                </div>
                <div className="text">
                    <h2>Wybór kuchni</h2>
                    <p>Aby przejść do widoku wyboru kuchni należy kliknąć przycisk znajdujący się na sliderze lub "PRZEPISY" w menu na górze storny. Przechodząc do widoku wyboru kuchni wyświetlonych zostaje 6 opcji. Każda kuchnia posiada krótki opis. Po kliknięciu przycisku, znajdującego się pod opisem następuje przekierowanie do przepisów z wybranej kuchni. W menu, po kliknięciu strzałki obok "PRZEPISY" rozwija się lista dostępnych kuchni. Po kliknięicu w konkretną opcję zostajemy również przekierowani do przepisów z danej kuchni. </p>                
                </div>
            </section>
            <section className="text-image-section">
                <div className="text">
                    <h2>Wyświetlenie szczegółów przepisu</h2>
                    <p>Przy każdym z dań znajduje się przycisk. Po jego kliknięciu następuje przekierowanie do szczegółów przepisu. Na stronie głównej, w sekcji z najlepszymi przepisami, aby zostać przekierowanym do szczegółów, należy kliknąć w nazwę przepisu. Szczegóły składają się z nazwy dania, któtkiego opisu, czasu przygotowania, ilości porcji, instrukcji, potrzebnych składników, informacjach dietetycznych oraz informacja o winie pasującym po danej potrawy.   </p>
                </div>
                <div className="image">
                    <img src={recipe_details} alt="GIF szczegółów przepisu" />
                </div>
            </section>
            <section className="image-text-section">
                <div className="image">
                    <img src={vege} alt="GIF przepisów" />
                </div>
                <div className="text">
                    <h2>Przepisy wegańskie</h2>
                    <p>Aby przejść do przepisów wegańskich należy kliknąć przycisk, znajdujący się w sekcji wegańskiej na stronie głównej lub przycisk "VEGE" w menu na górze strony. Po kliknięciu następuje przekierowanie do strony, na której znajduje się 9 najlepszych przepisów wegańskich.</p>                
                </div>
            </section>
            <section className="text-image-section">
                <div className="text">
                    <h2>Planer posiłków</h2>
                    <p>Aby przejść do sekcji planowania posiłków należy być zalogowanym użytkownikiem oraz kliknąć przycisk "PLANOWANIE POSIŁKÓW" znajdujący się w menu na górze strony. Po kliknięciu następuje przekierowanie na stronę, na której zostają wyświetlone 3 główne posiłki na kazdy dzień tygodnia. Pod nazwami przepisów znajdują się informacje o ilości kalorii, białka, tłuszczu i węglowodanów na każdy z dni. Aby przejść w szczegóły przepisu należy kliknąć w jego nazwę.</p>
                </div>
                <div className="image">
                    <img src={meal_planner} alt="GIF strony głównej" />
                </div>
            </section>
            
        </div>
        </>
  )
}

export default Help