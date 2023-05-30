import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import chimes from "../public/icons-chimes.svg";

function designs() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map(r);
    };
    const images = importAll(
      require.context("../public/Projects/Graphics", false, /\.(png|jpe?g|svg)$/)
    );
    setImages(images);
  }, []);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full">
    <Head>
      <title>Glenn Paul Mabao | The Designer</title>
      <meta name="description" content="I completed my Information Technology with a Java Programming degree in 2011. After college, I spent six years honing my artistic skills as a graphic illustrator, branding expert, and web designer. I've been a front-end programmer with some backend expertise since 2018." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className='w-[100%!important]'>
      <div className="bg-[#D4FF3F]">
      <section className="md:w-[1300px] md:px-2 px-[5%] mx-auto">
      <nav className="flex md:py-10 py-5 mx-auto md:mb-[28px] mb-10 justify-between">
            <h1 className="font-extrabold"><a href="https://glennpaulmabao.github.io/web/">Glenn Paul Mabao</a></h1>
            <ul>
              <li><a href="resume" target="_blank">Resume</a></li>
            </ul>
            </nav>
      </section>
      <div className="bg-[#0B0B0B]">
        <section className=" md:h-[171.2px] md:w-[1300px] md:px-0 mx-auto px-[5%] py-10 flex items-center justify-start" >
          <h1 className="md:text-[50px] text-[35px] font-extrabold text-[#D4FF3F] uppercase">The Designer</h1>
          <Image src={chimes} className="md:h-[92px] h-[48px] w-auto ml-10"/>
        </section>
        </div>
        <div className="bg-[#171717]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-15 gap-20 mx-10 md:mx-auto py-10 md:w-[1300px]">
      {images.map((image, index) => (
        <Image
          key={image.default}
          src={image.default}
          alt="gallery"
          className="shadow-md cursor-pointer rounded-xl"
          onClick={() => handleClick(index)}
        />
      ))}

      {selectedImageIndex !== null && (
        <div className="w-full">
                    <div className="fixed top-0 left-0 flex justify-center w-full min-h-screen py-10 mx-auto my-auto bg-black bg-opacity-80">
          <div
            className="absolute top-0 left-0 w-full h-auto bg-gray-900 opacity-40"
            onClick={handleClose}
          ></div>
          <div className="z-10 justify-center mx-auto rounded-lg min-h-auto w-[90%] md:w-[70%] shadow-lg justify-items-center">
            <Image
              src={images[selectedImageIndex].default}
              alt="gallery"
              className="w-auto h-auto rounded-lg shadow-md"
            />
            <button
              className="absolute px-2 py-1 text-[#D4FF3F] rounded-md top-2 right-2"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              className="absolute px-2 py-1 text-white transform -translate-y-1/2 bg-gray-800 rounded-md top-1/2 left-20"
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              className="absolute px-2 py-1 text-white transform -translate-y-1/2 bg-gray-800 rounded-md top-1/2 right-20"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
        </div>
      )}
    </div>
    <section className="bg-[#101010] md:h-[171.2px] md:px-[17%] px-[5%] py-5 flex items-center justify-start" >
          <h1 className="md:text-[50px] text-[20px] font-extrabold text-[#D4FF3F]">GLENN PAUL MABAO</h1>
          <Image src={chimes} className="md:h-[92px] h-[55px] w-auto ml-10"/>
        </section>
        </div>
        </div>
    </main>
    </div>
  );
}

export default designs;