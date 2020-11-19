import React, { useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from  'react-spring'
import "../../images/Tim-Snow.jpg"
import styled from "styled-components";
import {AiOutlineClose} from "react-icons/ai"

//styles for components
const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
`;
//modal grid display
const ModalWrapper = styled.div`
  width: 50%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  background: white;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 100;
  border-radius: 10px;
  margin-left: 65%;
`;
//not importing
const ModalImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  
`;
//x close icon top right
const CloseButton = styled(AiOutlineClose)`
  cursor: pointer;
  position: absolute;
  top: 1.5vh;
  right: 1vw;
  width:2vw;
  height: 2vh;
  padding: 0;
  z-index: 10;
`;
//line height text direction
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: black;
`;
//modal text
const Text = styled.p`
  font-size: 25px;
  color: black;
  margin-left:9vw;
  min-width:20vw;
`;
const Name = styled.h1`
  font-size: 45px;
  color: black;
  margin-left:10vw;
`;

//Not using this pop down animation but when I comment it out it breaks my code so leaving for now, no effect might come back to it
export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef()
//animation with use Spring for model, 250 ms duration
const animation = useSpring({
    config: {
        duration: 350
    },//translates from top of screen out 100%
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
});

//if a click is performed outside of the modal wrapper it closes modal
//currently not responding
const closeModal = e => {
  if(modalRef.current === e.target) {
    setShowModal(false)
  }
}

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
        //if background clicked modal closes
        <Background ref = {modalRef} onClick = {closeModal}>
          <animated.div style = {animation}>
          <ModalWrapper showModal={showModal}>
                 {/*import image*/}
            <ModalImage src= "../../images/Tim-Snow.jpg" alt="camera">
              <ModalContent>
                <Name>Tim Snow </Name>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean blandit orci ac lacinia luctus. Etiam sed nisi non
                  tellus tempor porta. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Aenean blandit orci ac lacinia luctus. Etiam
                  sed nisi non tellus tempor porta.
                </Text>
                <button> Contact</button>
              </ModalContent>
              {/*Come back to close button*/}
              <CloseButton
                aria-label="close modal"
                onClick={() => setShowModal((prev) => !prev)}
              ></CloseButton>
           </ModalImage>
          </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
