import React from 'react';
import Image from 'next/image';
import thisresume from "../public/Glenn-Paul-Mabao-2023-Resume.jpg";
import Head from 'next/head';


function resume() {
    return (
      
      <div className="bg-[#EFF5D5] min-h-screen p-5 m-0 grid grid-flow-row">
        <Head>
      <title>Glenn Paul Mabao | The Designer</title>
      <meta name="description" content="I completed my Information Technology with a Java Programming degree in 2011. After college, I spent six years honing my artistic skills as a graphic illustrator, branding expert, and web designer. I've been a front-end programmer with some backend expertise since 2018." />
      <link rel="icon" href="/MCSGlennLogo.png" />
    </Head>
        <Image alt="Resume" width="auto" height="auto" src={thisresume} className="min-h-auto w-auto md:w-[70%] md:h-auto mx-auto rounded-xl" />
        <center className='flex justify-center w-full my-12'>
        <div className='w-full mx-auto'>
        <a href="../Glenn-Paul-Mabao-2023-Resume.pdf" download className="bg-[#D5FF3F] hover:bg-black hover:text-[#D5FF3F] w-[250px]  py-3 px-10 rounded-3xl" >Download a Copy</a>
        </div>
        </center>
      </div>
    );
  }

export default resume;