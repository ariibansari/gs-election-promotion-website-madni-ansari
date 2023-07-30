import React, { useEffect, useRef, useState } from 'react'
import "../styles/home.css"
import ImageViewer from '../components/ImageViewer';
import { BsChevronDown, BsInstagram } from 'react-icons/bs'
import { useNavigate } from 'react-router';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';

const Home = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedImgSrc, setSelectedImgSrc] = useState("")

    const handleImageClick = (e) => {
        helperRef.current.style.display = "none"
        setSelectedImgSrc(e.target.getAttribute("src"))
        handleShow()
    }

    const [showAllAccomplishments, setShowAllAccomplishments] = useState(false)

    const navigate = useNavigate()

    const helperRef = useRef(null)

    const imageViewerRef = useRef(null)
    useClickOutside(imageViewerRef)

    function useClickOutside(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    handleClose()
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '100px',
            threshold: 1, // Adjust the threshold as per your requirement (0.8 means 80% visibility)
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Perform the desired action when reaching near the end of the div
                    setTimeout(() => {
                        helperRef.current.style.display = "none"
                    }, 8000)
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        if (helperRef.current) {
            observer.observe(helperRef.current);
        }

        return () => {
            if (helperRef.current) {
                observer.unobserve(helperRef.current);
            }
        };
    }, [helperRef]);


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
                <div className='scroll-more-icon' onClick={() => document.getElementById("about-me").scrollIntoView({ behavior: "smooth" })}>
                    <BsChevronDown />
                </div>
            </section>


            <section id="about-me" className='section'>
                <h2>Why Me?</h2>
                <video className='video-player' controls>
                    <source src='./videos/video.mp4' />
                </video>
                <div className='profile'>
                    <img src="./images/temp/profile.jpg" className='profile-picture' alt="profile" />
                    <p>
                        Madni Ansari
                        <span>madni@gmail.com | 21yr Old</span>
                    </p>
                </div>
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
                <div className='pattern right'>
                    <img src="./images/pattern.webp" alt="pattern" />
                </div>
            </section>


            <section id="achievements" className='section'>
                <h2>My Achievements</h2>
                <div className='achievement-container'>
                    <div className='achievement'>
                        <h4>Internship at Delta Thermoformers</h4>
                        <div ref={helperRef} className='helper-container'>
                            <div src="./images/temp/letter-of-intership.jpeg" onClick={e => handleImageClick(e)} className='overlay' />
                            <img src="./images/click.gif" alt="click gif" />
                        </div>
                        <img src="./images/temp/letter-of-intership.jpeg" alt="certificate of commitment" onClick={e => handleImageClick(e)} />
                        <img src="./images/temp/certificate-internship.jpeg" alt="certificate of commitment" onClick={e => handleImageClick(e)} />
                    </div>
                </div>
                <div className='achievement-container'>
                    <div className='achievement'>
                        <h4>Tech Fest IIT Bombay</h4>
                        <img src="./images/temp/certificate-iit-bombay.jpeg" alt="certificate of achievement" onClick={e => handleImageClick(e)} />
                    </div>
                </div>
                <div className='achievement-container'>
                    <div className='achievement'>
                        <h4>Certificate of Achievement</h4>
                        <img src="./images/temp/certificate-achievement.jpeg" alt="certificate of achievement" onClick={e => handleImageClick(e)} />
                    </div>
                </div>
                {!showAllAccomplishments
                    &&
                    <div className='show-more'>
                        <button className='button button-ghost' onClick={() => setShowAllAccomplishments(true)}>Show More</button>
                    </div>
                }
                {showAllAccomplishments
                    &&
                    <>
                        <div className='achievement-container'>
                            <div className='achievement'>
                                <h4>Certificate of Commitment</h4>
                                <img src="./images/temp/certificate-commitment.jpeg" alt="certificate of commitment" onClick={e => handleImageClick(e)} />
                            </div>
                        </div>
                        <div className='achievement-container last-achievement'>
                            <div className='achievement'>
                                <h4>Certificate of Appreciation</h4>
                                <img src="./images/temp/certificate-appreciation.jpeg" alt="certificate of commitment" onClick={e => handleImageClick(e)} />
                            </div>
                        </div>
                    </>
                }
                <ImageViewer src={selectedImgSrc} show={show} setShow={setShow} imageViewerRef={imageViewerRef} />
            </section>

            <section id="testimonials" className='section' style={{ marginTop: "3rem" }}>
                <div className='pattern left' style={{ marginBottom: "-3rem" }}>
                    <img src="./images/pattern.webp" alt="pattern" />
                </div>
                <h2>Hear from others</h2>
                <div className='testimonial-container'>
                    <div className='testimonial'>
                        <div className='testimonial-header'>
                            <img src="./images/temp/profile-3.jpeg" className='profile-picture' alt="profile" />
                            <div>
                                <h4>Sarah Johnson</h4>
                                <span>College Club President</span>
                            </div>
                        </div>
                        <div className='testimonial-body'>
                            <span>" &nbsp;</span>
                            Madni is an exceptional student leader with a genuine passion for making a difference. I've seen them initiate and lead various community-driven initiatives that have positively impacted our college.
                        </div>
                    </div>

                    <hr />

                    <div className='testimonial'>
                        <div className='testimonial-header'>
                            <img src="./images/temp/profile-2.jpg" className='profile-picture' alt="profile" />
                            <div>
                                <h4>Sam Oltmen</h4>
                                <span>CEO, OpenAI</span>
                            </div>
                        </div>
                        <div className='testimonial-body'>
                            <span>" &nbsp;</span>
                            I had the pleasure of working with Madni during a challenging project at our college. Their dedication and leadership skills were truly commendable. Madni's ability to bring the team together and navigate complex situations made the project a huge success.
                        </div>
                    </div>

                    <hr />

                    <div className='testimonial'>
                        <div className='testimonial-header'>
                            <img src="./images/temp/profile.jpg" className='profile-picture' alt="profile" />
                            <div>
                                <h4>Jane Smith</h4>
                                <span>Faculty Member</span>
                            </div>
                        </div>
                        <div className='testimonial-body'>
                            <span>" &nbsp;</span>
                            Madni's enthusiasm and innovative ideas are truly inspiring. As part of the same club, I've seen them work tirelessly to enhance the student experience. Their ability to think outside the box and bring fresh perspectives to the table is unmatched. Madni's leadership qualities are exactly what our college needs. Count me in as a proud supporter!
                        </div>
                    </div>

                    <hr />
                </div>
            </section>


            <section id="final-message" className='container'>
                <h4>
                    Together, Let's Elevate Our College Experience! 🚀 Vote Madni Ansari for General Secretary and Unlock a Brighter Future! 🌟
                </h4>
                <img src="./images/pattern-v-1.webp" className='pattern' alt="" />
            </section>

            <div class="marquee-container">
                <div class="marquee-content">
                    #MadniForGenSec
                </div>
                <div className='socials'>
                    <a href="https://www.instagram.com/madni.ansarii/" target='_blank' rel="noreferrer">
                        <FiInstagram />
                    </a>
                    <a href="mailto:ansarimadni11@gmail.com">
                        <AiOutlineMail />
                    </a>
                    <a href="tel:+918104764605">
                        <BsTelephone />
                    </a>
                </div>
                <div className='copy'>
                    Copyright © 2023 All Rights Reserved
                </div>
            </div>

        </main >
    )
}

export default Home