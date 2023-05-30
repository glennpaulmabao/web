import Head from 'next/head';
import React from 'react';
import ReactDOM from "react-dom"
import Portfolio from './portfolio';
import Image from "next/image";
import darkmode from "../public/icons-Me.png";
import linkedin from "../public/icons-in.svg";
import instagram from "../public/icons-ig.svg";
import twitter from "../public/icons-tw.svg";
import hrdot from "../public/hr-dot.svg";
import design from "../public/icons-Design.svg";
import develop from "../public/icons-Programmer.svg";
import talk2me from "../public/icons-talk2me.svg";
import chimes from "../public/icons-chimes.svg";
import web1 from "../public/Projects/Websites/web1.png";
import web2 from "../public/Projects/Websites/web2.png";
import web3 from "../public/Projects/Websites/web3.png";
import web4 from "../public/Projects/Websites/web4.png";
import web5 from "../public/Projects/Websites/web5.png";
import web6 from "../public/Projects/Websites/web6.png";
import MeBG from "../public/Me_BG.png";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Glenn Paul Mabao | Design & Develop</title>
        <meta name="description" content="I completed my Information Technology with a Java Programming degree in 2011. After college, I spent six years honing my artistic skills as a graphic illustrator, branding expert, and web designer. I've been a front-end programmer with some backend expertise since 2018." />
        <link rel="icon" href="/MCSGlennLogo.png" />
      </Head>

      <main className='w-[100%!important]'>
        <div className="bg-[#D4FF3F]">
        <section className="md:w-[1300px] md:px-2 px-[5%] mx-auto min-h-screen">
          <nav className="flex md:py-10 py-5 mx-auto md:mb-[28px] mb-10 justify-between">
            <h1 className="font-extrabold"><a href="https://glennpaulmabao.github.io/web/">Glenn Paul Mabao</a></h1>
            <ul>
              <li><a href="resume" target="_blank">Resume</a></li>
            </ul>
          </nav>
          <div className="items-start justify-between md:flex">
            <div className="md:w-[60%]">
              <h1 className="md:text-[180px] text-[80px] leading-[85%] md:my-10 my-[5px] font-black">ABOUT GLENN</h1>
            </div>
            <div className="md:w-[40%] w-[100%] flex flex-wrap ">
              <div className="md:flex items-center md:order-first order-last bg-no-repeat bg-cover bg-[url('../public/Me_BG.png')] gap-5 md:w-[100%] md:visible hidden w-[70%] md:h-[128px] h-[72px] my-7 md:mb-[40px] rounded-full font-light">
                <Image src={darkmode} className="h-[80%] w-auto mx-5 " />
                
              </div>
              <p className="leading-[22pt] font-[300] my-10 md:my-0">
              As an Information Technology graduate with a major in Java programming language and experience as a web developer since 2013, I have the technical skills to develop and maintain complex web applications. My graphic design skills also allow me to create visually appealing and user-friendly interfaces. I am confident that my combination of technical expertise and design abilities make me a valuable asset to any team.
              </p>
              <a className="flex justify-center px-[10%] mx-auto items-center gap-5 bg-[#000] md:hidden visible w-[100%] h-[72px] rounded-full font-light cursor-pointer" href="mailto:glennpaulmabao@yahoo.com.ph">
              <h1 className="text-2xl text-[#D4FF3F]">Let's Talk</h1>
              <Image src={talk2me} className="h-[40%] w-auto mx-5" />
              </a>
            </div>
          </div>
          <div className="my-5 md:flex md:my-10 md:justify-between">
            <div className="md:w-[50%] w-[100%] flex items-start md:gap-5 gap-2">
              <div className="flex items-center md:gap-5 gap-2 md:border-[#4E5732] md:px-5 md:border-2 md:w-[38%] w-[100%] h-[50px] rounded-full font-light cursor-pointer">
                <Image src={design} className="md:h-[30px] h-[20px] w-auto"/>
                <p className="text-[16px]"><a href="thedesigner">The Designer</a></p>
              </div>
              <div className="flex items-center md:gap-5 gap-2 md:border-[#4E5732] md:px-5 md:border-2 md:w-[38%] w-[100%] h-[50px] rounded-full font-light cursor-pointer">
                <Image src={develop} className="md:h-[30px] h-[20px] w-auto"/>
                <p className="text-[16px]"><a href="#websites">The Programmer</a></p>
              </div>
            </div>
            <div className="hidden md:w-[50%] md:flex items-center justify-end gap-3 text-5xl">
              <Image src={hrdot}/>
              <a target="_blank" href="https://twitter.com/glennfalse"><Image src={twitter} className="cursor-pointer h-[37.1px] w-auto mx-2" /></a>
              <a target="_blank" href="https://www.instagram.com/glennfalse/"><Image src={instagram} className="cursor-pointer h-[37.1px] w-auto mx-2" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/glennpaulmabao/"><Image src={linkedin} className="cursor-pointer h-[37.1px] w-auto mx-2" /></a>
            </div>
          </div>
          <div className="md:mt-[20px] mt-[150px] flex flex-wrap justify-end">
            <div className="hidden md:flex md:justify-end z-[2] pr-[80px]">
              <a  href="mailto:glennpaulmabao@yahoo.com.ph" className="cursor-pointer h-[210.9px] w-[210.9px] items-center flex justify-center rounded-full bg-[#131A00]">
                <Image src={talk2me} className="h-[85.9px] w-auto mx-2" />
              </a>
            </div>
            <div className="bg-[#4E5732] md:h-[680px] h-[375px] w-[100%] md:rounded-t-[120px] rounded-t-[30px] z-[1] mt-[-130px] relative overflow-hidden">
              <a href="https://www.apebeverages.com/" target="_blank" ><Image src={web5} layout="fill" objectFit="cover"/></a>
            </div>
          </div>
        </section>
        </div>
        <div className="bg-[#0B0B0B]">
        <section className=" md:h-[171.2px] md:w-[1000px] md:px-0 mx-auto px-[5%] py-10 flex items-center justify-start" >
          <h1 className="md:text-[50px] text-[35px] font-extrabold text-[#D4FF3F]">PORTFOLIO</h1>
          <Image src={chimes} className="md:h-[92px] h-[48px] w-auto ml-10"/>
        </section>
        </div>
        <div className="bg-[#171717]">
        <section ID="websites" className="mx-auto md:h-[171.2px] md:px-0 md:w-[1000px] px-[5%] py-10 justify-start">
          <h1 className="md:text-[50px] md:mt-10 text-[35px] font-extrabold text-[#C3C3C3] hover:text-[#D4FF3F]">BEST PROJECTS</h1>
          <p className="leading-[22pt] font-[300] my-10 md:my-5 text-[#898989] md:w-[60%] w-full">
          Everyone of us loves something different. So, explore the world through the lens of our visual capabilities and find what you love.
              </p>
              <div className="md:columns-3 columns-1 flex flex-wrap md:gap-[15px] gap-2 md:text-[12px] text-[14px] md:flex justify-start items-center">
                <h4 className=" hover:border-[#D4FF3F] hover:text-[#D4FF3F] border-[#898989] text-[#898989] font-regular py-[4px] px-[12px] border-2 md:my-2 mt-2 rounded-full items-center">Web Design</h4>
                <h4 className=" hover:border-[#D4FF3F] hover:text-[#D4FF3F] border-[#898989] text-[#898989] font-regular py-[4px] px-[12px] border-2 md:my-2 mt-2 rounded-full items-center">Web Development</h4>
                <h4 className="  hover:border-[#D4FF3F] hover:text-[#D4FF3F] border-[#898989] text-[#898989] font-regular py-[4px] px-[12px] border-2 md:my-2 mt-2 rounded-full items-center">Wordpress</h4>
                <h4 className=" hover:border-[#D4FF3F] hover:text-[#D4FF3F] border-[#898989] text-[#898989] font-regular py-[4px] px-[12px] border-2 md:my-2 mt-2 rounded-full items-center">ReactJS</h4>
            </div>
        </section>
        <section className="md:px-0 px-[5%] mx-auto md:w-[1000px] flex flex-col gap-10 md:py-[120px] py-[40px] lg:flex-row lg:flex-wrap">
          
          <Portfolio lnk="https://www.apebeverages.com/" img={web5} txt="Ape Beverages"/>
          <Portfolio lnk="https://www.beware.net/" img={web2} txt="Beware Events"/>
          <Portfolio lnk="https://www.clonnabis.com/" img={web3} txt="Clonnabis"/>
          <Portfolio lnk="https://cozieswimwear.com.au/" img={web4} txt="Cozie Swimwear Australia"/>
          <Portfolio lnk="https://kerry.f8projects.com.au" img={web1} txt="Kerry's Korner"/>
          <Portfolio lnk="https://www.pcnstrategies.com/" img={web6} txt="PCN Strategies"/>
        </section>

        <section className="bg-[#101010] md:h-[171.2px] md:px-[17%] px-[5%] py-5 flex items-center justify-start" >
          <h1 className="md:text-[50px] text-[20px] font-extrabold text-[#D4FF3F]">GLENN PAUL MABAO</h1>
          <Image src={chimes} className="md:h-[92px] h-[55px] w-auto ml-10"/>
        </section>

        </div>
      </main>

    </div>
  )
}
