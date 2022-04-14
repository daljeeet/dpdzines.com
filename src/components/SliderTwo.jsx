import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Modal from "./Modal";
import "./sliderTwo.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const SliderTwo = () => {
  const items = [
    { name: "Mr Lohni", city: "Ghaziabad", image: "/ghaziabad/Mr_Lohni/1.jpg" },
    {
      name: "Mr Rajesh",
      city: "Ghaziabad",
      image: "/ghaziabad/Mr_Rajesh/1.jpg",
    },
    { name: "Mr Amit", city: "Noida", image: "noida/Mr_Amit_Noida/1.jpg" },
    {
      name: "Mr Rakesh",
      city: "Gurugram",
      image: "/gurugram/Dr_Rakesh_Grurgram/1.jpg",
    },
    {
      name: "Mrs Anita",
      city: "Gurugram",
      image: "gurugram/Mrs_Anita_Gurgaon/1.jpg",
    },
    { name: "Mr Welly", city: "Delhi", image: "delhi/Mr_Welly_AP/1.jpg" },
    {
      name: "Pavillion Court",
      city: "Noida",
      image: "noida/Pavillion_Court_Noida/1.jpg",
    },
    {
      name: "Mr Suresh",
      city: "Ghaziabad",
      image: "ghaziabad/Mr_Suresh/1.jpg",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Mr Lohni");
  const handleModal = (e) => {
    setValue(e.target.name);
    setIsOpen(true);
  };
  const yeah = false;
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} name={value} bol={yeah} />}
      <div className="sliderTwo">
        <div className="carousel_wrapper">
          <Carousel
            className="carsoul"
            showArrows={false}
            breakPoints={breakPoints}
          >
            {items.map((item, index) => {
              return (
                <div key={index} className="item">
                  <img
                    src={item.image}
                    alt="photo"
                    className="sliderTwo_image"
                    width="400px"
                  />
                  <a
                    style={{ cursor: "pointer", fontWeight:"bold", marginLeft:'25px' }}
                    onClick={handleModal}
                    name={item.name}
                  >
                    {item.name},
                  </a>
                  <span>  {item.city} </span>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default SliderTwo;
