import React, { useEffect, useRef, useState } from 'react'
import "../styles/home.css"
import ImageViewer from '../components/ImageViewer';
import { BsChevronDown, BsChevronUp, BsInstagram } from 'react-icons/bs'
import { useNavigate } from 'react-router';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import Aos from 'aos';

const Home = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedImgSrc, setSelectedImgSrc] = useState("")
    const [selectedImgTitle, setSelectedImgTitle] = useState("")

    const handleImageClick = (e) => {
        helperRef.current.style.display = "none"
        setSelectedImgSrc(e.target.getAttribute("src"))
        setSelectedImgTitle(e.target.getAttribute("title"))
        handleShow()
    }

    const [showAllAccomplishments, setShowAllAccomplishments] = useState(false)

    const navigate = useNavigate()

    const helperRef = useRef(null)
    const scrollToTopRef = useRef(null)

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
    }, [helperRef])

    useEffect(() => {
        const handleScroll = e => {
            if (scrollToTopRef.current) {
                if (window.scrollY > 730) {
                    scrollToTopRef.current.style.bottom = "4vh"
                } else {
                    scrollToTopRef.current.style.bottom = "-8vh"
                }
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <main id="home">
            <div ref={scrollToTopRef} className='scroll-more-icon scroll-to-top' onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}>
                <BsChevronUp />
            </div>

            <section id="hero" className='full-height flex-centered flex-column'>
                <div className='hero-content'>
                    <div className='reverse-flex container'>
                        <div className='calender-container'>
                            <div className='calender'>
                                <div className='date' data-aos="slide-down">
                                    <span>Aug</span>
                                    <div>
                                        2<span>nd</span>
                                    </div>
                                </div>
                                <div className='date active' data-aos="slide-down">
                                    <span>Aug</span>
                                    <div>
                                        3<span>rd</span>
                                    </div>
                                </div>
                                <div className='date' data-aos="slide-down">
                                    <span>Aug</span>
                                    <div>
                                        4<span>th</span>
                                    </div>
                                </div>
                                <div className='date' data-aos="slide-down">
                                    <span>Aug</span>
                                    <div>
                                        5<span>th</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className='subtitle' data-aos="slide-up">Vote for</span>
                        <h1 data-aos="slide-up">Madni Ansari</h1>
                        <h3 data-aos="slide-up">
                            General Seceratary Candidate,
                            <br />
                            Rizvi College of Engineering
                        </h3>
                        <a
                            className='button button-cta'
                            target='_blank'
                            rel="noreferrer"
                            data-aos="zoom-out"
                            href="https://wa.me/+918104764605?text=I'm%20impressed%20by%20your%20qualifications%20and%20vision%20for%20our%20college.%20You%20have%20my%20vote%20for%20General%20Secretary,%20count%20me%20in.%20Best%20of%20luck!"
                        >
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
                <h2 data-aos="fade-in">Why Me?</h2>
                <video data-aos="fade-in" className='video-player' controls>
                    <source src='./videos/promotion-video-compressed.mp4' />
                </video>
                <div className='profile'>
                    <img data-aos="fade-in" src="./images/profile-2.jpg" className='profile-picture' alt="profile" />
                    <p data-aos="slide-up">
                        Madni Ansari
                        <span>ansarimadni11@gmail.com | 21yr old</span>
                    </p>
                </div>
                <p data-aos="slide-up">
                    👋 Hey there! I'm Madni Ansari, an engineering student with a BIG vision for positive change in our college! 🌟 I believe in leadership and teamwork to make college unforgettable. Here are some reasons <u><i>why you should vote for me - </i></u>
                </p>

                <div className='reason'>
                    <div data-aos="slide-up" className='flex-centered justify-start align-end mb-1'>
                        <b><span className='highlighted'>Proven Leadership</span></b>
                    </div>
                    <div data-aos="fade-in">
                        As a <b>Campus Ambassador</b> for prestigious institutes like <b>IIT Kharagpur and IIT Bombay</b>, and a private ed-tech company, I have demonstrated exceptional leadership and communication skills.
                    </div>
                </div>

                <div className='reason'>
                    <div data-aos="slide-up" className='flex-centered justify-start align-end mb-1 gap-1'>
                        <b><span className='highlighted'>Event Management Expertise</span></b>
                    </div>
                    <div data-aos="fade-in">
                        Held a vital position in the core committee during the diploma program's college fest, also with experience as a <b>head cordinater</b> for various events in last years fest, displaying my commitment to organizing successful events.
                    </div>
                </div>

                <div className='reason'>
                    <div data-aos="slide-up" className='flex-centered justify-start align-end mb-1 gap-1'>
                        <b><span className='highlighted'>Creative Vision</span></b>
                    </div>
                    <div data-aos="fade-in">
                        Being the <b>head of decorations</b> and sole responsibility for designing the cultural fest brochure showcases my creativity and eye for detail.
                    </div>
                </div>

                <div className='reason'>
                    <div data-aos="slide-up" className='flex-centered justify-start align-end mb-1 gap-1'>
                        <b><span className='highlighted'>Creative Expertise</span></b>
                    </div>
                    <div data-aos="fade-in">
                        <b>Solely responsible for designing and creating brochures</b> for the cultural fest, highlighting my creativity and attention to detail.
                    </div>
                </div>

                <div className='reason'>
                    <div data-aos="slide-up" className='flex-centered justify-start align-end mb-1 gap-1'>
                        <b><span className='highlighted'>Empowering Others</span></b>
                    </div>
                    <div data-aos="fade-in">
                        <b>Securing a government internship</b> and <b>providing the same opportunity to my mechanical junior</b> highlights my commitment to empowering fellow students.
                    </div>
                </div>

                <div className='reason'>
                    <div data-aos="fade-in">
                        <b>Vote for me</b> to bring fresh ideas, efficient organization, and a passion for representing and empowering our college community! Together, let's create an exceptional college experience for all.
                    </div>
                    <br />
                    <span data-aos="fade-up" className='highlighted'>
                        #MadniForGenSec &nbsp;
                    </span>
                    <span data-aos="fade-up" className='highlighted'>
                        #VoteForMadniAnsari &nbsp;
                    </span>
                    <span data-aos="fade-up" className='highlighted'>
                        #TogetherWeThrive
                    </span>
                </div>

                <div className='pattern right'>
                    <img src="./images/pattern.webp" alt="pattern" />
                </div>
            </section>


            <section id="achievements" className='section pt-1'>
                <h2 data-aos="fade-in">My Achievements</h2>

                <div data-aos="slide-up" className='achievement-container'>
                    <div className='achievement'>
                        <h4>My Internships</h4>
                        <div ref={helperRef} className='helper-container'>
                            <div src="./images/docs/letter-of-intership.jpeg" onClick={e => handleImageClick(e)} className='overlay' />
                            <img src="./images/click.gif" alt="click gif" />
                        </div>

                        <img title='Delta Thermoformers' src="./images/docs/letter-of-intership.jpeg" alt="letter-of-intership" onClick={e => handleImageClick(e)} />
                        <img title='Central Railway Loco Workshop' src="./images/docs/certificate-railway-internship.webp" alt="certificate-railway-internship" onClick={e => handleImageClick(e)} />
                    </div>
                </div>

                <div data-aos="slide-up" className='achievement-container'>
                    <div className='achievement'>
                        <h4>Campus Ambassador Certificates</h4>
                        <img title='IIT Kharagpur' src="./images/docs/iit-kharagpur.webp" alt="iit-kharagpur" onClick={e => handleImageClick(e)} />
                        <img title='IIT Kharagpur - Tshirt' src="./images/docs/iit-kharagpur-tshirt-distribution.webp" alt="iit-kharagpur-tshirt-distribution" onClick={e => handleImageClick(e)} />
                        <img title='IIT Bombay' src="./images/docs/iit-bombay.webp" alt="iit-bombay" onClick={e => handleImageClick(e)} />
                        <p className='subtitle mt-2'>Organized a workshop on robotics in our college in association with Techfest - IIT BOMBAY</p>
                        <img title='Techfest - IIT Bombay' src="./images/docs/iit-bombay-techfest.webp" alt="iit-kharagpur" onClick={e => handleImageClick(e)} />
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
                        <div data-aos="slide-up" className='achievement-container'>
                            <div className='achievement'>
                                <h4>Certificate of Commitment</h4>
                                <img title='Certificate of Commitment' src="./images/docs/certificate-of-commitment.webp" alt="certificate-of-commitment" onClick={e => handleImageClick(e)} />
                            </div>
                        </div>
                        <div data-aos="slide-up" className='achievement-container last-achievement'>
                            <div className='achievement'>
                                <h4>DIPLOMA's Fest</h4>
                                <p className='subtitle'>As core committee member, I contributed to the success of my diploma's fest with creative planning and teamwork.</p>
                                <img title='Torque 2019' src="./images/docs/certificate-torque.webp" alt="certificate-torque" onClick={e => handleImageClick(e)} />
                            </div>
                        </div>
                    </>
                }
                <ImageViewer src={selectedImgSrc} title={selectedImgTitle} show={show} setShow={setShow} imageViewerRef={imageViewerRef} />
            </section>

            <section id="testimonials" className='section' style={{ marginTop: "3rem" }}>
                <div className='pattern left' style={{ marginBottom: "-3rem" }}>
                    <img src="./images/pattern.webp" alt="pattern" />
                </div>
                <h2 data-aos="fade-in">Hear from others</h2>
                <div className='testimonial-container'>
                    <div className='testimonial'>
                        <div className='testimonial-header'>
                            <img data-aos="fade-in" src="./images/afaan-pawaskar.jpeg" className='profile-picture' alt="afaan-pawaskar profile" />
                            <div data-aos="fade-in">
                                <h4>Afaan Pawaskar</h4>
                                <span>Former technical secretary</span>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='testimonial-body'>
                            <span>" &nbsp;</span>
                            Having Madni Ansari as an active participant in our last year's technical fest was a game-changer! Their dedication and expertise were evident in every task they undertook. As a former Technical Secretary, I can confidently say that their contributions significantly elevated the success and impact of the event. Truly exceptional!
                        </div>
                    </div>

                    <hr />

                    <div className='testimonial'>
                        <div className='testimonial-header'>
                            <img data-aos="fade-in" src="./images/arya-pillai.jpeg" className='profile-picture' alt="arya-pillai profile" />
                            <div data-aos="fade-in">
                                <h4>Arya Pillai</h4>
                                <span>Former cultural secretary</span>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='testimonial-body'>
                            <span>" &nbsp;</span>
                            Madni Ansari was an invaluable asset to our cultural fest last year. As the former Cultural Secretary, I can confidently say that Madni Ansari brought boundless energy, creativity, and dedication to every aspect of the event. Their active participation and leadership as a volunteer and head coordinator left a lasting impact on the festival's success.
                        </div>
                    </div>

                    <hr />

                    <div className='testimonial'>
                        <div className='testimonial-header'>
                            <img data-aos="fade-in" src="./images/saud-shaikh.jpeg" className='profile-picture' alt="saud-shaikh profile" />
                            <div data-aos="fade-in">
                                <h4>Saud Shaikh</h4>
                                <span>Ex Student Batch 2023</span>
                            </div>
                        </div>
                        <div data-aos="fade-up" className='testimonial-body'>
                            <span>" &nbsp;</span>
                            Madni Ansari was the driving force behind last year's festival! Their enthusiasm and dedication were infectious, motivating all of us to actively participate in every event. From organizing activities to leading coordination efforts, they made the festival an unforgettable experience. A true leader and team player!
                        </div>
                    </div>

                    <hr />
                </div>
            </section>


            <section id="final-message" className='container'>
                <h4 data-aos="fade-in">
                    Together, Let's Elevate Our College Experience! 🚀 Vote Madni Ansari for General Secretary and Unlock a Brighter Future! 🌟
                </h4>
                <img src="./images/pattern-v-1.webp" className='pattern' alt="" />
            </section>

            <footer className="marquee-container">
                <div data-aos="slide-up" className="marquee-content">
                    #VoteForMadniAnsari
                </div>
                <div className='links'>

                </div>
                <div className='socials'>
                    <a data-aos="fade-up" href="https://www.instagram.com/madni.ansarii/" target='_blank' rel="noreferrer">
                        <FiInstagram />
                        Follow me on Instagram
                    </a>
                    <a data-aos="fade-up" href="mailto:ansarimadni11@gmail.com">
                        <AiOutlineMail />
                        Leave a Mail
                    </a>
                    <a data-aos="fade-up" href="tel:+918104764605">
                        <BsTelephone />
                        Get in Touch
                    </a>
                </div>
                <div className='copy'>
                    Copyright © 2023, Madni Ansari
                    <br />
                    All Rights Reserved
                </div>
            </footer>

        </main >
    )
}

export default Home