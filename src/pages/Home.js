import React from 'react'
import "../styles/home.css"

const Home = () => {
    return (
        <section id="home">
            <div id="hero" className='full-height flex-centered flex-column'>
                <div className='hero-content'>
                    <div className='reverse-flex container'>
                        <div className='calender-container'>
                            <div className='calender'>
                                <div className='date'>
                                    <span>Aug</span>
                                    <div>
                                        2<span>nd</span>
                                    </div>
                                </div>
                                <div className='date active'>
                                    <span>Aug</span>
                                    <div>
                                        3<span>rd</span>
                                    </div>
                                </div>
                                <div className='date'>
                                    <span>Aug</span>
                                    <div>
                                        4<span>th</span>
                                    </div>
                                </div>
                                <div className='date'>
                                    <span>Aug</span>
                                    <div>
                                        5<span>th</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1>Madni Ansari</h1>
                        <h2>
                            General Seceratary Candidate,
                            <br />
                            Rizvi College of Engineering
                        </h2>
                        <button className='button button-cta'>Vote for Me</button>
                    </div>
                </div>
                <div className='hero-overlay'></div>

            </div>
            <div className='full-height flex-centered flex-column'>

            </div>
        </section>
    )
}

export default Home