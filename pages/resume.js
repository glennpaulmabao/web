import React from 'react';
import Image from 'next/image';
import thisresume from "../public/Glenn-Paul-Mabao-2023-Resume.jpg";


function resume() {
    return (
      <div className="bg-[#EFF5D5] h-full p-5 m-0 grid grid-flow-row">
        <Image alt="Resume" width="auto" height="auto" src={thisresume} className="min-h-[100%] w-[100%] md:w-[70%] md:h-auto mx-auto rounded-xl" />
        <div className='w-[100%] flex mx-auto justify-center'>
        <a href="../Glenn-Paul-Mabao-2023-Resume.pdf" download className="bg-[#D5FF3F] hover:bg-black hover:text-[#D5FF3F] py-3 px-10 rounded-3xl mt-10" >Download a Copy</a>
        </div>
      </div>
    );
  }

export default resume;