import React from "react";
import { Images } from "./Reviews";
import SimpleImageSlider from "react-simple-image-slider";
import "./projects.css";
import backBtnLight from "./icons/backArrow.svg"
import backBtnDark from "./icons/backArrowDark.svg"
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate(null)
  const goBack = ()=>{
navigate('/')
  }
  const welly = [
    { url: "delhi/Mr_Welly_AP/1.jpg" },
    { url: "delhi/Mr_Welly_AP/2.jpg" },
    { url: "delhi/Mr_Welly_AP/3.jpg" },
    { url: "delhi/Mr_Welly_AP/4.jpg" },
    { url: "delhi/Mr_Welly_AP/5.jpg" },
    { url: "delhi/Mr_Welly_AP/6.jpg" },
    { url: "delhi/Mr_Welly_AP/7.jpg" },
    { url: "delhi/Mr_Welly_AP/8.jpg" },
    { url: "delhi/Mr_Welly_AP/9.jpg" },
    { url: "delhi/Mr_Welly_AP/10.jpg" },
    { url: "delhi/Mr_Welly_AP/11.jpg" },
    { url: "delhi/Mr_Welly_AP/12.jpg" },
    { url: "delhi/Mr_Welly_AP/13.jpg" },
    { url: "delhi/Mr_Welly_AP/14.jpg" },
    { url: "delhi/Mr_Welly_AP/15.jpg" },
    { url: "delhi/Mr_Welly_AP/16.jpg" },
  ];
  const arun = [
    { url: "delhi/Mr_Arun_Delhi/1.jpg" },
    { url: "delhi/Mr_Arun_Delhi/2.jpg" },
    { url: "delhi/Mr_Arun_Delhi/3.jpg" },
    { url: "delhi/Mr_Arun_Delhi/4.jpg" },
    { url: "delhi/Mr_Arun_Delhi/5.jpg" },
    { url: "delhi/Mr_Arun_Delhi/6.jpg" },
    { url: "delhi/Mr_Arun_Delhi/7.jpg" },
    { url: "delhi/Mr_Arun_Delhi/8.jpg" },
  ];
  const neha = [
    { url: "ghaziabad/Dr_Neha/1.jpg" },
    { url: "ghaziabad/Dr_Neha/2.jpg" },
    { url: "ghaziabad/Dr_Neha/3.jpg" },
    { url: "ghaziabad/Dr_Neha/4.jpg" },
    { url: "ghaziabad/Dr_Neha/5.jpg" },
    { url: "ghaziabad/Dr_Neha/6.jpg" },
    { url: "ghaziabad/Dr_Neha/7.jpg" },
    { url: "ghaziabad/Dr_Neha/8.jpg" },
    { url: "ghaziabad/Dr_Neha/9.jpg" },
    { url: "ghaziabad/Dr_Neha/10.jpg" },
  ];
  const rajesh = [
    { url: "ghaziabad/Mr_Rajesh/1.jpg" },
    { url: "ghaziabad/Mr_Rajesh/2.jpg" },
    { url: "ghaziabad/Mr_Rajesh/3.jpg" },
    { url: "ghaziabad/Mr_Rajesh/4.jpg" },
    { url: "ghaziabad/Mr_Rajesh/5.jpg" },
    { url: "ghaziabad/Mr_Rajesh/6.jpg" },
    { url: "ghaziabad/Mr_Rajesh/7.jpg" },
  ];
  const amit = [
    { url: "ghaziabad/Mr_Amit/1.jpg" },
    { url: "ghaziabad/Mr_Amit/2.jpg" },
    { url: "ghaziabad/Mr_Amit/3.jpg" },
    { url: "ghaziabad/Mr_Amit/4.jpg" },
    { url: "ghaziabad/Mr_Amit/5.jpg" },
    { url: "ghaziabad/Mr_Amit/6.jpg" },
    { url: "ghaziabad/Mr_Amit/7.jpg" },
    { url: "ghaziabad/Mr_Amit/8.jpg" },
  ];
  const lohni = [
    { url: "ghaziabad/Mr_Lohni/1.jpg" },
    { url: "ghaziabad/Mr_Lohni/2.jpg" },
    { url: "ghaziabad/Mr_Lohni/3.jpg" },
    { url: "ghaziabad/Mr_Lohni/4.jpg" },
    { url: "ghaziabad/Mr_Lohni/5.jpg" },
    { url: "ghaziabad/Mr_Lohni/6.jpg" },
  ];
  const Malhotra = [
    { url: "ghaziabad/Mr_Malhotra/1.jpg" },
    { url: "ghaziabad/Mr_Malhotra/2.jpg" },
    { url: "ghaziabad/Mr_Malhotra/3.jpg" },
    { url: "ghaziabad/Mr_Malhotra/4.jpg" },
    { url: "ghaziabad/Mr_Malhotra/5.jpg" },
    { url: "ghaziabad/Mr_Malhotra/6.jpg" },
    { url: "ghaziabad/Mr_Malhotra/7.jpg" },
  ];
  const sanjay = [
    { url: "ghaziabad/Mr_Sanjay/1.jpg" },
    { url: "ghaziabad/Mr_Sanjay/2.jpg" },
    { url: "ghaziabad/Mr_Sanjay/3.jpg" },
    { url: "ghaziabad/Mr_Sanjay/4.jpg" },
    { url: "ghaziabad/Mr_Sanjay/5.jpg" },
    { url: "ghaziabad/Mr_Sanjay/6.jpg" },
    { url: "ghaziabad/Mr_Sanjay/7.jpg" },
    { url: "ghaziabad/Mr_Sanjay/8.jpg" },
    { url: "ghaziabad/Mr_Sanjay/9.jpg" },
    { url: "ghaziabad/Mr_Sanjay/10.jpg" },
    { url: "ghaziabad/Mr_Sanjay/11.jpg" },
    { url: "ghaziabad/Mr_Sanjay/12.jpg" },
    { url: "ghaziabad/Mr_Sanjay/13.jpg" },
  ];
  const suresh = [
    { url: "ghaziabad/Mr_Suresh/1.jpg" },
    { url: "ghaziabad/Mr_Suresh/2.jpg" },
    { url: "ghaziabad/Mr_Suresh/3.jpg" },
    { url: "ghaziabad/Mr_Suresh/4.jpg" },
    { url: "ghaziabad/Mr_Suresh/5.jpg" },
  ];
  const rakesh = [
    { url: "gurugram/Dr_Rakesh_Grurgram/1.jpg" },
    { url: "gurugram/Dr_Rakesh_Grurgram/2.jpg" },
    { url: "gurugram/Dr_Rakesh_Grurgram/3.jpg" },
    { url: "gurugram/Dr_Rakesh_Grurgram/4.jpg" },
    { url: "gurugram/Dr_Rakesh_Grurgram/5.jpg" },
    { url: "gurugram/Dr_Rakesh_Grurgram/6.jpg" },
    { url: "gurugram/Dr_Rakesh_Grurgram/7.jpg" },
    { url: "gurugram/Dr_Rakesh_Grurgram/8.jpg" },
  ];
  const deepak = [
    { url: "gurugram/Mr_Deepak_Gurugram/1.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/2.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/3.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/4.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/5.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/6.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/7.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/8.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/9.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/10.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/11.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/12.jpg" },
    { url: "gurugram/Mr_Deepak_Gurugram/13.jpg" },
  ];
  const anita = [
    { url: "gurugram/Mrs_Anita_Gurgaon/1.jpg" },
    { url: "gurugram/Mrs_Anita_Gurgaon/2.jpg" },
    { url: "gurugram/Mrs_Anita_Gurgaon/3.jpg" },
    { url: "gurugram/Mrs_Anita_Gurgaon/4.jpg" },
    { url: "gurugram/Mrs_Anita_Gurgaon/5.jpg" },
    { url: "gurugram/Mrs_Anita_Gurgaon/6.jpg" },
    { url: "gurugram/Mrs_Anita_Gurgaon/7.jpg" },
    { url: "gurugram/Mrs_Anita_Gurgaon/8.jpg" },
    { url: "gurugram/Mrs_Anita_Gurgaon/9.jpg" },
    { url: "gurugram/Mrs_Anita_Gurgaon/10.jpg" },
    { url: "gurugram/Mrs_Anita_Gurgaon/11.jpg" },
  ];
  const manoj = [
    { url: "noida/Mr_Manoj_Noida/1.jpg" },
    { url: "noida/Mr_Manoj_Noida/2.jpg" },
    { url: "noida/Mr_Manoj_Noida/3.jpg" },
    { url: "noida/Mr_Manoj_Noida/4.jpg" },
    { url: "noida/Mr_Manoj_Noida/5.jpg" },
    { url: "noida/Mr_Manoj_Noida/6.jpg" },
    { url: "noida/Mr_Manoj_Noida/7.jpg" },
    { url: "noida/Mr_Manoj_Noida/8.jpg" },
    { url: "noida/Mr_Manoj_Noida/9.jpg" },
    { url: "noida/Mr_Manoj_Noida/10.jpg" },
    { url: "noida/Mr_Manoj_Noida/11.jpg" },
    { url: "noida/Mr_Manoj_Noida/12.jpg" },
    { url: "noida/Mr_Manoj_Noida/13.jpg" },
  ];
  const amitNoida = [
    { url: "noida/Mr_Amit_Noida/1.jpg" },
    { url: "noida/Mr_Amit_Noida/2.jpg" },
    { url: "noida/Mr_Amit_Noida/3.jpg" },
    { url: "noida/Mr_Amit_Noida/4.jpg" },
    { url: "noida/Mr_Amit_Noida/5.jpg" },
    { url: "noida/Mr_Amit_Noida/6.jpg" },
    { url: "noida/Mr_Amit_Noida/7.jpg" },
    { url: "noida/Mr_Amit_Noida/8.jpg" },
    { url: "noida/Mr_Amit_Noida/9.jpg" },
    { url: "noida/Mr_Amit_Noida/10.jpg" },
    { url: "noida/Mr_Amit_Noida/11.jpg" },
    { url: "noida/Mr_Amit_Noida/12.jpg" },
    { url: "noida/Mr_Amit_Noida/13.jpg" },
    { url: "noida/Mr_Amit_Noida/14.jpg" },
  ];
  const arvind = [
    { url: "noida/Mr_Arvind_Noida/1.jpg" },
    { url: "noida/Mr_Arvind_Noida/2.jpg" },
    { url: "noida/Mr_Arvind_Noida/3.jpg" },
    { url: "noida/Mr_Arvind_Noida/4.jpg" },
    { url: "noida/Mr_Arvind_Noida/5.jpg" },
    { url: "noida/Mr_Arvind_Noida/6.jpg" },
    { url: "noida/Mr_Arvind_Noida/7.jpg" },
  ];
  const ashish = [
    { url: "noida/Mr_Ashish_Noida/1.jpg" },
    { url: "noida/Mr_Ashish_Noida/2.jpg" },
    { url: "noida/Mr_Ashish_Noida/3.jpg" },
    { url: "noida/Mr_Ashish_Noida/4.jpg" },
    { url: "noida/Mr_Ashish_Noida/5.jpg" },
    { url: "noida/Mr_Ashish_Noida/6.jpg" },
    { url: "noida/Mr_Ashish_Noida/7.jpg" },
  ];
  const manojBasoya = [
    { url: "noida/Mr_Manoj_Noida/1.jpg" },
    { url: "noida/Mr_Manoj_Noida/2.jpg" },
    { url: "noida/Mr_Manoj_Noida/3.jpg" },
    { url: "noida/Mr_Manoj_Noida/4.jpg" },
    { url: "noida/Mr_Manoj_Noida/5.jpg" },
    { url: "noida/Mr_Manoj_Noida/6.jpg" },
    { url: "noida/Mr_Manoj_Noida/7.jpg" },
    { url: "noida/Mr_Manoj_Noida/8.jpg" },
  ];
  const pavillion = [
    { url: "noida/Pavillion_Court_Noida/1.jpg" },
    { url: "noida/Pavillion_Court_Noida/2.jpg" },
    { url: "noida/Pavillion_Court_Noida/3.jpg" },
    { url: "noida/Pavillion_Court_Noida/4.jpg" },
    { url: "noida/Pavillion_Court_Noida/5.jpg" },
    { url: "noida/Pavillion_Court_Noida/6.jpg" },
    { url: "noida/Pavillion_Court_Noida/7.jpg" },
    { url: "noida/Pavillion_Court_Noida/8.jpg" },
    { url: "noida/Pavillion_Court_Noida/9.jpg" },
    { url: "noida/Pavillion_Court_Noida/10.jpg" },
    { url: "noida/Pavillion_Court_Noida/11.jpg" },
  ];
  const theme = localStorage.getItem('theme')
  return (
    <div>
      <div className="project_header">
        {
          theme==="dark"?<img src={backBtnLight} onClick={goBack} className="project_btn" alt="Back Button" />:
        <img src={backBtnDark} onClick={goBack} className="project_btn" alt="Back Button" />
        }
        <h2 className="projects_title">Our Projects-</h2>
      </div>
      <section className="project_main container">
        <div className="project_container_main">
          <ul className="project_city">
            <div className="project_card_list">
              {Images.map((val, ind) => {
                let cname = val.name;
                let IMAGE;
                switch (cname) {
                  case "Mr. Welly":
                    IMAGE = welly;
                    break;
                  case "Mr. Arun":
                    IMAGE = arun;
                    break;
                  case "Mr. Rajesh":
                    IMAGE = rajesh;
                    break;
                  case "Mr. Amit":
                    IMAGE = amit;
                    break;
                  case "Mr. Lohni":
                    IMAGE = lohni;
                    break;
                  case "Dr. Neha":
                    IMAGE = neha;
                    break;
                  case "Mr. Malhotra":
                    IMAGE = Malhotra;
                    break;
                  case "Mr. Sanjay":
                    IMAGE = sanjay;
                    break;
                  case "Mr. Suresh":
                    IMAGE = suresh;
                    break;
                  case "Dr Rakesh":
                    IMAGE = rakesh;
                    break;
                  case "Mr. Deepak":
                    IMAGE = deepak;
                    break;
                  case "Mrs Anita":
                    IMAGE = anita;
                    break;
                  case "Mr. Manoj":
                    IMAGE = manoj;
                    break;
                  case "Mr. Amit Yadav":
                    IMAGE = amitNoida;
                    break;
                  case "Mr. Arvind":
                    IMAGE = arvind;
                    break;
                  case "Mr. Ashish":
                    IMAGE = ashish;
                    break;
                  case "Mr. Manoj Basoya":
                    IMAGE = manojBasoya;
                    break;
                  default:
                    IMAGE = pavillion;
                    break;
                }
                let width = "100%";
                let height = "82vh";
                return (
                  <div key={ind} className="project_card">
                    <div className="project_card_img">
                      <SimpleImageSlider
                        style={{ backgroundSize: "cover" }}
                        width={width}
                        height={height}
                        images={IMAGE}
                        autoPlay={false}
                        showBullets={true}
                        showNavs={true}
                      />
                    </div>
                    <h2 className="porject_name_heading">
                      {val.name} - {val.city}
                    </h2>
                    <hr />
                  </div>
                );
              })}
            </div>
          </ul>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
