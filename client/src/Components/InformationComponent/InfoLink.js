import React from 'react';
import { Link } from 'react-router-dom';
import { BsInfoSquare } from "react-icons/bs";

function InfoLink() {
    //The InfoLink persists across all pages, but only navigates to the Information page.
    return (
        <Link to="/Information"><BsInfoSquare id="info-link"/></Link>
    )
}

export default InfoLink
