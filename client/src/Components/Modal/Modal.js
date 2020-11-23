import React, { useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from  'react-spring'
import "../../images/Tim-Snow.jpg"
import styled from "styled-components";
import {AiOutlineClose} from "react-icons/ai"

//styles for components
const Background = styled.div`
  width: 100%;
  height: 65vh;
  z-index:10;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
`;
//modal grid display
const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  background: white;
  color: #000;
  z-index: 1;
  border-radius: 10px;
`;
//not importing

//x close icon top left
const CloseButton = styled(AiOutlineClose)`
  cursor: pointer;
  width: 5vw;
  height 5vh;
  
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
  font-size: 25px;
  color: black;
  max-width:65%;
`;
const Name = styled.h1`
  font-size: 45px;
  color: black;
  margin-left:5vw;
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
// const closeModal = e => {
//   if(modalRef.current === e.target) {
//     setShowModal(false)
//   }
// }

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
                 {/*import image*/}
            {/* <ModalImage src= "../../images/Tim-Snow.jpg" alt="camera"> */}
              <ModalContent>
              <CloseButton
                aria-label="close modal"
                onClick={() => setShowModal((prev) => !prev)}
              ></CloseButton>
                <Name>Tim Snow </Name>
                <Text>
                Tim Snow is a Montreal based photojournalist and photography educator. He took these images at the “final” 242 Main concert on December 3, 2016. 242 Main is located in the basement of Memorial Auditorium; when the building became unsafe, the city closed 242 Main and other programs. 22 bands performed at this concert to celebrate 242 Main, and Big Heavy World began the years-long advocacy that would ensure youth-led music would emerge in the space again. Find more of Tim's images at timsnowphotography.com. Tim can be contacted by email at tim@timsnowphotography.com or at 514-238-4529.
                </Text>
                <button> Contact</button>
              </ModalContent>
           {/* </ModalImage> */}
          </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
