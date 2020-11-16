import React, { useState} from 'react';




export default function ModalApp() {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    };

return (
<div className= "Container">
    <button onClick={openModal} className = "StyledButton">Hello</button>
    <ModalApp showModal={showModal} setShowModal = {setShowModal}/>
</div>

)

}