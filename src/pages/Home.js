import React from 'react'
import "../styles/home.css"

const Home = () => {
    return (
        <main id="home">
            <section id="hero" className='full-height flex-centered flex-column'>
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
                        <span className='subtitle'>Vote for</span>
                        <h1>Madni Ansari</h1>
                        <h3>
                            General Seceratary Candidate,
                            <br />
                            Rizvi College of Engineering
                        </h3>
                        <a className='button button-cta' target='_blank' rel="noreferrer" href="https://wa.me/+918104764605?text=I'm%20impressed%20by%20your%20qualifications%20and%20vision%20for%20our%20college.%20You%20have%20my%20vote%20for%20General%20Secretary,%20count%20me%20in.%20Best%20of%20luck!">
                            Show Your Support
                        </a>
                    </div>
                </div>
                <div className='hero-overlay'></div>

            </section>
            <section id="about-me" className='section'>
                <h2>Why Me?</h2>
                <video className='video-player' controls>
                    <source src='./videos/video.mp4' />
                </video>
                <p>
                    👋 Hey there! I'm <b>Madni Ansari</b>, an engineering student with a BIG vision for positive change in our college! 🌟 I believe in leadership and teamwork to make college unforgettable. Actively involved in clubs, fostering community. With a creative mindset and dedication, I'm set to elevate our college! 🚀
                </p>

                <p>
                    <u><i>Why vote for me?</i></u> With your support, we'll ignite innovation, ensure inclusivity, and drive progress together! As General Secretary, I'll be your megaphone! 📣 Let's create an amazing, supportive college for everyone! Together, we'll make college life unforgettable! 🎉
                </p>

                <p>
                    <b>Vote Madni Ansari</b> for a brighter college future!
                    <br />
                    <span className='hash-tag'>
                        #MadniForGenSec &nbsp;
                    </span>
                    <span className='hash-tag'>
                        #TogetherWeThrive
                    </span>
                </p>

            </section>
        </main>
    )
}

export default Home