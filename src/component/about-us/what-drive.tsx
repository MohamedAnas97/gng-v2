"use client";
import Image from "next/image";
const WhatDrive = () => {
  return (
    <>
      {/* What Drive section start here */}
      <div className="lg:pl-32 lg:pr-0 sm:px-8 px-4 lg:py-0 py-4">
        <div className="flex justify-end lg:border-l-[1px] lg:border-r-0  border-[#D2D2D5]">
          <div className="lg:w-[55%] xl:px-8 xl:py-20 lg:p-4 lg:text-left text-center">
            <h6 className="pt-10 text-[#52002D] lg:text-[30px] text-[24px] font-normal aeionik-font">
              What drive us
            </h6>
            <h2 className="py-4 lg:px-0 px-4 text-[#000] lg:text-[47px] sm:text-[40px] sm:text-[30px] text-[26px] font-normal sm:leading-[56px] leading-[36px] aeionik-font">
              At our crux, we conceptualize ideation, ignite innovation, and
              drive transformative shifts to encapsulate the digital essence of
              your business.
            </h2>
            <p className="md:py-8 py-4 lg:px-0 px-4 text-[#000] lg:text-[24px] text-[18px] font-light leading-[34px] aeionik-font">
              Our mission is to translate your creative visions into model-tech
              solutions that revolutionize industries and leave an everlasting
              print on the digital world.
            </p>
          </div>
        </div>
      </div>
      {/* What Drive section Image start here */}
      <div className="w-full ">
        <Image src={require("../../assets/about-us/what-drive.png")} alt="" />
      </div>
    </>
  );
};
export default WhatDrive;
