import React from "react";
import {
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-600 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-5 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1  text-gray-500">
          © 2023 Bagus Sastrawan.<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://github.com/bagassastrawan"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer  text-gray-500"
              size={30}
            />
          </a>
          <a
            href="https://youtube.com/@bagass.8079"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer  text-gray-500"
              size={30}
            />
          </a>
          <a
            href="https://instagram.com/bagas.sastrawan?igshid=MzNlNGNkZWQ4Mg=="
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer  text-gray-500"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
