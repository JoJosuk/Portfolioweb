import ReactIcon from "../assets/images/React-icon";
import Nodeicon from "../assets/images/Node-js-icon";
import MongoIcon from "../assets/images/Mongodbicon";
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
            className="underline underline-offset-12"
          >
            Spinrent
          </a>
          <p className="pt-5 text-4xl leading-12">
            Web application to rent vehicles, making it easy and convenient for
            users to find and book the perfect vehicle for their needs.
          </p>

          <div className="flex items-center gap-4 pt-3">
            <div className="w-20">
              <ReactIcon />
            </div>
            <div className="w-20">
              <Nodeicon />
            </div>
            <div className="w-20">
              <MongoIcon />
            </div>
          </div>
        </div>
        <div className="w-3/4 pt-12 text-5xl font-light leading-12 ">
          <a
            href="https://github.com/JoJosuk/Web-scraping-Project"
            className="underline underline-offset-12"
          >
            Radon
          </a>
          <p className="pt-5 text-4xl leading-12">
            An Online Store Webscraper used to compare prices of a product from
            3 different &nbsp; E-commerce Websites - Flipkart, Amazon and
            Myntra.
          </p>

          <div className="flex w-12 gap-2 pt-3">
            <img
              src="\src\assets\images\django-svgrepo-com.svg"
              alt="idk how"
            />
            <img src="src\assets\images\python-svgrepo-com.svg" alt="idk how" />
            <img
              src="src\assets\images\selenium-svgrepo-com (1).svg"
              alt="idk how"
            />
          </div>
        </div>
        <div className="w-3/4 pt-12 text-5xl font-light leading-12 ">
          <a
            href="https://github.com/JoJosuk/Network-Monitoring-System"
            className="underline underline-offset-12"
          >
            Network Monitoring System
          </a>
          <p className="pt-5 text-4xl leading-12">
            Robust network monitoring system that continuously monitored the
            accessibility of ports and IP addresses between Jakarta and
            Surabaya, using custom Tkinter elements for enhanced user
            experience.
          </p>

          <div className="flex w-12 gap-2 pt-3">
            <img src="src\assets\images\python-svgrepo-com.svg" alt="idk how" />
          </div>
        </div>
        <div className="w-3/4 pt-12 text-5xl font-light leading-12 ">
          <a
            href="https://github.com/JoJosuk/Tito-anime"
            className="underline underline-offset-12"
          >
            Tito Anime
          </a>
          <p className="pt-5 text-4xl leading-12">
            A React web app that enables users to search for anime and open them
            in GogoAnime by utilizing the GogoAnime API to retrieve information
            on anime titles, episodes, and videos.
          </p>

          <div className="flex w-12 gap-2 pt-3">
            <img src="src\assets\images\react-icons.svg" alt="idk how" />
          </div>
        </div>
        <div className="w-3/4 pt-12 text-5xl font-light leading-12 ">
          <a
            href="https://github.com/JoJosuk/AISA_Website"
            className="underline underline-offset-12"
          >
            AISA club website
          </a>
          <p className="pt-5 text-4xl leading-12">
            The AISA Space Club website is an interactive and engaging online
            platform developed for the space enthusiasts. Built using HTML, CSS,
            JavaScript, and Three.js, this website serves as a hub of
            information, resources, and activities related to space exploration.
          </p>

          <div className="flex w-12 gap-2 pt-3">
            <img src="src\assets\images\react-icons.svg" alt="idk how" />
            <img src="src\assets\images\sass-svgrepo-com.svg" alt="idk how" />
            <img src="src\assets\images\threejs.svg" alt="" />
          </div>
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
