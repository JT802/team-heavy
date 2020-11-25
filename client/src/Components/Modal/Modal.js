import React, { useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from  'react-spring'
import "../../images/Tim-Snow.jpg"
import styled from "styled-components";
import {AiOutlineClose} from "react-icons/ai"

//styles for components
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 65vh;
  z-index:10;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
`;
//modal grid display
const ModalWrapper = styled.div`
  width: 150%;
  height: 150%;
  color: #000;
  z-index: 1;
`;

//x close icon top left
const CloseButton = styled(AiOutlineClose)`
  cursor: pointer;
  margin-left:.5vw;
  width: 7vw;
  height 7vh;
  
`;
//line height text direction
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  color: black;
`;
//modal text
const Text = styled.p`
  font-size: 1.8rem;
  color: gold;
  max-width:120%;
`;
const Name = styled.h1`
  font-size: 3.5rem;
  color: gold;
  margin-left:1vw;
  margin-top:-5vh;
`;

//Not using this pop down animation but when I comment it out it breaks my code so leaving for now, no effect might come back to it
export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef()
//animation with use Spring for model, 250 ms duration
const animation = useSpring({
    config: {
    //duration of fall animatiom
    duration: 550
    },//translates from top of screen out 100%
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
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
        <Background ref = {modalRef}>
          <animated.div style = {animation}>
          <ModalWrapper showModal={showModal}>
            <CloseButton
                aria-label="close modal"
                onClick={() => setShowModal((prev) => !prev)}
              ></CloseButton>
              <ModalContent>
                <Name>Tim Snow </Name>
                <Text>
              Tim Snow is a Montreal based photojournalist and photography educator. He took these images at the “final” 242 Main concert on December 3, 2016. 
              242 Main is located in the basement of Memorial Auditorium; when the building became unsafe, the city closed 242 Main and other programs. 22 bands performed at this concert to celebrate 242 Main, and Big Heavy World began the years-long advocacy that would ensure youth-led music would emerge in the space again. Find more of Tim's images at timsnowphotography.com. 
              Tim can be contacted by email at tim@timsnowphotography.com or at 514-238-4529.
                </Text>
              </ModalContent>
           {/* </ModalImage> */}
          </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
