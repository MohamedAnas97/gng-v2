"use client";
import Image from "next/image";
import Img2 from "../../assets/homepage/how-we.png";
import Img3 from "../../assets/homepage/work-2.png";
import { useState } from "react";
const HowWeWork = () => {
  const [activeBox, setActiveBox] = useState(1);
  //
  const work = [
    {
      id: 1,
      active: 1,
      title: "01 Ideation",
      content:
        " We’re not here to work just for the sake of delivering. We start with your vision: What are your goals? How can our digital expertise amplify your potential?",
    },
    {
      id: 2,
      active: 0,
      title: "02 Design",
      content:
        "It bottles down how your application looks and feels. We’re aspiring to build not just products but experiences that people will love so this part is integral to the process.",
    },
    {
      id: 3,
      active: 0,
      title: "03 Development",
      content:
        "It goes without saying that all our products are optimized for a slew of devices inclusive of desktops, laptops and tablets. Our team is equipped with expertise to utilize the latest technologies to create dynamic products.",
    },
    {
      id: 4,
      active: 0,
      title: "04 Development",
      content:
        "After meticulously designing and developing your product, it is time to make it accessible to the world. But it doesn’t stop there, we’re by your side to provide necessary support after the initial phase.",
    },
  ];

  const onMouseEnterHandler = (e: any) => {
    // console.log("e", e);
    setActiveBox(e.id);
  };
  const onMouseEnterHandler2 = (e: any) => {
    // console.log("e", e);
    // setActiveBox(e.id);
    return e.id ? e.id : 1;
  };

  return (
    <>
      <div className="lg:pl-32 lg:pr-0 sm:px-8 px-4">
        {/* how we work container start here */}
        <div className="flex">
          <div className="w-[45%] border-l-[1px] border-[#D2D2D5] lg:block hidden">
            <Image src={Img2} alt="" />
          </div>
          <div className="lg:w-[55%] w-[100%] flex flex-col justify-end ">
            <h1 className="lg:pb-20 pb-10 lg:pl-10 lg:text-[56px] text-[40px] font-normal text-[#000] leading-9 aeionik-font lg:text-left text-center">
              How we work
            </h1>
            <div>
              <Image src={Img3} alt="" />
            </div>
          </div>
        </div>
        {/* how we work container2 start here  Desktop size*/}
        <div className="lg:block hidden">
          <div className="border-y-[1px] border-[#D2D2D5] ">
            <div
              className="flex w-full"
              // id="growContainer"
            >
              {work?.map((item: any, index: any) => (
                <div
                  className={`${
                    item.id === activeBox
                      ? " border-l-[0px] w-[45%]"
                      : "w-[18.33%] grow "
                  } border-l-[1px] border-[#D2D2D5] cursor-pointer`}
                  key={index}
                  onMouseEnter={() => {
                    setActiveBox(item.id);
                  }}
                >
                  <h3 className="px-6 py-6 2xl:text-[27px] xl:text-[20px] text-[16px] font-normal aeionik-font cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="px-6 py-6 2xl:text-[27px] xl:text-[20px] text-[16px] font-normal aeionik-font leading-[39px]">
                    {item.id === activeBox ? item.content : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* how we work container tab & mobile   */}

        <div className="lg:border-[1px] border-x-[1px] border-[#D2D2D5] lg:hidden block ">
          {work?.map((item, index) => (
            <div className=" border-b-[1px] border-[#D2D2D5]" key={index}>
              <h3 className="px-6 py-6 border-b-[1px] border-[#D2D2D5] sm:text-[24px] text-[20px] text font-normal aeionik-font cursor-pointer">
                {item.title}
              </h3>
              <p className="px-6 py-6 sm:text-[20px] text-[16px] font-normal aeionik-font md:leading-[39px] leading-[25px]">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HowWeWork;
