import React from "react";
import logoUrl from "../assets/logo/logo-t.png";

import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineSkype,
} from "react-icons/ai";

import {
  MdOutlinePersonOutline,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div>
        {" "}
        <h1 className="pt-20"></h1>
      </div>
      {/*Footer container */}

      <footer className="pl-20 bg-neutral-100 text-center text-neutral-600  lg:text-left ">
        {/*Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
        <div className="mx-6 py-6 text-center md:text-left">
          <div className=" grid gap-2 md:grid-cols-2  sm:grid-cols-2">
            {/*Tailwind logo section */}
            <div className=" flex justify-centern  h-56 sm:w-40 md:w-64 lg:w-80 items-center justify-items-center  md:justify-items-center">
              <img src={logoUrl} alt="logo" />
            </div>

            {/*Useful links section */}
            <div className="grid sm:grid-cols-2 md:grid-cols-2">
              <div className="">
              <h6 className="mb-4 flex justify-center font-semibold  md:justify-start">
                Contact us
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <MdOutlinePersonOutline className="mr-2" /> Dot Studio
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <MdOutlineEmail className="mr-2" /> contact@dotstudio.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <MdOutlinePhone className="mr-2" /> +91 987654321
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <AiOutlineSkype className="mr-2" /> Skype.com
              </p>
            </div>
            {/*Contact section */}
            <div>
              <h6 className="mb-4 flex justify-center font-semibold  md:justify-start">
                Location
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                xyx Delhi.
              </p>

              <h6 className="mb-4 flex flex-row justify-center font-semibold  md:justify-start">
                Follow us
              </h6>
              <div className="flex flex-row items-center justify-center md:justify-start">
                <p className="mr-2">
                  <AiOutlineFacebook />
                </p>
                <p className="mr-2">
                  <AiOutlineLinkedin />
                </p>
                <p className="mr-2">
                  <AiOutlineInstagram />
                </p>
                <p className="mr-2">
                  <AiOutlineYoutube />
                </p>
              </div>
            </div>
            </div>
            
          </div>
        </div>

        {/* Copyright section  */}
        <div className="bg-[#F7F7F7] p-4 text-xs text-center">
          <span>Copyright © 2023 </span>
          <a className=" text-neutral-500" href="">
            Dot Studio
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
