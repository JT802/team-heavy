import React, { useRef, useState } from "react";
import NavBar from "../NavBarComponent/NavBar";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide from "./Slide";
import "./Brentcarousel.css";
export default function BrentCarousel() {
  //save video ref to play video onclick
  const videoref = useRef();
  const [playState, setplayState] = useState(false);
  return (
    <div>
      <NavBar />
      <Carousel
        renderThumbs={(children) => {
          return children.map((child) => {
            return <img src={child.props.imageSrc} />;
          });
        }}
      >
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/baf306eeec77522da3fddba54a6764e7.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/27b404d7dd692585a0d0e63bd8580e0c.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/553da1c790670a0cd949d49e7d2ea2a9.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/4194f1a91b85f867795ae6455203d40f.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/fullsize/46a6604ded5d36dc6937b81230198543.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/4b824ef80c2daac9aead386388522906.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/c884d31a5409c32e738dcd542389ea7c.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/a3aba25c43603245d6bd8525bef7a013.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/4c9a455e1a55f5670ebb788d31b11bac.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/090062348a03c82b0ea5780dcb7091c0.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/12af8d0486c470b84cea00e88b21ca27.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/6c12f2da89c1602a7f0c61405174d193.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/505278550becb7d098a5596b9423d7e3.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/e05d9749647ddd10ad10cd8090aca0d9.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/d9cff7351d7cecbe96aba437d4482ae0.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/390e36b6b1390747b089fd69cd19e0ee.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/bd03882694b2144534bac1453ab8cb75.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/e095068916fe3e5915749c15083ae3c3.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/0007111ed3c56890fd9d56d9652d6a8b.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/8ccc22ae3cb882dde756acbe34cc8f81.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/92fedfd859e6a1b5bda2f50d60b5f6ec.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/83a7755c94af2c9fdbfbd4fff3f6de70.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/771698e7825d57fc3514acaa033d9487.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/2d62738887fa04457b05f1ee281a59d6.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/effa30d2c182fe2d67aa638f4499f913.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/f41f77100f2ad9394f097ce6db87399a.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/c5a5d65cb2c6733b136b947b2b5e1cf4.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/5a2e30dca5d31909f36ae89bb7122cfd.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/7ff465074961d37ad52461318b27d389.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/e6c95079d7c62fe63dab4cceef44d001.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/3d14660b61fb8ce237f68e8e20d4c653.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/96208ffef32c6311e7bfca9f12539a1e.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/b99e75974aad46272e57f88060138158.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/0714da4ad557b6d0660bfab25105e1ff.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/fb5f90b79a1c50984c3ab08cd7d08b28.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/8f0da1b29d0b12cc1780f5dbd3ef8fba.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/eaf6963b6e3080109b9e18871ab60fbb.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/04d22d1b0f6d48dc973caaddb4f30a9d.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/0b75b417758d4339ffbf7ebb5b793c52.mp3"
          textSrc=""
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/ce7264d6190a4f7a7018e51e0a9cbebb.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/4864b2c7d216442b38aba275948f95a7.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/37948f7b36a309fe8075a278d01618ca.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/200d63d17b1885c7044089488d80ad80.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/80da9d78e04e52fd27c0e595507562b4.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/4cf8ae94c9bf41980bdc2e5634764a06.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/5431ab90ab92c99c2c1ec969401d6add.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/3af2233f979dccaac775474ef9911533.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/ca7e8bfb16506af2df83b01adf0978fc.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/17f5567baad86578451a08c5ae8425ab.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/916585fa8c2b3e5a4fe9c583541ecc1b.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/bfdb5cb986d129d7f32379640d0f836b.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/a0c5e976d864bbcef94ef48c288bdcca.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/6863c6be4a8d490f31a6e8236275de8c.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/34a40f4284df3b46d446bca28769d939.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/2d5c7057c622b016a673c43bbd837d79.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/1079de508dbb60de0e1235c2b15a2ebb.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/0815f9766ca188afd817961a6d00d557.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/1a21c24b5506fd365fadcb423772cef2.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/5996327f3f3ffe99db62aa628b4c6e52.pdf"
        />
        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/45076b2720d064647cf2d901e06230b5.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/9e04b0eb15928388d1d648acd7cb143f.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/3d430583eb1b305cac0e90718dab1c57.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/55248bd2b590ee4799bca24b6829fb7d.pdf"
        />

        <Slide
          imageSrc="https://omeka.bigheavyworld.com/files/original/b411d3d7cdd491edc70c098f7fd64d61.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/7e0aeca7c2ec049fc13bc3b0f262bf38.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/e2189b84ac5aa8c2fb46503a15e61554.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/352dc191c44e2f1a65e7039e8f330bfa.pdf"
        />
      </Carousel>
    </div>
  );
}
