import Head from 'next/head';
import react from 'react';
import ReactDOM from "react-dom"
import Images from '../utils/image';
import Image from "next/image";

function Portfolio(props){
    return(
    <div className="basis-1/3 flex-1 md:my-10 my-2">
        <div>
            <Image
            src={props.img}
            className="object-cover rounded-t-[30px]"
            width={"627.9px"}
            height={"560.3px"}
            layout="responsive"
            alt="Website"
             />        
        </div>
          <h1 className="text-[35px]  font-extrabold my-4">{props.title}</h1>
        <div className="md:columns-3 columns-1 flex flex-wrap md:gap-[15px] gap-2 md:text-[12px] text-[14px] md:flex justify-start items-center">
          <h4 className="border-[#cbcbcb] text-[#cbcbcb] font-semibold w-[140px] px-5 py-[8px] border-2 md:my-2 rounded-full items-center">Web design</h4>
          <h4 className="border-[#cbcbcb] text-[#cbcbcb] font-semibold w-[140px] px-5 py-[8px] border-2 md:my-2 rounded-full items-center">Wordpress</h4>
          <h4 className="border-[#cbcbcb] text-[#cbcbcb] font-semibold w-[140px] px-5 py-[8px] border-2 md:my-2 rounded-full items-center">Elementor Pro</h4>
        </div>
    </div>
    )
}

export default Portfolio;