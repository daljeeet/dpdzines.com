import React, { useState, useEffect } from "react";
import arrow from "./icons/arrow.svg";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Review from "./Reviews";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import SliderTwo from "./SliderTwo";

const Main = () => {
  const [review, setReview] = useState({
    clientName: "",
    description: "",
  });
  const [random, setRandom] = useState(1);
  useEffect(() => {
    setInterval(() => {
      let i = Math.round(Math.random() * 14);
      setRandom(i);
    }, 6000);
  }, []);
  const valChanged = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
    console.log(review.description);
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(review);
    if (review.clientName === "" && review.description === "") {
      alert("please enter some value");
    } else {
      alert("thanks, your feedback will posted after review");
    }
    review.clientName = "";
    review.description = "";
  };
 
  const navigate = useNavigate(null);
  const exploreBtn = () => {
    navigate("/projects");
  };
  const handleContact =()=>{
    navigate('./contact')
  }
  const [scrlBtn, setScrlBtn] = useState("scrollup");

  return (
    <>
    <Navbar setScrlBtn={setScrlBtn} />
      <main className="main">
        {/* <!--==================== HOME ====================--> */}
        <section className="home" id="home">
          <img
            src={`/selected/homebg/${random}.jpg`}
            alt="home image"
            className="home__img"
          />
          <div className="home__container container grid">
            <div className="home__data">
              <span className="home__data-subtitle">
                Discover your Imagination
              </span>
              <h1 className="home__data-title">
                Explore The Best <br />
                <b>
                  <div>
                    <Typewriter
                      options={{
                        strings: ["Designs", "Architecture", "Renovation"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </b>
              </h1>
            </div>
          </div>
          <h2 className="home_heading section__title">Hello & Welcome</h2>
          <div className="about__container container grid">
            <div className="about__data">
              <p className="about__description home_para">
                DpdzineS, We are Interior Designing and Decoration firm serves
              in multiple sectors. <br /> We are specialized in Interior
                Design and services. We at DpdzineS are known for ability to
                provide innovative solutions that cater to your
                requirements, tastes and budget. Our interior designers
                prepares custom tailored packages and provides entire project
                management support from procurement and budget management to
                design and execution. We servs with our experience and expertise in unique innovative ideas which leds you to experience a new dimension of your Imagination
              </p>
              <button onClick={exploreBtn} className="button">
                Explore . .
              </button>
            </div>
            <div className="about__img">
              <div className="about__img-overlay">
                <img
                  src="/selected/befaf/1.jpg"
                  alt="home image one"
                  className="about__img-one"
                />
              </div>
              <div className="about__img-overlay">
                <img
                  src="/selected/befaf/2.jpg"
                  alt="home image two"
                  className="about__img-two"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <!--==================== DISCOVER ====================--> */}
        <section className="discover section" id="discover">
          <h2 className="section__title">
            Discover the most <br /> <b> attractive Designs</b>
          </h2>
          <div className="discover__container swiper-container container">
            <Slider />
          </div>
          <div className="swiper-container-two container">
            <SliderTwo/>
          </div>
        </section>

        {/* <!--==================== ABOUT ====================--> */}
        <section className="about section active_link" id="about">
          <div className="about__container about_box container grid">
            <div className="about__img">
              <div className="about__img-overlay">
                <img
                  src="/selected/befaf/4.jpg"
                  alt="aboutImageTwo"
                  className="about__img-two"
                />
              </div>
              <div className="about__img-overlay">
                <img
                  src="/selected/befaf/3.jpg"
                  alt="aboutImageOne"
                  className="about__img-one"
                />
              </div>
            </div>
            <div className="about__data">
              <h2 className="section__title about__title">About Us</h2>
              <p className="about__description about_para">
                We, at Dpdzines are an Interior Designing and Decoration service provider.
                We serves our client in multiple sectors such as innovative and decorative designs.
                since Design is the most important entity in every interior or renovation work. We at Dpdsgin, not only makes the design perfect but also consider the client's requirements. <br />
                We at Dpdzines plan projects steadily and carefully to diliver it in time and budget
               we, at dpdzines  prefer smart execution over traditional ways. This not only helps in time-saving but also done the work with perfection. <br /> Our 
               <b> Mission & Vision </b> Every project is big one for us, we don't consider big budget as big vision. Our mission is to provide our client with the best services and satisfaction
              </p>
              <button onClick={handleContact}  className="button">
                More
              </button>
            </div>
          </div>
        </section>

        {/* <!--==================== EXPERIENCE ====================--> */}
        <section className="experience section" id="experience">
          <h2 className="section__title">
            With Our Experience <br /> We Will Serve You
          </h2>

          <div className="experience__container container grid">
            <div className="grid experience__content">
              <div className="experience__data">
                <h2 className="experience__number">8+</h2>
                <span className="experience__description">
                  Year <br /> Experience
                </span>
              </div>

              <div className="experience__data">
                <h2 className="experience__number">100+</h2>
                <span className="experience__description">
                  Happy <br /> Clients
                </span>
              </div>

              <div className="experience__data">
                <h2 className="experience__number">100+</h2>
                <span className="experience__description">
                  Finished <br /> Projects
                </span>
              </div>
            </div>

            <div className="experience__img grid">
              <div className="experience__overlay">
                <img
                  src="/selected/slider/1.jpg"
                  alt="heloiadf"
                  className="experience__img-one exp_one"
                />
              </div>
              <div className="experience__overlay">
                <img
                  src="/selected/slider/4.jpg"
                  alt="hasdifjoajdsf"
                  className="experience__img-two exp_two"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <!--==================== PLACES ====================--> */}

        {/* <!--==================== SUBSCRIBE ====================--> */}
        <section className="subscribe section">
          <div>
            <h2 className="section__title subscribe__title">
              Our Satisfied <br /> Customers
            </h2>
          </div>
          <div className="subscribe__bg">
            <div className="subscribe__container container">
              <div className="happyClients">
                {Review.map((value, index) => {
                  return (
                    <div className="subscribe__description" key={index}>
                      <div className="subsBox">
                        <p className="review_desc">"{value.desc}"</p>
                        <p className="review_name">{value.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="subscribe_box">
                <h3 className="subscribe_heading">Share your Experence</h3>
                <div className="subscribe_form"></div>
                <form onSubmit={handleForm} className="subscribe__form">
                  <div className="subscribe_form_input">
                    <input
                      type="email"
                      value={review.clientName}
                      name="clientName"
                      onChange={valChanged}
                      placeholder="Enter your email"
                      className="subscribe__input"
                    />
                    <textarea
                      type="text"
                      value={review.description}
                      onChange={valChanged}
                      name="description"
                      placeholder="your Experience with us"
                      className="subscribe__input sub_textarea"
                    />
                  </div>
                  <button type="submit" className="button sub_button">
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
      <a href="#" className={scrlBtn} id="scroll-up">
        <img src={arrow} className="scrollup__icon" width="18px" alt="arrow" />
      </a>
    </>
  );
};

export default Main;
