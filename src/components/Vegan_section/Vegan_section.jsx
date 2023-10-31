import React from 'react'
import "./vegan_section.css"
import '../../index.css'

const Vegan_section = () => {
  return (
    <div className='bg_area'>
        <div className='container_vegan'>
            <div className='row_vegan'>
                <div className='column_vegan'>
                    <div className='content_vegan'>
                        <h2>Przepisy Vege</h2>
                        <p>Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh</p>
                        <a href='#' className='button'>Zobacz więcej przepisów</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vegan_section