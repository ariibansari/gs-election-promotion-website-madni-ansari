import React, { useEffect, useRef, useState } from 'react'
import "../styles/home.css"
import ImageViewer from '../components/ImageViewer';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useNavigate } from 'react-router';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import letterOfInternship from "../assets/images/docs/letter-of-intership.jpeg"
import railwayInternshipCertificate from "../assets/images/docs/certificate-railway-internship.webp"
import iitBombayCertificate from "../assets/images/docs/iit-bombay.webp"
import iitBombayCeremony from "../assets/images/docs/iit-bombay-techfest.webp"
import iitKharagpurCertificate from "../assets/images/docs/iit-kharagpur.webp"
import iitKharagpurCeremony from "../assets/images/docs/iit-kharagpur-tshirt-distribution.webp"
import commitmentCertificate from "../assets/images/docs/certificate-of-commitment.webp"
import torqueCertificate from "../assets/images/docs/certificate-torque.webp"


const Home = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [selectedImgSrc, setSelectedImgSrc] = useState("")
    const [selectedImgTitle, setSelectedImgTitle] = useState("")

    const handleImageClick = (e) => {
        if (helperRef.current) {
            helperRef.current.style.display = "none"
        }
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
                            General Seceratary Candidate -
                            <br />
                            Rizvi College of Engineering,
                        </h3>
                        <h4>
                            Final year mechanical engineering
                        </h4>
                        <a
                            className='button button-cta'
                            target='_blank'
                            rel="noreferrer"

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
                <h2 >Why Me?</h2>
                <video className='video-player' controls>
                    <source src='./videos/promotion-video-compressed.mp4' />
                </video>
                <div className='profile'>
                    <img src="./images/profile-2.jpg" className='profile-picture' alt="profile" />
                    <p>
                        Madni Ansari
                        <span>ansarimadni11@gmail.com | 21yr old</span>
                    </p>
                </div>
                <p>
                    👋 Hey there! I'm Madni Ansari, an engineering student with a BIG vision for positive change in our college! 🌟 I believe in leadership and teamwork to make college unforgettable. Here are some reasons <u><i>why you should vote for me - </i></u>
                </p>

                <div className='reason'>
                    <div className='flex-centered justify-start align-end mb-1'>
                        <b><span className='highlighted'>Proven Leadership</span></b>
                    </div>
                    <div>
                        As a <b>Campus Ambassador</b> for prestigious institutes like <b>IIT Kharagpur and IIT Bombay</b>, and a private ed-tech company, I have demonstrated exceptional leadership and communication skills.
                    </div>
                </div>

                <div className='reason'>
                    <div className='flex-centered justify-start align-end mb-1 gap-1'>
                        <b><span className='highlighted'>Event Management Expertise</span></b>
                    </div>
                    <div>
                        Held a vital position in the core committee during the diploma program's college fest, also with experience as a <b>head cordinater</b> for various events in last years fest, displaying my commitment to organizing successful events.
                    </div>
                </div>

                <div className='reason'>
                    <div className='flex-centered justify-start align-end mb-1 gap-1'>
                        <b><span className='highlighted'>Creative Vision</span></b>
                    </div>
                    <div>
                        Being the <b>head of decorations</b> and sole responsibility for designing the cultural fest brochure showcases my creativity and eye for detail.
                    </div>
                </div>

                <div className='reason'>
                    <div className='flex-centered justify-start align-end mb-1 gap-1'>
                        <b><span className='highlighted'>Creative Expertise</span></b>
                    </div>
                    <div>
                        <b>Solely responsible for designing and creating brochures</b> for the cultural fest, highlighting my creativity and attention to detail.
                    </div>
                </div>

                <div className='reason'>
                    <div className='flex-centered justify-start align-end mb-1 gap-1'>
                        <b><span className='highlighted'>Empowering Others</span></b>
                    </div>
                    <div>
                        <b>Securing a government internship</b> and <b>providing the same opportunity to my mechanical junior</b> highlights my commitment to empowering fellow students.
                    </div>
                </div>

                <div className='reason'>
                    <div>
                        <b>Vote for me</b> to bring fresh ideas, efficient organization, and a passion for representing and empowering our college community! Together, let's create an exceptional college experience for all.
                    </div>
                    <br />
                    <span className='highlighted'>
                        #MadniForGenSec &nbsp;
                    </span>
                    <span className='highlighted'>
                        #VoteForMadniAnsari &nbsp;
                    </span>
                    <span className='highlighted'>
                        #TogetherWeThrive
                    </span>
                </div>

                <div className='pattern right'>
                    <img src="./images/pattern.webp" alt="pattern" />
                </div>
            </section>


            <section id="achievements" className='section pt-1'>
                <h2 >My Achievements</h2>

                <div className='achievement-container'>
                    <div className='achievement'>
                        <h4>My Internships</h4>
                        <div ref={helperRef} className='helper-container'>
                            <div src="./images/docs/letter-of-intership.jpeg" onClick={e => handleImageClick(e)} className='overlay' />
                            <img src="./images/click.gif" alt="click gif" />
                        </div>

                        <img title='Delta Thermoformers' src={letterOfInternship} alt="letter-of-intership" onClick={e => handleImageClick(e)} />
                        <img title='Central Railway Loco Workshop' src={railwayInternshipCertificate} alt="certificate-railway-internship" onClick={e => handleImageClick(e)} />
                    </div>
                </div>

                <div className='achievement-container'>
                    <div className='achievement'>
                        <h4>Campus Ambassador Certificates</h4>
                        <img title='IIT Kharagpur' src={iitKharagpurCertificate} alt="iit-kharagpur" onClick={e => handleImageClick(e)} />
                        <img title='IIT Kharagpur - Tshirt' src={iitKharagpurCeremony} alt="iit-kharagpur-tshirt-distribution" onClick={e => handleImageClick(e)} />
                        <img title='IIT Bombay' src={iitBombayCertificate} alt="iit-bombay" onClick={e => handleImageClick(e)} />
                        <p className='subtitle mt-2'>Organized a workshop on robotics in our college in association with Techfest - IIT BOMBAY</p>
                        <img title='Techfest - IIT Bombay' src={iitBombayCeremony} alt="iit-kharagpur" onClick={e => handleImageClick(e)} />
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
                                <img title='Certificate of Commitment' src={commitmentCertificate} alt="certificate-of-commitment" onClick={e => handleImageClick(e)} />
                            </div>
                        </div>
                        <div className='achievement-container last-achievement'>
                            <div className='achievement'>
                                <h4>DIPLOMA's Fest</h4>
                                <p className='subtitle'>As core committee member, I contributed to the success of my diploma's fest with creative planning and teamwork.</p>
                                <img title='Torque 2019' src={torqueCertificate} alt="certificate-torque" onClick={e => handleImageClick(e)} />
                            </div>
                        </div>
                    </>
                }

            </section>

            <section id="testimonials" className='section' style={{ marginTop: "3rem" }}>
                <div className='pattern left' style={{ marginBottom: "-3rem" }}>
                    <img src="./images/pattern.webp" alt="pattern" />
                </div>
                <h2 >Hear from others</h2>
                <div className='testimonial-container'>
                    <div className='testimonial'>
                        <div className='testimonial-header'>
                            <img src="./images/afaan-pawaskar.jpeg" className='profile-picture' alt="afaan-pawaskar profile" />
                            <div>
                                <h4>Afaan Pawaskar</h4>
                                <span>Former technical secretary</span>
                            </div>
                        </div>
                        <div className='testimonial-body'>
                            <span>" &nbsp;</span>
                            Having Madni Ansari as an active participant in our last year's technical fest was a game-changer! Their dedication and expertise were evident in every task they undertook. As a former Technical Secretary, I can confidently say that their contributions significantly elevated the success and impact of the event. Truly exceptional!
                        </div>
                    </div>

                    <hr />

                    <div className='testimonial'>
                        <div className='testimonial-header'>
                            <img src="./images/arya-pillai.jpeg" className='profile-picture' alt="arya-pillai profile" />
                            <div>
                                <h4>Arya Pillai</h4>
                                <span>Former cultural secretary</span>
                            </div>
                        </div>
                        <div className='testimonial-body'>
                            <span>" &nbsp;</span>
                            Madni Ansari was an invaluable asset to our cultural fest last year. As the former Cultural Secretary, I can confidently say that Madni Ansari brought boundless energy, creativity, and dedication to every aspect of the event. Their active participation and leadership as a volunteer and head coordinator left a lasting impact on the festival's success.
                        </div>
                    </div>

                    <hr />

                    <div className='testimonial'>
                        <div className='testimonial-header'>
                            <img src="./images/saud-shaikh.jpeg" className='profile-picture' alt="saud-shaikh profile" />
                            <div>
                                <h4>Saud Shaikh</h4>
                                <span>Ex Student Batch 2023</span>
                            </div>
                        </div>
                        <div className='testimonial-body'>
                            <span>" &nbsp;</span>
                            Madni Ansari was the driving force behind last year's festival! Their enthusiasm and dedication were infectious, motivating all of us to actively participate in every event. From organizing activities to leading coordination efforts, they made the festival an unforgettable experience. A true leader and team player!
                        </div>
                    </div>

                    <hr />
                </div>
            </section>


            <section id="final-message" className='container'>
                <h4 >
                    Together, Let's Elevate Our College Experience! 🚀 Vote Madni Ansari for General Secretary and Unlock a Brighter Future! 🌟
                </h4>
                <img src="./images/pattern-v-1.webp" className='pattern' alt="" />
            </section>

            <footer className="marquee-container">
                <div className="marquee-content">
                    #VoteForMadniAnsari
                </div>
                <div className='links'>

                </div>
                <div className='socials'>
                    <a href="https://www.instagram.com/madni.ansarii/" target='_blank' rel="noreferrer">
                        <FiInstagram />
                        Follow me on Instagram
                    </a>
                    <a href="mailto:ansarimadni11@gmail.com">
                        <AiOutlineMail />
                        Leave a Mail
                    </a>
                    <a href="tel:+918104764605">
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

            <ImageViewer src={selectedImgSrc} title={selectedImgTitle} show={show} setShow={setShow} imageViewerRef={imageViewerRef} />
        </main >
    )
}

export default Home