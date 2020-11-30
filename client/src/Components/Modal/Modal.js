import React, { useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from  'react-spring';

import "./modal.css"
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";


//x close icon top left
const CloseButton = styled(AiOutlineClose)`
  cursor: pointer;
  margin-left:.5vw;
  width: 7vw;
  height 7vh;
  color:white;
`;

//Not using this pop down animation but when I comment it out it breaks my code so leaving for now, no effect might come back to it
export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  //animation with use Spring for model, 250 ms duration
  const animation = useSpring({
    config: {
      //duration of fall animatiom
      duration: 550,
    }, //translates from top of screen out 100%
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

const keyPress = useCallback (e => {
  //if the escape key is pressed and the modal is open/ set show modal to false(close Modal)
  if(e.key === 'Escape' && showModal){
    setShowModal(false)
  }
}, [setShowModal, showModal])

//calling keyPress function from above
useEffect(() => {
  document.addEventListener('keydown', keyPress );
  //remove the event listener 
  return() => document.removeEventListener('keydown', keyPress)
}, [keyPress])

  return (
    <>
      {/*If show modal, then render rest of the content */}
      {showModal ? (
        //if background clicked modal closes-onClick = {closeModal}
        <div className = "Background" ref = {modalRef}>
          <animated.div style = {animation}>
          <div className = "ModalWrapper" showModal={showModal}>
            <CloseButton
                aria-label="close modal"
                onClick={() => setShowModal((prev) => !prev)}
              ></CloseButton>
              <div className = "ModalContent">
                <div className="Name">More About The Photographer: </div>
                <h4 className = "Text">
                {'\u00A0'}{'\u00A0'}{'\u00A0'}Tim Snow is a Montreal based photojournalist and photography educator. He took these images at the “final” 242 Main concert on December 3, 2016. 
              242 Main is located in the basement of Memorial Auditorium; when the building became unsafe, the city closed 242 Main and other programs. 22 bands performed at this concert to celebrate 242 Main, and Big Heavy World began the years-long advocacy that would ensure youth-led music would emerge in the space again. Find more of Tim's images at <a  className= "Link" href="http://www.timsnowphotography.com/">Tim Snow Photography</a>. 
              Tim can be contacted by email at tim@timsnowphotography.com or at 514-238-4529.
                </h4>
                
              </div>
              
          </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
