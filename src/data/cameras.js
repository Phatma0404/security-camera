import Img1 from "../../public/images/camera-preview.jpg";
import Img2 from "../../public/images/heroCamer.jpeg";
import Img3 from "../../public/images/about-camera-1.jpg";
import Img4 from "../../public/images/about-camera-2.jpg";
import Img5 from "../../public/images/security.jpg";
import Img6 from "../../public/images/security-2.jpg";
import Img7 from "../../public/images/security-3.jpg";
import Img8 from "../../public/images/solutions.jpg";
import Img9 from "../../public/images/heroCamera.png";

export const brands = ["Hikvision", "Dahua", "Bosch"];
export const types = ["Dome", "Bullet", "PTZ"];

export const cameras = [
  {
    id: 1,
    model: "Hikvision DS-2CD2143G2",
    brand: "Hikvision",
    type: "Dome",
    image: Img1,
    price: 320,
    specs: {
      resolution: "4 MP",
      nightVision: "30 m IR",
      viewingAngle: "98°",
      weatherProof: "IP67",
    },
    desc: "4 MP AcuSense dome with smart human/vehicle detection and built-in microphone.",
  },
  {
    id: 2,
    model: "Hikvision DS-2CD2T87G2",
    brand: "Hikvision",
    type: "Bullet",
    image: Img2,
    price: 480,
    specs: {
      resolution: "8 MP",
      nightVision: "60 m IR",
      viewingAngle: "112°",
      weatherProof: "IP67",
    },
    desc: "8 MP ColorVu bullet camera delivering full-color imaging 24/7 with strobe alarm.",
  },
  {
    id: 3,
    model: "Hikvision DS-2DE4425IW",
    brand: "Hikvision",
    type: "PTZ",
    image: Img3,
    price: 1250,
    specs: {
      resolution: "4 MP",
      nightVision: "100 m IR",
      viewingAngle: "360° rotation",
      weatherProof: "IP66",
    },
    desc: "PTZ network camera with 25× optical zoom and intelligent auto-tracking.",
  },
  {
    id: 4,
    model: "Dahua IPC-HDBW3441E",
    brand: "Dahua",
    type: "Dome",
    image: Img4,
    price: 295,
    specs: {
      resolution: "4 MP",
      nightVision: "50 m IR",
      viewingAngle: "104°",
      weatherProof: "IP67 / IK10",
    },
    desc: "4 MP WizSense dome with SMD Plus perimeter protection and vandal-resistant body.",
  },
  {
    id: 5,
    model: "Dahua IPC-HFW5849T1",
    brand: "Dahua",
    type: "Bullet",
    image: Img5,
    price: 540,
    specs: {
      resolution: "8 MP",
      nightVision: "Full Color",
      viewingAngle: "120°",
      weatherProof: "IP67",
    },
    desc: "8 MP TiOC dual-illumination bullet with active deterrence and audible warning.",
  },
  {
    id: 6,
    model: "Dahua SD49425XB",
    brand: "Dahua",
    type: "PTZ",
    image: Img6,
    price: 1390,
    specs: {
      resolution: "4 MP",
      nightVision: "100 m IR",
      viewingAngle: "360° rotation",
      weatherProof: "IP66",
    },
    desc: "Starlight PTZ with 25× zoom, AI tracking and onboard analytics for perimeter sites.",
  },
  {
    id: 7,
    model: "Bosch FLEXIDOME IP 3000i",
    brand: "Bosch",
    type: "Dome",
    image: Img7,
    price: 410,
    specs: {
      resolution: "5 MP",
      nightVision: "30 m IR",
      viewingAngle: "110°",
      weatherProof: "IP66 / IK10",
    },
    desc: "5 MP indoor/outdoor dome with intelligent video analytics built in as standard.",
  },
  {
    id: 8,
    model: "Bosch DINION IP starlight 7000",
    brand: "Bosch",
    type: "Bullet",
    image: Img8,
    price: 690,
    specs: {
      resolution: "1080p",
      nightVision: "Starlight HDR",
      viewingAngle: "Varifocal",
      weatherProof: "Indoor",
    },
    desc: "Premium box-style camera with starlight imaging and intelligent video analytics.",
  },
  {
    id: 9,
    model: "Bosch AUTODOME IP 5000i",
    brand: "Bosch",
    type: "PTZ",
    image: Img9,
    price: 1820,
    specs: {
      resolution: "2 MP",
      nightVision: "Yes",
      viewingAngle: "30× optical zoom",
      weatherProof: "IP66 / IK10",
    },
    desc: "Outdoor PTZ with rugged housing, advanced tracking and high-speed precise control.",
  },
];
