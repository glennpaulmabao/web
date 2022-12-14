import Head from 'next/head';
import react from 'react';
import ReactDOM from "react-dom"
import Images from '../utils/image';
import Image from "next/image";

function Portfolio(props){
    return(
    <div className="basis-1/3 flex-1 md:mt-[20px] pt-[30px] my-2">
        <div>
            <Image
            src={props.img}
            className="object-cover"
            width={"627.9px"}
            height={"560.3px"}
            layout="responsive"
            alt="Website"
             />        
        </div>
    </div>
    )
}


export default Portfolio;