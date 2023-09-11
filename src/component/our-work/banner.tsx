"use client";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      {/* Our work start here */}
      <div className="lg:w-[35%] lg:border-r-[1px] border-r-0 border-[#D2D2D5] lg:pt-10 lg:py-52 py-24">
        <h1 className="text-[#000] font-normal xl:text-[73px] md:text-[56px] text-[40px] leading-[84px] pl-8 aeionik-font lg:text-left text-center">
          Our work
        </h1>
      </div>
      {/* Our work content start here */}
      <div className="flex border-t-[1px] border-[#D2D2D5] ">
        <div className="lg:w-[35%] lg:border-r-[1px] border-[#D2D2D5] pt-10 py-52"></div>
        <div className="lg:w-[65%] flex justify-end p-10">
          <div className="xl:w-[65%] lg:[75%] lg:pb-20 ">
            <p className="text-[#000] xl:text-[28px] lg:text-[24px] text-[20px] font-light aeionik-font leading-[39px] lg:text-left text-center">
              We collaborate with innovative companies at every stage, acting as
              a partner as they accelerate and meet their goals. Take a look at
              some of our favorite projects to date.
            </p>
          </div>
        </div>
      </div>
      {/* header section our work */}
      <div className="sm:block hidden">
      <div className="flex border-t-[1px] border-[#D2D2D5] ">
        <div className="lg:w-[35%] w-[50%] flex ">
          {/* Technologies */}
          <div className="w-[50%] flex lg:justify-start justify-center py-5 xl:pl-10 lg:pl-5 pl-0 border-x-[1px]  border-[#D2D2D5]">
            <h4 className="text-[#000] xl:text-[20px] text-[18px] font-normal aeionik-font">
              Technologies
            </h4>
            <div className="px-2 pt-[13px] ">
              <Image
                src={require("../../assets/our-work/vector.png")}
                alt=""
                className="w-[14px] h-[8px]"
              />
            </div>
          </div>
          {/* Industries */}
          <div className="w-[50%] flex lg:justify-start justify-center py-5 xl:pl-10 lg:pl-5 pl-0 lg:border-r-[1px] border-[#D2D2D5]">
            <h4 className="text-[#000] xl:text-[20px] text-[18px] font-normal aeionik-font">
              Industries
            </h4>
            <div className="px-2 pt-[13px] ">
              <Image
                src={require("../../assets/our-work/vector.png")}
                alt=""
                className="w-[14px] h-[8px]"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[65%] w-[50%] flex justify-end lg:border-l-[0px] border-l-[1px]  border-[#D2D2D5]">
          <div className="p-5 border-l-[1px] border-[#D2D2D5] cursor-pointer">
            <Image
              src={require("../../assets/our-work/sqaure.png")}
              alt=""
              className="w-[30px] h-[30px]"
            />
          </div>
          <div className="p-5 border-x-[1px] border-[#D2D2D5] cursor-pointer">
            <Image
              src={require("../../assets/our-work/rectangle.png")}
              alt=""
              className="w-[30px] h-[30px]"
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Banner;
