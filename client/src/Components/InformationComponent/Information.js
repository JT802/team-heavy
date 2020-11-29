import React from "react";
import "./Info.css";
import NavBar from "../NavBarComponent/NavBar";

function Information() {
  return (
    <div>
      <NavBar />
      <div className="information-page">
        <p id="information-title">About Big Heavy World</p>
        {/* The text below is sourced from the BIg Heavy World website. */}
        <p className="information-body">
          Big Heavy World is an independent nonprofit music development office
          working to archive and promote the original music of Vermont. With a
          crew of volunteers it publishes information about Vermont’s music
          industry, archives thousands of Vermont-made recordings, photographs
          and artifacts, and operates 105.9FM, a radio station highlighting the
          region’s creative community. Visit bigheavyworld.com for more
          information.
        </p>
        <p className="information-body">
          This kiosk application was a capstone project by a team of student
          developers (nicknamed "Team Heavy") from Burlington Code Academy.
          Founded in 2017 by Benny Boas (CEO) and Alex Horner (COO), Burlington
          Code Academy was born out of a shared vision: to create an accessible
          technology school that always gives students a return on their
          investment. The school has since earned a reputation as a leading
          center for career transformation and technology education. BCA's award
          winning education programs emphasize teamwork, career-readiness and
          the importance of collaborative learning.
        </p>
        <p className="information-body">
          The members of "Team Heavy" are Brendan Devine, Dakota Faye, Brent
          Miller, and Jonathan Tresch. Team Heavy employed the MERN (MongoDB,
          Express, ReactJS, NodeJS) stack to build this project. It should be
          noted that this application uses the Omeka database, used by museums
          and libraries, in place of MongoDB. Big Heavy World maintains an
          archive of over 5,000 items via Omeka from Vermont's music history.
        </p>
      </div>
    </div>
  );
}

export default Information;
