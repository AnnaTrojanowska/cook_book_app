import React from 'react'
import "./top_receipes.css"
import top_receipe from '../../assets/images/top_receipe.jpg'

const Top_receipes = () => {
  return (
    <div className='top_receipe'>
        <div className='container_receipe'>
            <div>
                <div className='heading'>
                    <div className='top_receipe_heading'>
                        <h3>Najlepsze przepisy</h3>
                    </div>
                </div>
            </div>

            <div className='row_receipe'>
                <div className='column'>
                    <div className='single_receipe'>
                        <img src={top_receipe}/>
                        <div className='receipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className='single_receipe'>
                        <img src={top_receipe}/>
                        <div className='receipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div><div className='column'>
                    <div className='single_receipe'>
                        <img src={top_receipe}/>
                        <div className='receipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div><div className='column'>
                    <div className='single_receipe'>
                        <img src={top_receipe}/>
                        <div className='receipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div><div className='column'>
                    <div className='single_receipe'>
                        <img src={top_receipe}/>
                        <div className='receipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div><div className='column'>
                    <div className='single_receipe'>
                        <img src={top_receipe}/>
                        <div className='receipe_content'>
                            <a href='#'>
                                <h5>Nazwa przepisu</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Top_receipes