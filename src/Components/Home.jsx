import React, { useContext } from "react";
import heroimg from "../assets/home-main.svg";
import Avatar from "../assets/Avatar.webp";
import { IoIosArrowForward } from "react-icons/io";
import Type from "./Type.jsx";
import { Link } from "react-scroll";
import { AppStore } from "../Store/AppstoreProvider.jsx";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  const { lightmode } = useContext(AppStore);
  return (
    <div
      name="home"
      className={`h-auto w-full md:pt-32 pb-32
         ${
           lightmode
             ? "bg-gradient-to-br from-cyan-100 to-purple-100"
             : "bg-gradient-to-b from-black to-gray-800"
         }`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="pt-44 md:pt-24 flex flex-col justify-center items-center h-full md:items-start">
          <h1
            className={`text-4xl font-bold flex ${
              lightmode ? "text-black sm:text-4xl " : "text-white sm:text-4xl "
            } z-10 relative`} // Add relative and z-10 here
          >
            Hey There{"  "}
            <span className="wave" role="img" aria-label="Emoji">
              👋🏻
            </span>
          </h1>

          <h2
            className={`py-10 text-4xl sm:text-4xl font-bold text-center ${
              lightmode ? "text-black" : "text-white"
            }`}
          >
            I'M <span className="text-Primary">SAMPRITHA A</span>
          </h2>
          <h2 className="py-10 text-4xl sm:text-4xl font-bold text-Primary">
            <Type />
          </h2>
          <div>
            <Link
              to="secoundpart"
              smooth
              duration={500}
              className={`text-white w-fit px-6 py-3 my-2 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group font-bold `}
            >
              Read more..
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl md:mx-4 lg:mx-14 xl:mx-24 w-auto h-96 md:w-full"
            src={heroimg}
            alt="heroimg"
          />
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row secoundpart">
        <div className="pt-44 md:pt-24 flex flex-col justify-center items-center h-full md:items-start">
          <h1
            className={`text-4xl font-bold flex ml-5 ${
              lightmode ? "text-black sm:text-4xl " : "text-white sm:text-4xl "
            }`}
          >
            Brief <p className="text-Primary ml-4">Introduction</p>
          </h1>
          <div className={`mt-8 ${lightmode ? "text-black  " : "text-white "}`}>
            <p className="text-sm md:text-lg mt-10 m-10">
            As a dedicated Computer Science student with motivation, I am seeking an opportunity to apply my knowledge and build myself both personally and professionally.


              <br />
              <br />I am good to go with <b className="text-Primary">MERN</b> Stack and know 
              <b className="text-Primary">Java</b> and <b className="text-Primary"> Python.</b>
              {" "}
              <br />
              <br />
              Also, I love <b className="text-Primary">to code</b>{" "}
            </p>
          </div>
          <div>
            <img
              className=" md:mx-4 lg:mx-10 w-auto h-96 md:w-full"
              src={Avatar}
              alt="coding"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
