import React from 'react';
import Image from 'next/image';
import thisresume from "../public/Glenn-Paul-Mabao-2023-Resume.jpg";


function resume() {
    return (
      <div className="bg-[#EFF5D5] min-h-full p-5 m-0">
        <a href="../Glenn-Paul-Mabao-2023-Resume.pdf" download className="bg-[#D5FF3F] py-3 px-10 rounded-3xl mt-10 absolute" >Download a Copy</a>
        <Image alt="Resume" width="auto" height="auto" src={thisresume} className="h-[100%] w-[100%] md:w-[70%] md:h-auto mx-auto rounded-xl" />
      </div>
    );
  }

export default resume;