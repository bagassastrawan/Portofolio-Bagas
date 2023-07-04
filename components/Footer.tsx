import React from "react";
import {
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-900 border-0"></hr>
      <div className="mx-auto p-5 flex flex-col text-center text-neutral-10">
        <div className="flex flex-row items-center justify-center space-x-1  text-gray-900 font-bold">
          Made by Bagus Sastrawan, using Tailwind
          <a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            id="button-github"
            href="https://github.com/bagassastrawan"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer  text-gray-900"
              size={30}
            />
          </a>
          <a
            id="button-youtube"
            href="https://youtube.com/@bagass.8079"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer  text-gray-900"
              size={30}
            />
          </a>
          <a
            id="button-instagram"
            href="https://instagram.com/bagas.sastrawan?igshid=MzNlNGNkZWQ4Mg=="
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer  text-gray-900"
              size={30}
            />
          </a>
          <a
            id="button-whastapp"
            href="https://wa.me/+6285792565901?"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineWhatsApp
              className="hover:-translate-y-1 transition-transform cursor-pointer  text-gray-900"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
