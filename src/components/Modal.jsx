import "./modal.css";
import SimpleImageSlider from "react-simple-image-slider";
const Modal = ({ setIsOpen, name,bol }) => {
  
  const Lohni=[
    { url: "ghaziabad/Mr_Lohni/1.jpg" },
    { url: "ghaziabad/Mr_Lohni/2.jpg" },
    { url: "ghaziabad/Mr_Lohni/3.jpg" },
    { url: "ghaziabad/Mr_Lohni/4.jpg" },
    { url: "ghaziabad/Mr_Lohni/5.jpg" },
    { url: "ghaziabad/Mr_Lohni/6.jpg" },
  ]
  const Rajesh = [
    { url: "ghaziabad/Mr_Rajesh/1.jpg" },
    { url: "ghaziabad/Mr_Rajesh/2.jpg" },
    { url: "ghaziabad/Mr_Rajesh/3.jpg" },
    { url: "ghaziabad/Mr_Rajesh/4.jpg" },
    { url: "ghaziabad/Mr_Rajesh/5.jpg" },
    { url: "ghaziabad/Mr_Rajesh/6.jpg" },
    { url: "ghaziabad/Mr_Rajesh/7.jpg" },
  ]
  const Amit = [
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
  ]
const Rakesh = [
  {url:"gurugram/Dr_Rakesh_Grurgram/1.jpg"},
  {url:"gurugram/Dr_Rakesh_Grurgram/2.jpg"},
  {url:"gurugram/Dr_Rakesh_Grurgram/3.jpg"},
  {url:"gurugram/Dr_Rakesh_Grurgram/4.jpg"},
  {url:"gurugram/Dr_Rakesh_Grurgram/5.jpg"},
  {url:"gurugram/Dr_Rakesh_Grurgram/6.jpg"},
  {url:"gurugram/Dr_Rakesh_Grurgram/7.jpg"},
  {url:"gurugram/Dr_Rakesh_Grurgram/8.jpg"},
]
const Anita = [
  {url:"gurugram/Mrs_Anita_Gurgaon/1.jpg"},
  {url:"gurugram/Mrs_Anita_Gurgaon/2.jpg"},
  {url:"gurugram/Mrs_Anita_Gurgaon/3.jpg"},
  {url:"gurugram/Mrs_Anita_Gurgaon/4.jpg"},
  {url:"gurugram/Mrs_Anita_Gurgaon/5.jpg"},
  {url:"gurugram/Mrs_Anita_Gurgaon/6.jpg"},
  {url:"gurugram/Mrs_Anita_Gurgaon/7.jpg"},
  {url:"gurugram/Mrs_Anita_Gurgaon/8.jpg"},
  {url:"gurugram/Mrs_Anita_Gurgaon/9.jpg"},
  {url:"gurugram/Mrs_Anita_Gurgaon/10.jpg"},
  {url:"gurugram/Mrs_Anita_Gurgaon/11.jpg"},
]
const Welly = [
  {url:"delhi/Mr_Welly_AP/1.jpg"},
  {url:"delhi/Mr_Welly_AP/2.jpg"},
  {url:"delhi/Mr_Welly_AP/3.jpg"},
  {url:"delhi/Mr_Welly_AP/4.jpg"},
  {url:"delhi/Mr_Welly_AP/5.jpg"},
  {url:"delhi/Mr_Welly_AP/6.jpg"},
  {url:"delhi/Mr_Welly_AP/7.jpg"},
  {url:"delhi/Mr_Welly_AP/8.jpg"},
  {url:"delhi/Mr_Welly_AP/9.jpg"},
  {url:"delhi/Mr_Welly_AP/10.jpg"},
  {url:"delhi/Mr_Welly_AP/11.jpg"},
  {url:"delhi/Mr_Welly_AP/12.jpg"},
  {url:"delhi/Mr_Welly_AP/13.jpg"},
  {url:"delhi/Mr_Welly_AP/14.jpg"},
  {url:"delhi/Mr_Welly_AP/15.jpg"},
  {url:"delhi/Mr_Welly_AP/16.jpg"}
]
const Pavillion = [
  {url:"noida/Pavillion_Court_Noida/1.jpg"},
  {url:"noida/Pavillion_Court_Noida/2.jpg"},
  {url:"noida/Pavillion_Court_Noida/3.jpg"},
  {url:"noida/Pavillion_Court_Noida/4.jpg"},
  {url:"noida/Pavillion_Court_Noida/5.jpg"},
  {url:"noida/Pavillion_Court_Noida/6.jpg"},
  {url:"noida/Pavillion_Court_Noida/7.jpg"},
  {url:"noida/Pavillion_Court_Noida/8.jpg"},
  {url:"noida/Pavillion_Court_Noida/9.jpg"},
  {url:"noida/Pavillion_Court_Noida/10.jpg"},
  {url:"noida/Pavillion_Court_Noida/11.jpg"},
]
const Suresh=[
  {url:"ghaziabad/Mr_Suresh/1.jpg"},
  {url:"ghaziabad/Mr_Suresh/2.jpg"},
  {url:"ghaziabad/Mr_Suresh/3.jpg"},
  {url:"ghaziabad/Mr_Suresh/4.jpg"},
  {url:"ghaziabad/Mr_Suresh/5.jpg"},
] 
let IMAGE;
switch (name) {
  case 'Mr Lohni':
    IMAGE=Lohni;
    break;
    case 'Mr Rajesh':
      IMAGE =Rajesh;
      break;
    case 'Mrs Anita':
      IMAGE =Anita;
      break;
    case 'Mr Welly':
      IMAGE =Welly;
      break;
    case 'Mr Suresh':
      IMAGE =Suresh;
      break;
    case 'Mr Amit':
      IMAGE =Amit;
      break;
    case 'Mr Rakesh':
      IMAGE =Rakesh;
      break;
    case 'Mr Rajesh':
      IMAGE =Rajesh;
      break;
  default:
   IMAGE =Pavillion
    break;
}
let width='80vw'
let height ='80vh'
return (
  <>
      <div className="modal" onClick={() => setIsOpen(false)}>
        <div className="modal_container" onClick={(e) => e.stopPropagation()}>
          {name}'s interior images
        
          <SimpleImageSlider
            width={width}
            height={height}
            images={IMAGE}
            autoPlay={true}
            showBullets={true}
            showNavs={bol}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
