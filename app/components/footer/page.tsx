import React from "react";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="h-50 p-4 border-t-1 border-white">
        <div className="flex flex-row items-start">
          <h1 className="text-white font-bold">Luksona's Portfolio</h1>
        </div>
        <div className="flex flex-col gap-3 items-start mt-5">
          <li className="text-white flex flex-row items-center justify-center">
            <FaEnvelope className="text-2xl" />
            :lukazhozhadze53@gmail.com
          </li>
          <li className="text-white flex flex-row items-center justify-center gap-2">
            <FaGithub className="text-white text-2xl" />
            Github
          </li>
          <li className="text-white flex flex-row items-center justify-center gap-2">
            <FaInstagram className="text-white text-2xl" />
            instagram
          </li>
        </div>
      </footer>
    </>
  );
};

export default Footer;
