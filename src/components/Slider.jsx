import React, { useState } from "react";
import Modal from "./Modal";
import "./slider.css";

const Slider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('')
  const handleModal = (e) => {
    setValue(e.target.name)
    setIsOpen(true);
    
  };
  const yeah = true
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} name={value} bol={yeah} />}
      <div className="wgh-slider">
        <input
          className="wgh-slider-target"
          type="radio"
          id="slide-1"
          name="slider"
        />
        <input
          className="wgh-slider-target"
          type="radio"
          id="slide-2"
          name="slider"
        />
        <input
          className="wgh-slider-target"
          type="radio"
          id="slide-3"
          name="slider"
        />
        <input
          className="wgh-slider-target"
          type="radio"
          id="slide-4"
          name="slider"
          defaultChecked
        />
        <input
          className="wgh-slider-target"
          type="radio"
          id="slide-5"
          name="slider"
        />
        <input
          className="wgh-slider-target"
          type="radio"
          id="slide-6"
          name="slider"
        />
        <input
          className="wgh-slider-target"
          type="radio"
          id="slide-7"
          name="slider"
        />
        <input
          className="wgh-slider-target"
          type="radio"
          id="slide-8"
          name="slider"
        />

        {/* <div> */}
        <div className="wgh-slider__viewport">
          <div className="wgh-slider__viewbox">
            <div className="wgh-slider__container">
              <div className="wgh-slider-item mr_lohni">
                <div className="wgh-slider-item__inner">
                  <figure className="wgh-slider-item-figure">
                    <img
                      className="discover__img wgh-slider-item-figure__image"
                      src="ghaziabad\Mr_Lohni\1.jpg"
                      alt="Mr Lohni's interior design"
                    />
                    <figcaption className="wgh-slider-item-figure__caption">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={handleModal}
                        name="Mr Lohni"
                      >
                        Mr.Lohni
                      </a>
                      <span>Ghaziabad</span>
                    </figcaption>
                  </figure>
                  <label
                    className="wgh-slider-item__trigger"
                    htmlFor="slide-1"
                    title="Show product 1"
                  ></label>
                </div>
              </div>
              <div className="wgh-slider-item mr_rajsh">
                <div className="wgh-slider-item__inner">
                  <figure className="wgh-slider-item-figure">
                    <img
                      className="discover__img wgh-slider-item-figure__image"
                      src="ghaziabad\Mr_Rajesh\1.jpg"
                      alt="Mr Rajesh's interior design"
                    />
                    <figcaption className="wgh-slider-item-figure__caption">
                      <a
                        onClick={handleModal}
                        name="Mr Rajesh"
                        style={{ cursor: "pointer" }}
                      >
                        Mr.Rajesh
                      </a>
                      <span>Ghaziabad</span>
                    </figcaption>
                  </figure>
                  <label
                    className="wgh-slider-item__trigger"
                    htmlFor="slide-2"
                    title="Show product 2"
                  ></label>
                </div>
              </div>
              <div className="wgh-slider-item mr_amit">
                <div className="wgh-slider-item__inner">
                  <figure className="wgh-slider-item-figure">
                    <img
                      className="discover__img wgh-slider-item-figure__image"
                      src="noida\Mr_Amit_Noida\1.jpg"
                      alt="Mr Amit's interior design"
                    />
                    <figcaption className="wgh-slider-item-figure__caption">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={handleModal}
                        name="Mr Amit"
                      >
                        Mr Amit
                      </a>
                      <span>Noida</span>
                    </figcaption>
                  </figure>
                  <label
                    className="wgh-slider-item__trigger"
                    htmlFor="slide-3"
                    title="Show product 3"
                  ></label>
                </div>
              </div>
              <div className="wgh-slider-item">
                <div className="wgh-slider-item__inner">
                  <figure className="wgh-slider-item-figure">
                    <img
                      className="discover__img wgh-slider-item-figure__image"
                      src="gurugram\Dr_Rakesh_Grurgram\1.jpg"
                      alt="Dr Rakesh's interior design"
                    />
                    <figcaption className="wgh-slider-item-figure__caption">
                      <a
                        style={{ cursor: "pointer" }}
                        name="Mr Rakesh"
                        onClick={handleModal}
                      >
                        Dr. Rakesh
                      </a>
                      <span>Gurugram</span>
                    </figcaption>
                  </figure>
                  <label
                    className="wgh-slider-item__trigger"
                    htmlFor="slide-4"
                    title="Show product 4"
                  ></label>
                </div>
              </div>
              <div className="wgh-slider-item">
                <div className="wgh-slider-item__inner">
                  <figure className="wgh-slider-item-figure">
                    <img
                      className="discover__img wgh-slider-item-figure__image"
                      src="gurugram\Mrs_Anita_Gurgaon\1.jpg"
                      alt="Mrs Anita's interior design"
                    />
                    <figcaption className="wgh-slider-item-figure__caption">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={handleModal}
                        name="Mrs Anita"
                      >
                        Mrs Anita
                      </a>
                      <span>Grurgram</span>
                    </figcaption>
                  </figure>
                  <label
                    className="wgh-slider-item__trigger"
                    htmlFor="slide-5"
                    title="Show product 4"
                  ></label>
                </div>
              </div>
              <div className="wgh-slider-item">
                <div className="wgh-slider-item__inner">
                  <figure className="wgh-slider-item-figure">
                    <img
                      className="discover__img wgh-slider-item-figure__image"
                      src="delhi\Mr_Welly_AP\1.jpg"
                      alt="Mr Welly's interior design"
                    />
                    <figcaption className="wgh-slider-item-figure__caption">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={handleModal}
                        name="Mr Welly"
                      >
                        Mr Welly
                      </a>
                      <span>Delhi</span>
                    </figcaption>
                  </figure>
                  <label
                    className="wgh-slider-item__trigger"
                    htmlFor="slide-6"
                    title="Show product 4"
                  ></label>
                </div>
              </div>
              <div className="wgh-slider-item pavillionCourt">
                <div className="wgh-slider-item__inner">
                  <figure className="wgh-slider-item-figure">
                    <img
                      className="discover__img wgh-slider-item-figure__image"
                      src="noida\Pavillion_Court_Noida\1.jpg"
                      alt="Pavillion court photo"
                    />
                    <figcaption className="wgh-slider-item-figure__caption">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={handleModal}
                        name="Pavillion_Court"
                      >
                        Pavillion Court
                      </a>
                      <span>Noida</span>
                    </figcaption>
                  </figure>
                  <label
                    className="wgh-slider-item__trigger"
                    htmlFor="slide-7"
                    title="Show product 4"
                  ></label>
                </div>
              </div>
              <div className="wgh-slider-item mr_suresh">
                <div className="wgh-slider-item__inner">
                  <figure className="wgh-slider-item-figure">
                    <img
                      className="discover__img wgh-slider-item-figure__image"
                      src="ghaziabad\Mr_Suresh\1.jpg"
                      alt="Mr Suresh's interior design"
                    />
                    <figcaption className="wgh-slider-item-figure__caption">
                      <a style={{ cursor: "pointer" }} name='Mr Suresh' onClick={handleModal}>
                        Mr Suresh
                      </a>
                      <span>Ghaziabad</span>
                    </figcaption>
                  </figure>
                  <label
                    className="wgh-slider-item__trigger"
                    htmlFor="slide-8"
                    title="Show product 4"
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Slider;
