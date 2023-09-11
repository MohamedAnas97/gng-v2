"use client";
import { useState, useEffect } from "react";
import Carousels from "react-spring-3d-carousel";
import ReactPlayer from "react-player";

const Banner = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [hasWindow, setHasWindow] = useState(false);
  const table = [
    {
      key: 1,
      content: "Metaverse Development",
      title: "Metaverse Development",
      BackgroundClass: "banner_container",
      description:
        "It is not a place or technology, but a re-imagining of the way we use the Internet. Think about harnessing the metaverse’s power using virtual and augmented reality, combined with blockchain technology. The goal? Creating digital products that not only elevates your business but also transforms user interaction.",
      video: require("../../assets/video/metaverse.mp4")
    },
    {
      key: 2,
      content: "Branding & Web Optimization",
      title: "Branding & Web Optimization",
      BackgroundClass: "banner_container11",
      description:
        "Your brand is your essence and demands to be distinctively and remarkably crafted in a way that resonates best with your audience. Let’s delve into your business ethos, vision, and values together to curate a brand that stands apart from the competition.",
      video: require("../../assets/video/branding.mp4")
    },
    {
      key: 3,
      content: "Custom Web Solutions",
      title: "Custom Web Solutions",
      BackgroundClass: "banner_container10",
      description:
        "Whether you're a startup or an established enterprise, we make navigation a breeze and encourage visitors to explore your offerings further with cohesive and procured web solutions with user-friendly interfaces and responsive designs.",
      video: require("../../assets/video/custom.mp4")
    },
    {
      key: 4,
      content: "Mobile App Development",
      title: "Mobile App Development",
      BackgroundClass: "banner_container9",
      description:
        "Our experts accelerate your app development cycle, provide an improved quality of code, and robust, reliable software solutions with gripping designs that captivate users from the moment they lay eyes on your app.",
      video: require("../../assets/video/mobileapp.mp4")
    },
    {
      key: 5,
      content: "UX/UI Prototyping",
      title: "UX/UI Prototyping",
      BackgroundClass: "banner_container8",
      description:
        "Mastering UI/UX design is at the crux of your brand’s digital identity. It both sets you apart and ahead. From creating applications with an intuitive visual interface, to a user-friendly website, all of it is attainable. And here’s the best part: Every bit of it is custom-tailored to fit your business requirements.",
      video: require("../../assets/video/uiux.mp4")
    },
    {
      key: 6,
      content: "Avatar Creation",
      title: "Avatar Creation",
      BackgroundClass: "banner_container7",
      description:
        "Using advanced avatar creation tools, you personalise every detail, from head to toe, because in the metaverse, your avatar is an extension of you. Be the architect of your digital identity and maximize the possibilities of self-expression.",
      video: require("../../assets/video/avatar.mp4")
    },
    {
      key: 7,
      content: "Cross Platform Metaverse",
      title: "Cross Platform Metaverse",
      BackgroundClass: "banner_container6",
      description:
        "Embrace a new era of connectivity and immersion. Our cross-platform metaverse solutions bridge the gap between diverse virtual environments, enabling users to interact effortlessly regardless of their preferred devices or platforms.",
      video: require("../../assets/video/cross.mp4")
    },
    {
      key: 8,
      content: "Metaverse Consulting",
      title: "Metaverse Consulting",
      BackgroundClass: "banner_container5",
      description:
        "Confused where to start? Don’t worry, a newer technology can make anyone a tad bit unsure. That's precisely why a consultation and strategic approach can't put you on the right track from the get go. Having a plan in place always sets a concrete foundation.",
      video: require("../../assets/video/metaverse-consult.mp4")
    },
    {
      key: 9,
      content: "Blockchain Based Applications",
      title: "Blockchain Based Applications",
      BackgroundClass: "banner_container4",
      description:
        "Blockchain is where innovation and technology converge seamlessly. Unlock the potential of the decentralized web through technology like smart contracts which automate processes, remove intermediaries, and ensure secure and transparent transactions.",
      video: require("../../assets/video/blockchain.mp4")
    },
    {
      key: 10,
      content: "Game Development",
      title: "Game Development",
      BackgroundClass: "banner_container3",
      description:
        "We keep up with the times by exploring delightful 2D side-scrollers and intricate 3D open-world adventures, with immersive graphics, sleek gameplay, and a captivating storyline to create games that transcend dimensions.",
      video: require("../../assets/video/game.mp4")
    },
    {
      key: 11,
      content: "Virtual Reality Experiences",
      title: "Virtual Reality Experiences",
      BackgroundClass: "banner_container2",
      description:
        "VR is sparking a revolution across industries, fundamentally changing how they operate. Let’s picture this: You enter a world crafted by computers, where all your senses come alive, you can see, hear or even interact with your surroundings. Now, take that immersion up a notch with 3D-modelling. This synergy is reshaping the way we experience technology in its entirety.",
      video: require("../../assets/video/virtual.mp4")
    },
  ].map((element: any, index: any) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [slides] = useState(table);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {/* what we Do start from here */}
      <div className="lg:pl-32 lg:pr-0 sm:px-10 px-4 bg-[#EBEBED] ">
        <div className="lg:pt-60 lg:pb-0 py-10 border-l-[1px] border-[#D2D2D5]">
          <h1 className="lg:pl-12 py-3 lg:text-[56px] text-[40px]  font-normal text-[#000] leading-9 aeionik-font lg:text-left text-center">
            What we do
          </h1>
          <p className="lg:pl-12 px-6 lg:px-0 pt-3 pb-10 md:text-[20px] text-[16px] text-[#000] font-light aeionik-font lg:text-left text-center">
            GNG empowers businesses with innovative strategies, metaverse
            integration, and advanced tech for accelerated transformation.
          </p>
        </div>
      </div>
      {/* technologies containers  start here*/}
      <div className="flex lg:flex-row flex-col-reverse  bg-[#EBEBED] lg:pb-0 pb-10">
        <div className="lg:px-[47px] lg:pt-72 lg:block hidden ">
          <button className="px-3 py-4 border-[3px] border-[#666] font-bold text-[#666] lg:rounded-[90px]">
            .
          </button>
          <button className="text-[#999]">click</button>
        </div>
        <div
          className={`${slides[goToSlide].BackgroundClass} bg-common-css w-100 flex lg:flex-row flex-col justify-between lg:py-12 `}
        >
          <div className="carousel-vertical-container text-start lg:w-[350px] w-full lg:h-full md:h-[300px] h-[200px] lg:pl-6 lg:rotate-[270deg] rotate-[0deg] 2xl:ml-18 xl:ml-16 lg:ml-12 2xl:text-[30px] xl:text-[25px] lg:text-[22px] md:text-[18px] sm:text-[15px] text-[12px] font-medium cursor-pointer monotserrat">
            <Carousels
              slides={slides}
              showNavigation={false}
              goToSlide={goToSlide}
            />
          </div>
          <div className="lg:w-[65%] w-full xl:px-16 md:px-10 px-3 pb-20 ">
            <div className="">
              {hasWindow && (
                <ReactPlayer
                  url={slides[goToSlide].video}
                  className="video_container rounded-t-lg object-fit"
                  controls={false}
                  loop
                  playing
                  playsinline={true}
                  muted={true}
                />
              )}
            </div>
            <p className="text-[#fff] 2xl:text-[28px] xl:text-[24px] md:text-[20px] sm:text-[15px] text-[13px] font-normal xl:py-6 py-3 aeionik-font leading-[36px]">
              {slides[goToSlide].description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
