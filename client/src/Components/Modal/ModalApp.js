import React, { useState } from "react";
import { Modal } from "./Modal";
import "./modal.css"


//Modal open and close function using state
//About the photographer is a button that holds the modal, on click runs openModal function, openModal toggles setShowModal and showModal 
export default function ModalApp() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <button className="StyledButton" onClick={openModal}>ABOUT THE PHOTOGRAPHER</button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
