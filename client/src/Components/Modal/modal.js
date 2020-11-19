import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import "../../images/image.png";
// import "./modal.css"
import styled from "styled-components";

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
const ModalImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;
const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20%;
  right: 2vw;
  width: 15vw;
  height: 15vh;
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
  color: #141414;
`;
const Text = styled.p`
  font-size: 25px;
  color: #fff;
`;
const Name = styled.h1`
  font-size: 45px;
  color: #fff;
`;

//Not using this pop down animation but when I comment it out it breaks my code so leaving for now, no effect might come back to it
export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  return (
    <>
      {/*If show modal, then render rest of the content */}
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            {/*import image*/}
            <ModalImage src={require("../../images/image.png")} alt="camera">
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
        </Background>
      ) : null}
    </>
  );
};
