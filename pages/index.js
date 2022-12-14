import Head from 'next/head';
import react from 'react';
import ReactDOM from "react-dom"
import Portfolio from './portfolio';
import Image from "next/image";
import darkmode from "../public/icons-Darkmode.svg";
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


export default function Home() {
  return (
    <div>
      <Head>
        <title>Glenn Paul Mabao | Design & Develop</title>
        <meta name="description" content="I completed my Information Technology with a Java Programming degree in 2011. After college, I spent six years honing my artistic skills as a graphic illustrator, branding expert, and web designer. I've been a front-end programmer with some backend expertise since 2018." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className=" bg-[#BDFF00] w-full min-h-screen md:px-[17%] px-[8%]">
          <nav className="flex md:py-10 py-5 mx-auto md:mb-[28px] mb-10 justify-between">
            <h1 className="font-extrabold"><a href="https://glennpaulmabao.github.io/web/">Glenn Paul Mabao</a></h1>
            <ul>
              <li><a href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="md:flex items-start justify-between">
            <div className="md:w-[60%]">
              <h1 className="md:text-[180px] text-[80px] leading-[85%] md:my-10 my-[5px] font-black">ABOUT GLENN</h1>
            </div>
            <div className="md:w-[40%] w-[100%] flex flex-wrap ">
              <div className="md:flex items-center md:order-first order-last gap-5 bg-[#95C900] md:w-[100%] md:visible hidden w-[70%] md:h-[128px] h-[72px] my-7 md:mb-[40px] rounded-full font-light cursor-pointer">
              <Image src={darkmode} className="h-[80%] w-auto mx-5" />
              <a className="md:text-5xl text-3xl">Dark mode</a>
              </div>
              <p className="leading-[22pt] font-[300] my-10 md:my-0">
                  I completed my Information Technology with a Java
                  Programming degree in 2011. After college, I spent six years
                  honing my artistic skills as a graphic illustrator, branding expert,
                  and web designer. I've been a front-end programmer with some
                  backend expertise since 2018.
              </p>
              <div className="flex justify-center px-[10%] mx-auto items-center gap-5 bg-[#000] md:hidden visible w-[100%] h-[72px] rounded-full font-light cursor-pointer">
              <h1 className="text-2xl text-[#95C900]">Let's Talk</h1>
              <Image src={talk2me} className="h-[40%] w-auto mx-5" />
              </div>
            </div>
          </div>
          <div className="md:flex md:my-10 my-5 md:justify-between">
            <div className="md:w-[50%] w-[100%] flex items-start md:gap-5 gap-2">
              <div className="flex items-center md:gap-5 gap-2 md:border-[#4E5732] md:px-5 md:border-2 md:w-[38%] w-[100%] h-[50px] rounded-full font-light cursor-pointer">
                <Image src={design} className="md:h-[30px] h-[20px] w-auto"/>
                <p className="text-[16px]">The Designer</p>
              </div>
              <div className="flex items-center md:gap-5 gap-2 md:border-[#4E5732] md:px-5 md:border-2 md:w-[38%] w-[100%] h-[50px] rounded-full font-light cursor-pointer">
                <Image src={develop} className="md:h-[30px] h-[20px] w-auto"/>
                <p className="text-[16px]">The Programmer</p>
              </div>
            </div>
            <div className="hidden md:w-[50%] md:flex items-center justify-end gap-3 text-5xl">
              <Image src={hrdot}/>
              <Image src={twitter} className="cursor-pointer h-[37.1px] w-auto mx-2" />
              <Image src={instagram} className="cursor-pointer h-[37.1px] w-auto mx-2" />
              <Image src={linkedin} className="cursor-pointer h-[37.1px] w-auto mx-2" />
            </div>
          </div>
          <div className="md:mt-[20px] mt-[150px] flex flex-wrap justify-end">
            <div className="hidden md:flex md:justify-end z-[2] pr-[80px]">
              <div className="cursor-pointer h-[210.9px] w-[210.9px] items-center flex justify-center rounded-full bg-[#131A00]">
                <Image src={talk2me} className="h-[85.9px] w-auto mx-2" />
              </div>
            </div>
            <div className="bg-[#4E5732] md:h-[650px] h-[375px] w-[100%] md:rounded-t-[120px] rounded-t-[30px] z-[1] mt-[-130px] relative overflow-hidden">
              <Image src={web5} layout="fill" objectFit="cover"/>
            </div>
          </div>
        </section>
        <section className="bg-[#101010] md:h-[171.2px] md:px-[17%] px-[10%] py-10 flex items-center justify-start" >
          <h1 className="md:text-[50px] text-[35px] font-extrabold text-[#95C900]">PORTFOLIO</h1>
          <Image src={chimes} className="md:h-[92px] h-[48px] w-auto ml-10"/>
        </section>
        <section className="bg-[#ffffff] md:px-[17%] px-[10%] flex flex-col gap-10 pt-[100px] pb-[200px] lg:flex-row lg:flex-wrap">
          <Portfolio title="Nike" img={web1} hashtags="Webdesign" />
          <Portfolio title="Addidas" img={web2} />
          <Portfolio title="Addidas" img={web3} />
          <Portfolio title="Addidas" img={web4} />
          <Portfolio title="Addidas" img={web5} />
          <Portfolio title="Addidas" img={web6} />
        </section>

        <section className="bg-[#101010] md:h-[171.2px] md:px-[17%] px-[10%] py-5 flex items-center justify-start" >
          <h1 className="md:text-[50px] text-[20px] font-extrabold text-[#95C900]">GLENN PAUL MABAO</h1>
          <Image src={chimes} className="md:h-[92px] h-[55px] w-auto ml-10"/>
        </section>

      </main>

    </div>
  )
}
