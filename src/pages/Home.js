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
                        <a className='button button-cta' href="https://wa.me/+918104764605?text=I'm%20impressed%20by%20your%20qualifications%20and%20vision%20for%20our%20college.%20You%20have%20my%20vote%20for%20General%20Secretary,%20count%20me%20in.%20Best%20of%20luck!">Vote for Me</a>
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