import Head from 'next/head';
import react from 'react';
import ReactDOM from "react-dom"
import Images from '../utils/image';
import Image from "next/image";

function Portfolio(props){
    return(
    <div className="basis-1/3 flex-1 md:mt-[20px] pt-[30px] my-2">
        <div className="text-white hover:text-[#D4FF3F]">
            <a href={props.lnk} target="_blank">
            <Image
            src={props.img}
            className="object-cover rounded-2xl"
            width={"627.9px"}
            height={"560.3px"}
            layout="responsive"
            alt="Website"
             />
             <h1 className="mt-5 text-2xl font-extrabold uppercase">{props.txt}</h1></a>        
        </div>
    </div>
    )
}


export default Portfolio;