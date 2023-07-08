import React from "react";
import willisImage from "../assets/willis.jpg";
import clarenceImage from "../assets/clarence.png";
import everittImage from "../assets/everitt.png";
import brunoImage from "../assets/bruno.jpg";
import badrImage from "../assets/badr.jpg";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const people = [
  {
    name: "Jacob Willis",
    role: "Front-End Developer/React",
    imageUrl: willisImage,
    github: "https://github.com/JacobRyanWillis",
    linkedin: "https://www.linkedin.com/in/jacob-willis-a9a8a823a/"
  },
  {
    name: "Clarence Chang",
    role: "UI/UX Designer",
    imageUrl: clarenceImage,
    github: "https://github.com/hiclarence",
    linkedin: "https://www.linkedin.com/in/changclarence/"
  },
  {
    name: "Everitt Gill",
    role: "Back-end/Chatbot",
    imageUrl: everittImage,
    github: "https://github.com/EverittGill",
    linkedin: "https://www.linkedin.com/in/everitt-gill-574226a0/"
  },
  {
    name: "Bruno Rosa",
    role: "Full-Stack Developer",
    imageUrl: brunoImage,
    github: "https://github.com/barosa19",
    linkedin: "https://www.linkedin.com/in/brunoarosa/"
  },
  {
    name: "Badr Almadhi",
    role: "Back-End",
    imageUrl: badrImage,
    github: "https://github.com/BadrAlmadhi",
    linkedin: "https://www.linkedin.com/in/badr-almadhi-079107184/"
  },
];

export default function About() {
  return (
    <div className="bg-eggplant py-32 md:py-24 mt-8 md:mt-0">
      <div className="flex flex-col justify-center items-center mb-20 mx-4">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
          Meet our developers
        </h2>
        <p className="mt-6 text-xl leading-8 text-gray-400">
          These guys have worked hard to provide you this wonderful app! 
          Please show them some love and check out their work.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:px-8 lg:grid-cols-3 md:grid-cols-2">
        {people.map((person) => (
          <div
            key={person.name}
            className="bg-gray-900 bg-opcatiy-75 rounded-lg shadow-md w-full mx-auto"
          >
            <div className="p-12 h-full">
              <div className="flex items-center justify-center">
                <img
                  className="h-48 w-48 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
              </div>
              <div className="mt-6 flex flex-col justify-center items-center">
                <h3 className="text-white text-xl font-semibold leading-7 text-gray-900">
                  {person.name}
                </h3>
                <p className="text-lg mt-2 font-medium leading-6 text-gray-500">
                  {person.role}
                </p>
              </div>
              <div className="mt-6 flex justify-center space-x-6">
                <a href={person.github} className="text-white hover:text-gray-700">
                  <FaGithub className="h-7 w-7"/>
                </a>
                <a href={person.linkedin} className="text-linkedin hover:text-gray-700">
                  <FaLinkedin className="h-7 w-7 bg-white rounded"/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
