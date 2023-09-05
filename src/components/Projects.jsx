// import ReactIcon from "../assets/images/React-icon";
// import Nodeicon from "../assets/images/Node-js-icon";
// import MongoIcon from "../assets/images/Mongodbicon";
import {
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoDjango,
  BiLogoPython,
  BiLogoHtml5,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiSass } from "react-icons/di";
import { SiExpress, SiSelenium } from "react-icons/si";
function redirectto() {
  window.location.href = "/";
}
export default function Projects() {
  return (
    <>
      <div className="w-full pr-1 text-white p-7 bg-stone-900 font-space">
        <p className="text-lg pt-9">Hey these are the apps I created ,</p>

        <div className="w-3/4 pt-12 text-5xl font-light leading-12 ">
          <a
            href="https://github.com/JoJosuk/SpinRent"
            className="underline underline-offset-12 hover:text-amber-600 text-amber-500 ease-linear hover:scale-105"
          >
            Spinrent
          </a>
          <p className="pt-8 text-4xl leading-12">
            Web application to rent vehicles, making it easy and convenient for
            users to find and book the perfect vehicle for their needs.
          </p>

          <div className="flex w-12 gap-2 pt-3">
            <h1 className="flex gap-4 ">
              <BiLogoReact /> <BiLogoNodejs /> <BiLogoMongodb /> <SiExpress />
            </h1>
          </div>
        </div>
        <div className="w-3/4 pt-12 text-5xl font-light leading-12 ">
          <a
            href="https://github.com/JoJosuk/Web-scraping-Project"
            className="underline underline-offset-12 hover:text-amber-600 text-amber-500 ease-linear hover:scale-105"
          >
            Radon
          </a>
          <p className="pt-8 text-4xl leading-12">
            An Online Store Webscraper used to compare prices of a product from
            3 different &nbsp; E-commerce Websites - Flipkart, Amazon and
            Myntra.
          </p>
          <h1 className="flex gap-4 pt-3 ">
            <BiLogoDjango /> <BiLogoPython /> <SiSelenium />
          </h1>
        </div>
        <div className="w-3/4 pt-12 text-5xl font-light leading-12 ">
          <a
            href="https://github.com/JoJosuk/Network-Monitoring-System"
            className="underline underline-offset-12 hover:text-amber-600 text-amber-500 ease-linear hover:scale-105"
          >
            Network Monitoring System
          </a>
          <p className="pt-8 text-4xl leading-12">
            Robust network monitoring system that continuously monitored the
            accessibility of ports and IP addresses between Jakarta and
            Surabaya, using custom Tkinter elements for enhanced user
            experience.
          </p>

          <h1 className="flex gap-4 pt-3 ">
            <BiLogoPython />
          </h1>
        </div>
        <div className="w-3/4 pt-12 text-5xl font-light leading-12 ">
          <a
            href="https://github.com/JoJosuk/Tito-anime"
            className="underline underline-offset-12 hover:text-amber-600 text-amber-500 ease-linear hover:scale-105"
          >
            Tito Anime
          </a>
          <p className="pt-8 text-4xl leading-12">
            A React web app that enables users to search for anime and open them
            in GogoAnime by utilizing the GogoAnime API to retrieve information
            on anime titles, episodes, and videos.
          </p>

          <h1 className="flex gap-4 pt-3 ">
            <BiLogoReact />
          </h1>
        </div>
        <div className="w-3/4 pt-12 text-5xl font-light leading-12 ">
          <a
            href="https://github.com/JoJosuk/AISA_Website"
            className="underline underline-offset-12 hover:text-amber-600 text-amber-500 ease-linear hover:scale-105"
          >
            AISA club website
          </a>
          <p className="pt-8 text-4xl leading-12">
            The AISA Space Club website is an interactive and engaging online
            platform developed for the space enthusiasts. Built using HTML, CSS,
            TypeScript, and Three.js, this website serves as a hub of
            information, resources, and activities related to space exploration.
          </p>

          <h1 className="flex gap-4 pt-3">
            <BiLogoHtml5 />
            <DiSass />
            <BiLogoTypescript />
          </h1>
        </div>
        <div
          onClick={() => redirectto()}
          className="fixed bottom-0 right-0 pb-3 pr-3 cursor-pointer"
        >
          <div
            className="flex items-center justify-center w-20 h-20 text-lg font-semibold text-black ease-linear origin-center rotate-45 rounded-full hover:rotate-0 hover:scale-110 hover:bg-amber-600 bg-amber-500 font-code"
            style={{ right: 0 }}
          >
            Home
          </div>
        </div>
      </div>
    </>
  );
}
