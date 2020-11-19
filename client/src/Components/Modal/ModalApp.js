import React, { useState } from "react";
import { Modal } from "./Modal";
import styled from "styled-components";

/*About the Photographer Button*/
const StyledButton = styled.button`
  min-width: 15vw;
  padding: 2vh 2vw;
  border-radius: 4px;
  border: none;
  background: black;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin-right: -80%;
  margin-bottom: 8rem;
`;

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
