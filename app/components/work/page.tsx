"use client";

import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import fb from "../../../public/fb.png";

const Projects = () => {
  return (
    <section className="w-full py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          My Featured Projects
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* Project 1 */}
          <PinContainer
            title="FB Clone"
            href="https://facebook-ashy-ten.vercel.app"
            className="text-white text-base"
            containerClassName="w-[280px] h-[350px]"
          >
            <div className="flex flex-col items-start justify-start gap-4">
              <span className="text-lg font-semibold">Facebook Clone</span>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  alt="Facebook Clone"
                  src={fb}
                  width={240}
                  height={140}
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-gray-400  px-4">
                A modern Facebook UI built with Next.js, TypeScript, and
                Tailwind.
              </p>
            </div>
          </PinContainer>
          <PinContainer
            title="FB Clone"
            href="https://your-fb-clone-link.com"
            className="text-white text-base"
            containerClassName="w-[280px] h-[350px]"
          >
            <div className="flex flex-col items-start justify-start gap-4">
              <span className="text-lg font-semibold">Facebook Clone</span>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  alt="Facebook Clone"
                  src={fb}
                  width={240}
                  height={140}
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-gray-400  px-4">
                A modern Facebook UI built with Next.js, TypeScript, and
                Tailwind.
              </p>
            </div>
          </PinContainer>

          {/* Project 2 */}
          <PinContainer
            title="Another Project"
            href="https://your-other-project.com"
            className="text-white text-base"
            containerClassName="w-[280px] h-[350px]"
          >
            <div className="flex flex-col items-start justify-start gap-4">
              <span className="text-lg font-semibold">Twitter Clone</span>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  alt="Twitter Clone"
                  src={fb}
                  width={240}
                  height={140}
                  className="rounded-md"
                />
              </div>
              <p className="text-sm text-gray-400  px-4">
                Twitter clone featuring real-time updates and animations.
              </p>
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
  );
};

export default Projects;
