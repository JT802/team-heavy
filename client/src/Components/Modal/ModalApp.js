import React, { useState } from "react";
import { Modal } from "./Modal";
import styled from "styled-components";

/*About the Photographer Button*/
const StyledButton = styled.button`
font-family: 'Oswald', sans-serif;
  min-width: 15vw;
  padding: 2vh 2vw;
  border-radius: 4px;
  border: none;
  background: black;
  color: gold;
  font-size: 2rem;
  cursor: pointer;
  margin-left:70vw;
  margin-bottom: 5vh;
`;
//Modal open and close function using state
//About the photographer is a button that holds the modal, on click runs openModal function, openModal toggles setShowModal and showModal 
export default function ModalApp() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <StyledButton onClick={openModal}>About the Photographer</StyledButton>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
