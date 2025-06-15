"use client"
import React from "react";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <footer className="h-50 p-4 border-t-1 border-white mt-25">
        <div className="flex flex-row items-start">
          <h1 className="text-white font-bold">Luksona's Portfolio</h1>
        </div>
        <div className="flex flex-col gap-3 items-start mt-5">
          <li className="text-white flex flex-row items-center justify-center">
            <FaEnvelope className="text-2xl" />
            :lukazhozhadze53@gmail.com
          </li>
          <li
            onClick={() => router.push("https://github.com/Luksonaa18")}
            className="text-white flex flex-row items-center justify-center gap-2 cursor-pointer"
          >
            <FaGithub className="text-white text-2xl" />
            Github
          </li>
          <li
            onClick={() =>
              router.push("https://www.instagram.com/lukssonaa1122/")
            }
            className="text-white cursor-pointer flex flex-row items-center justify-center gap-2"
          >
            <FaInstagram className="text-white text-2xl" />
            instagram
          </li>
        </div>
      </footer>
    </>
  );
};

export default Footer;
