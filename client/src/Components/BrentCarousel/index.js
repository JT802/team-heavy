import React, { useRef, useState } from "react";
import NavBar from "../NavBarComponent/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide from "./Slide";
import "./Brentcarousel.css";
export default function BrentCarousel() {
  return (
    <div>
      <div className="nav">
        <NavBar />
      </div>
      <div className="interview-title">
        <h1 className="h1-title">THE PEOPLE OF 242 MAIN: INTERVIEWS</h1>
      </div>
      <Carousel
        //show correct thumbnail images
        renderThumbs={(children) => {
          return children.map((child) => {
            return (
              <img
                src={child.props.imageSrc}
                alt="interview subject thumbnail"
              />
            );
          });
        }}
        // slide components that link images, video, audio and PDf transcript files
      >
        <Slide
          name="Bobby Hackney"
          imageSrc="https://omeka.bigheavyworld.com/files/original/baf306eeec77522da3fddba54a6764e7.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/27b404d7dd692585a0d0e63bd8580e0c.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/553da1c790670a0cd949d49e7d2ea2a9.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/4194f1a91b85f867795ae6455203d40f.pdf"
        />
        <Slide
          name="Andrew Paley"
          imageSrc="https://omeka.bigheavyworld.com/files/fullsize/46a6604ded5d36dc6937b81230198543.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/4b824ef80c2daac9aead386388522906.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/c884d31a5409c32e738dcd542389ea7c.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/a3aba25c43603245d6bd8525bef7a013.pdf"
        />
        <Slide
          name="Brian LaClair"
          imageSrc="https://omeka.bigheavyworld.com/files/original/4c9a455e1a55f5670ebb788d31b11bac.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/090062348a03c82b0ea5780dcb7091c0.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/12af8d0486c470b84cea00e88b21ca27.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/6c12f2da89c1602a7f0c61405174d193.pdf"
        />
        <Slide
          name="Bruce Duncan"
          imageSrc="https://omeka.bigheavyworld.com/files/original/505278550becb7d098a5596b9423d7e3.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/e05d9749647ddd10ad10cd8090aca0d9.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/d9cff7351d7cecbe96aba437d4482ae0.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/390e36b6b1390747b089fd69cd19e0ee.pdf"
        />
        <Slide
          name="Caroline Fine"
          imageSrc="https://omeka.bigheavyworld.com/files/original/bd03882694b2144534bac1453ab8cb75.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/e095068916fe3e5915749c15083ae3c3.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/0007111ed3c56890fd9d56d9652d6a8b.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/8ccc22ae3cb882dde756acbe34cc8f81.pdf"
        />
        <Slide
          name="Chief Brandon del Pozo"
          imageSrc="https://omeka.bigheavyworld.com/files/original/92fedfd859e6a1b5bda2f50d60b5f6ec.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/83a7755c94af2c9fdbfbd4fff3f6de70.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/771698e7825d57fc3514acaa033d9487.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/2d62738887fa04457b05f1ee281a59d6.pdf"
        />
        <Slide
          name="Chris Lamotte"
          imageSrc="https://omeka.bigheavyworld.com/files/original/effa30d2c182fe2d67aa638f4499f913.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/f41f77100f2ad9394f097ce6db87399a.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/c5a5d65cb2c6733b136b947b2b5e1cf4.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/5a2e30dca5d31909f36ae89bb7122cfd.pdf"
        />
        <Slide
          name="Dan Bolles"
          imageSrc="https://omeka.bigheavyworld.com/files/original/7ff465074961d37ad52461318b27d389.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/e6c95079d7c62fe63dab4cceef44d001.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/3d14660b61fb8ce237f68e8e20d4c653.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/96208ffef32c6311e7bfca9f12539a1e.pdf"
        />
        <Slide
          name="Daryl Rabidoux"
          imageSrc="https://omeka.bigheavyworld.com/files/original/b99e75974aad46272e57f88060138158.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/0714da4ad557b6d0660bfab25105e1ff.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/fb5f90b79a1c50984c3ab08cd7d08b28.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/8f0da1b29d0b12cc1780f5dbd3ef8fba.pdf"
        />
        <Slide
          name="Diana Halvorsen"
          imageSrc="https://omeka.bigheavyworld.com/files/original/eaf6963b6e3080109b9e18871ab60fbb.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/04d22d1b0f6d48dc973caaddb4f30a9d.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/0b75b417758d4339ffbf7ebb5b793c52.mp3"
          textSrc=""
        />
        <Slide
          name="Dave Lawrence"
          imageSrc="https://omeka.bigheavyworld.com/files/original/ce7264d6190a4f7a7018e51e0a9cbebb.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/4864b2c7d216442b38aba275948f95a7.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/37948f7b36a309fe8075a278d01618ca.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/200d63d17b1885c7044089488d80ad80.pdf"
        />
        <Slide
          name="Diane Sullivan"
          imageSrc="https://omeka.bigheavyworld.com/files/original/80da9d78e04e52fd27c0e595507562b4.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/4cf8ae94c9bf41980bdc2e5634764a06.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/5431ab90ab92c99c2c1ec969401d6add.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/3af2233f979dccaac775474ef9911533.pdf"
        />
        <Slide
          name="Emily Mckern"
          imageSrc="https://omeka.bigheavyworld.com/files/original/ca7e8bfb16506af2df83b01adf0978fc.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/17f5567baad86578451a08c5ae8425ab.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/916585fa8c2b3e5a4fe9c583541ecc1b.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/bfdb5cb986d129d7f32379640d0f836b.pdf"
        />
        <Slide
          name="Eric 'Pope' Peterson"
          imageSrc="https://omeka.bigheavyworld.com/files/original/a0c5e976d864bbcef94ef48c288bdcca.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/6863c6be4a8d490f31a6e8236275de8c.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/34a40f4284df3b46d446bca28769d939.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/2d5c7057c622b016a673c43bbd837d79.pdf"
        />
        <Slide
          name="Eric Wisowaty"
          imageSrc="https://omeka.bigheavyworld.com/files/original/1079de508dbb60de0e1235c2b15a2ebb.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/0815f9766ca188afd817961a6d00d557.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/1a21c24b5506fd365fadcb423772cef2.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/5996327f3f3ffe99db62aa628b4c6e52.pdf"
        />
        <Slide
          name="Gary Lane"
          imageSrc="https://omeka.bigheavyworld.com/files/original/45076b2720d064647cf2d901e06230b5.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/9e04b0eb15928388d1d648acd7cb143f.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/3d430583eb1b305cac0e90718dab1c57.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/55248bd2b590ee4799bca24b6829fb7d.pdf"
        />

        <Slide
          name="Isaac Butcher"
          imageSrc="https://omeka.bigheavyworld.com/files/original/b411d3d7cdd491edc70c098f7fd64d61.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/7e0aeca7c2ec049fc13bc3b0f262bf38.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/e2189b84ac5aa8c2fb46503a15e61554.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/352dc191c44e2f1a65e7039e8f330bfa.pdf"
        />
        <Slide
          name="Jackson Balling"
          imageSrc="https://omeka.bigheavyworld.com/files/original/65190bb360e1cfc2fd0ae5c2cd46ac91.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/2ba0881f34033d624e9a0a6fd884a919.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/ea37f71156be97d5daa9792cb8ad6982.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/c6e544064f70796afa33b218382e1a34.pdf"
        />
         <Slide
          name="Jennifer Blair"
          imageSrc="https://omeka.bigheavyworld.com/files/original/22ad925004744ac1e2858342d32d2e0d.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/cfa452d851bffbf50c39c7808eff93ae.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/808ca2cde7caf2b8dde336a783010c97.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/8978ead464932ec5d8ce5e054f4b77ab.pdf"
        />
        <Slide
          name="Jesse Bridges"
          imageSrc="https://omeka.bigheavyworld.com/files/original/a0b24fdd975ad047ff853d9a87e6e62a.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/4a5cbd53a867dadfd1b289b382f4ee89.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/81b98b907f4d3d4857bfe7ece15ba6d9.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/6dcde99458ee4886d4d7d5884d4ed27a.pdf"
        />
         <Slide
          name="Jessica Morley"
          imageSrc="https://omeka.bigheavyworld.com/files/original/39704261f22e5a6d886d651c2b8a005f.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/ff267d5dc54e8dda3a7bee205c43cf9a.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/b8360a059b56411f0d4af160cde50016.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/7eb9ee76ef50b7b861ee14cde4bdd501.pdf"
        />
        <Slide
          name="Kecia Gaboriaullt"
          imageSrc="https://omeka.bigheavyworld.com/files/original/f56ae005e6cacbd1f3a6daebe9abf9fd.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/ca9ae965c6ac78f45c890defd942a3fa.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/0f9ecd2d10fb28e12b8487bc500691dc.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/e4520331c3986ba21cc524f9b46d3a7e.pdf"
        />
        <Slide
          name="Leif Hunneman"
          imageSrc="https://omeka.bigheavyworld.com/files/original/4afc8f9bf5a430ae87710f9ce44be54f.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/fc2119d18790202e0edfafcd31dbd2c7.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/0ae243fb634b0d1fca346a6460679eed.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/4fa189eb8aeda34bf44483de14a7c42d.pdf"
        />
        <Slide
          name="Lowell Thompson"
          imageSrc="https://omeka.bigheavyworld.com/files/original/c8e7eb1cda4f371f364fdb253695f1c1.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/7676a1b9fa59d39e688946a173083ba6.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/f567e6f4a5e76a08e99674964518ec70.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/f79be557c1b67dda71f47372f653a8d9.pdf"
        />
        <Slide
          name="Mark Redmond"
          imageSrc="https://omeka.bigheavyworld.com/files/original/edb27890fdfdf27edec435fb05054bb6.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/9b843caa91170726606bb6b37576c833.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/2ea42c2c70f3ac19004018a9bf9fa793.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/0986e280f5589a1462e4de9f955b1667.pdf"
        />
        <Slide
          name="Martha Pullen"
          imageSrc="https://omeka.bigheavyworld.com/files/original/fce62dd06e6676a14365255c271f6053.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/10dd7734b1a19ce6c153833b7ea3fed3.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/c0ca8765fe9f2e79280b5193b6372af9.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/27f77a9f7433639d3ad08e696f96a5f2.pdf"
        />
         <Slide
          name="Matt Kimball"
          imageSrc="https://omeka.bigheavyworld.com/files/original/5585f36c0b43b863662b7a3e5140e0d3.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/59565da60f75d81aad602fa8a27f05c1.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/c8180d8efe95b0df338ffb9ffdf34270.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/7d7a030dd791e8cf2d94e17c6ed907d8.pdf"
        />
        <Slide
          name="Max Gregor"
          imageSrc="https://omeka.bigheavyworld.com/files/original/fe2f7c43a01f89e14f4e3c3d1f8040e1.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/9a0534c8e978a840b35b5559734125af.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/0f1da1521126af895bf167372a76b3df.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/0460e55605686e7725f07d006e98ded7.pdf"
        />
        <Slide
          name="Mike Blair"
          imageSrc="https://omeka.bigheavyworld.com/files/original/9df56b9d8de2e2d78fc6fad0fbe2ab25.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/5bf65b36fa7549cc21ee19944a801f72.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/6d8b8c782aca95195ae50dd98f6e3711.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/7afdc624be2402970e48641a7446abdc.pdf"
        />
        <Slide
          name="Mike Cram"
          imageSrc="https://omeka.bigheavyworld.com/files/original/31107da563f48ad094c9b72d5d805e6c.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/cbac5fd3c81dd46a561bf4375ef8b3e8.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/041cdf23c2133431acafefaea0538824.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/04ca3b1d0d54ffa5ae485f8c1f4985af.pdf"
        />
        <Slide
          name="Mike Gatti"
          imageSrc="https://omeka.bigheavyworld.com/files/original/d18227a881e8a2e3709e21d375f21ba8.jpg"
          videoSrc="https://omeka.bigheavyworld.com/files/original/6bb189b6da489d5bd84024e0997e58ea.mp4"
          interviewSrc="https://omeka.bigheavyworld.com/files/original/697ec451fafcf78b874189cae48d807c.mp3"
          textSrc="https://omeka.bigheavyworld.com/files/original/d77ae384130c321dffffc19642214c4b.pdf"
        />

      </Carousel>
    </div>
  );
}
