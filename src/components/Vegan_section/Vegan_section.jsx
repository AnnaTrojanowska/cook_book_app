import React from 'react'
import "./vegan_section.css"
import '../../index.css'
import { Link } from 'react-router-dom';


const Vegan_section = () => {
  return (
    <div className='bg_area'>
        <div className='container_vegan'>
            <div className='row_vegan'>
                <div className='column_vegan'>
                    <div className='content_vegan'>
                        <h2>Przepisy Wegańskie</h2>
                        <p>Kuchnia wegetariańska charakteryzuje się różnorodnością i kreatywnością w wykorzystaniu warzyw, zbóż, strączków i owoców. Dania wegetariańskie często są bogate w składniki odżywcze, oferując pełnowartościowe białko, witaminy i minerały. Wegetariańskie przepisy eksplorują szeroką paletę smaków i tekstur, wykorzystując techniki kulinarne z różnych kultur, aby stworzyć satysfakcjonujące i smakowite posiłki, od bogatych curry po lekkie sałatki i kreatywne dania z pieca.</p>
                        <Link to='/vegan'><a href='#' className='button'>Zobacz więcej przepisów</a></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vegan_section