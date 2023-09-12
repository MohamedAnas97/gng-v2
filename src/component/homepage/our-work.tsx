"use client";
import Image from "next/image";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

const OurWork = () => {
  const [divheight, setDivheight]: any = useState(0);
  const [activeBox, setActiveBox] = useState(1);
  const work = [
    {
      id: 1,
      title: "Ecommerce",
      subtitle: "Gold Souk",
      image: require("../../assets/homepage/vector.png"),
      content: "The thought-process:",
      content2:
        "Curating a distinctive solution that embraces every facet of todays technology landscape, equipping the client with a digital presence tailored for their thriving clientele.",
      content3: "The product:",
      content4: "A NextCommerce platform, powered by, Metaverse, and AI.",
      image2: require("../../assets/homepage/gold-souk.png"),
    },
    {
      id: 2,
      title: "Matrimony",
      subtitle: "4ever In Love",
      image: require("../../assets/homepage/vector.png"),
      content: "The thought-process:",
      content2:
        "Curating a distinctive solution that embraces every facet of todays technology landscape, equipping the client with a digital presence tailored for their thriving clientele.",
      content3: "The product:",
      content4: "A NextCommerce platform, powered by, Metaverse, and AI.",
      image2: require("../../assets/homepage/forverinlove.png"),
    },
    {
      id: 3,
      title: "Online Gaming",
      subtitle: "Let's Win",
      image: require("../../assets/homepage/vector.png"),
      content: "The thought-process:",
      content2:
        "Curating a distinctive solution that embraces every facet of todays technology landscape, equipping the client with a digital presence tailored for their thriving clientele.",
      content3: "The product:",
      content4: "A NextCommerce platform, powered by, Metaverse, and AI.",
      image2: require("../../assets/homepage/letswin.png"),
    },
  ];
  return (
    <div className="lg:pl-32 lg:pr-0 sm:px-8 px-4 ">
      {/* Our work */}
      <div className="lg:flex lg:justify-end lg:border-l-[1px] lg:border-r-0 lg:border-b-[1px] border-b-0 border-[#D2D2D5]">
        <div className="lg:w-[55%] lg:py-72 pt-32 pb-20 lg:text-left text-center">
          <h1 className=" text-[#000] xl:pl-10 lg:pl-6 lg:text-[56px] text-[40px] font-normal aeionik-font">
            Our Work
          </h1>
        </div>
      </div>
      {/* Ecommerce */}
      {work?.map((item, index) => (
        <div
          className="flex lg:flex-row flex-col justify-between lg:border-l-[1px] border-b-[1px]  border-[#D2D2D5]"
          key={index}
        >
          <div className="">
            <h4 className="text-[#000] text-[24px] font-normal aeionik-font lg:px-8 py-12 lg:text-left text-center">
              {item.title}
            </h4>
          </div>
          <div className="lg:w-[55%] ">
            <div className="flex justify-between sm:px-8 px-6 py-12  border-t-[1px] lg:border-x-0 border-x-[1px] lg:border-t-0 border-[#D2D2D5]">
              <h3 className="sm:text-[30px] text-[24px] font-normal aeionik-font text-[#000]">
                {item.subtitle}
              </h3>
              <div
                aria-expanded={divheight !== 0}
                aria-controls="example-panel"
                onClick={() => {
                  setDivheight(divheight === 0 ? "auto" : 0);
                  if (item.id === activeBox) {
                    setActiveBox(0);
                  } else {
                    setActiveBox(item.id);
                  }
                }}
                className="mt-3"
              >
                <Image
                  src={item.image}
                  alt=""
                  className="lg:w-[24px] w-[20px] lg:h-[24px] h-[20px] cursor-pointer"
                />
              </div>
            </div>
            {/* slide show content */}
            <AnimateHeight
              id="example-panel"
              duration={500}
              height={item.id === activeBox ? "auto" : 0}
            >
              <div className="sm:px-8 px-6 lg:border-x-0  border-x-[1px] border-[#D2D2D5]">
                <p className="lg:text-[24px] sm:text-[20px] text-[18px] text-[#000] font-light aeionik-font">
                  <span className="font-semibold">{item.content} </span>
                  {item.content2}
                </p>
                <p className="lg:text-[24px] sm:text-[20px] text-[18px]text-[#000] font-light aeionik-font py-5">
                  <span className="font-semibold">{item.content3} </span>
                  {item.content4}
                </p>
                <div className="py-1">
                  <Image src={item.image2} alt="" />
                </div>
              </div>
            </AnimateHeight>
          </div>
        </div>
      ))}
    </div>
  );
};
export default OurWork;
