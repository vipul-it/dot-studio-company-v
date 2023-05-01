import React from "react";
import heroimg from "../assets/images/Homepage/heroimage.png";
import bottomimg from "../assets/images/Homepage/19.jpg";

import Carouselc from "./CarouselComponent";

const Hero = () => {
  return (
    <div>
      {/* landing page start */}
      <div className="px-20 grid sm:grid-cols-1 lg:grid-cols-2 pt-32 gap-4 bg-[#F7F7F7]">
        <div className="">
          <h1 className="text-4xl">
            <span className="text-blue-400">What</span> we do?
          </h1>
          <p className="">
            We specialize in personalized interior design that reflects our
            clients unique style and personality. Our skilled architects and
            designers work closely with clients to ensure exceptional service
            and perfect execution. From single rooms to entire homes, we
            prioritize functionality and comfort while never compromising on
            style. Our goal is to exceed clients' expectations and deliver
            designs that they'll love for years to come.
          </p>
        </div>
        <div className="pl-8 sm:pt-10">
          <img src={heroimg} alt="hero" />
        </div>
      </div>
      {/* landing page end */}

      {/* Carousel page start */}
      <div className="px-20 pt-12 pb-5">
        <p className="">Our</p>
        <h2 className="text-3xl font-bold">Gallery</h2>
      </div>
      <Carouselc />

      {/* Carousel page end */}

      {/* services page start */}
      <div className="px-20 pt-12">
        <div>
          <p className="">Our</p>
          <h2 className="text-3xl font-bold">Services</h2>
        </div>
        <div className="pt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#F7F7F7] rounded p-3">
            <p>01</p>
            <h4 className="text-xl font-semibold">Architecture designing</h4>
            <p>Architecture design also includes the selection of...</p>
          </div>
          <div className="bg-[#F7F7F7] rounded p-3">
            <p>02</p>
            <h4 className="text-xl font-semibold">Interior Designing</h4>
            <p>Interior design is the art and science of creating...</p>
          </div>
          <div className="bg-[#F7F7F7] rounded p-3">
            <p>03</p>
            <h4 className="text-xl font-semibold">Landscape Designing</h4>
            <p>Landscape designing is the art and science of...</p>
          </div>
          <div className="bg-[#F7F7F7] rounded p-3">
            <p>04</p>
            <h4 className="text-xl font-semibold">Engineering services</h4>
            <p>Engineering services refer to a broad range of... </p>
          </div>
        </div>
      </div>
      {/* services page end */}

      {/* Project page start */}
      <div className="px-20 pt-12 pb-2">
        <p className="">Most Recent</p>
        <h2 className="text-3xl font-bold">Projects</h2>
      </div>
      <div className="p-20 grid sm:grid-cols-1 lg:grid-cols-2  gap-4 bg-[#F7F7F7]">
        <div className="">
          <p className="pr-28  pb-4">
            We would like to share with you a selection of projects that have
            not only elicited a great deal of joy and satisfaction to our
            esteemed clients but have also filled us with immense pride and a
            sense of accomplishment.
          </p>
          <button
            class=" text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-white active:bg-sky-600   text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            See All Projects
          </button>
        </div>
        <div className="pr-8 ">
          <img src={bottomimg} alt="hero" />
        </div>
      </div>
      {/* Project page end */}
    </div>
  );
};

export default Hero;
