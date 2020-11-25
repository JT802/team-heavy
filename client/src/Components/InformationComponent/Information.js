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
          Big Heavy World, established in 1996, deploys the internet, radio, and
          other technologies to bring expanded awareness of Vermont made music.
          This includes the streaming of live concerts and the digitization of
          thousands of recorded songs with partners such as Yahoo!,
          Broadcast.com, Fox and MTV.
        </p>
        <p className="information-body">
          Big Heavy World was established in 1996 as the Internet emerged into
          public awareness, with volunteers deploying the World Wide Web and
          other technologies to bring expanded awareness to Vermont-made music.
          The organization brought youthful, tech-savvy entrepreneurial energy
          to the task of promoting Vermont-made music and created diverse
          projects to forward this goal. Information about Vermont’s music
          industry was published in online directories at www.bigheavyworld.com;
          live concerts were streamed online at the advent of streaming
          technology in partnership with Mark Cuban’s AudioNet and later
          Broadcast.com and Yahoo! Broadcast; digital audio and video recordings
          captured Vermont’s unfolding music history; thousands of songs were
          made available digitally in partnership with Liquid Audio; Vermont
          music was packaged with new portable digital music (MP3) players by
          numerous companies; and synchronization licenses were facilitated with
          broadcasters like Fox, MTV, and live televised European winter sport
          events.
        </p>
        <p className="information-body">
          As relationships with Vermont’s musicians grew in number and
          geographical scope, a public archive of Vermont recordings and an
          online music shop were established. Collaborative projects were
          conceived to bring Vermont-made music to the 3,000,000+ travelers that
          visit the state’s Visitor Information Centers or ride the Champlain
          Ferries. Collections of music by various Vermont artists were released
          on CD, marketing more than a dozen genres. The organization created
          promotional CD samplers for commercial radio stations and the Vermont
          Ski Area Marketing Association, as well as a streaming “jukebox” of
          Vermont-made music for the SkiVT web site. In 2009 Big Heavy World
          participated in the Lake Champlain Quadricentennial event with a
          two-CD compilation of music found in Vermont during its first 400
          years of Westernization.
        </p>
        <p className="information-body">
          In 2007 Big Heavy World launched a licensed community radio station,
          WOMM-LP 105.9FM ‘The Radiator,’ a successful effort to secure a
          traditional broadcast outlet for Vermont-made music. The radio station
          streams online in several formats, is heard in iTunes, and via a free
          iPhone app. Vermont music on The Radiator can be heard worldwide. Each
          week bands and musicians visit Big Heavy World to appear on the radio
          station for live interviews. They meet with volunteer writers,
          photographers and videographers. Interviews are published to the web
          site and comprise an ongoing effort to capture the historic record of
          music in Vermont. Big Heavy World produces live showcase events that
          earn press for Vermont musicians and produces a free annual, all-ages
          festival of live music, music-themed documentary films, and panels and
          workshops that foster music industry acumen among Vermont musicians.
          Big Heavy World loans a 15-passenger van to Vermont musicians who
          could not tour without this resource, made possible by Good News
          Garage.
        </p>
        <p className="information-body">
          The organization has been an aggressive and successful innovator. Its
          integrity is recognizable in an emphatically inclusive institutional
          culture and collaborative approach to securing the greatest public
          benefit with thrifty application of resources. It is universal in its
          support of Vermont-made music and since 1996 has advanced the
          interests of Vermont’s music community.
        </p>
        <p className="information-body">
          This kiosk application was a capstone project by a team of student
          developers (nicknamed "Team Heavy") from Burlington Code Academy.
        </p>
      </div>
    </div>
  );
}

export default Information;
