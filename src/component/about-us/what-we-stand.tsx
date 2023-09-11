"use client";
import Image from "next/image";
const WhatWeStand = () => {
  return (
    <>
      {/* What we stand start here */}
      <div className=" lg:pl-32 lg:pr-0 sm:px-8 px-4 ">
        {/* What we stand heading */}
        <div className="flex lg:justify-end lg:border-l-[1px] border-[#D2D2D5]">
          <div className="lg:w-[55%] w-full lg:pt-40 lg:pb-5 py-24 lg:text-left text-center">
            <h1 className="lg:p-8 py-10 xl:text-[56px] lg:text-[46px] text-[40px] text-[#000] font-normal aeionik-font">
              What we stand for
            </h1>
          </div>
        </div>
        {/* Non- Traditional Approach */}
        <div className="lg:py-0 py-8">
          <div className="flex lg:flex-row flex-col-reverse justify-between lg:border-l-[1px] lg:border-b-[1px] border-[1px] lg:border-[0px] border-[#D2D2D5] ">
            <div className="lg:w-[45%] w-full lg:pt-0 pt-10">
              <h3 className="xl:pl-8 lg:pl-5 2xl:text-[43px] xl:text-[36px] md:text-[27px] text-[20px] text-[#000] font-normal aeionik-font lg:text-left text-center">
                Non-Traditional Approach
              </h3>
              {/* tab size block */}
              <div className="lg:hidden block sm:px-4 px-3">
                <p className="2xl:text-[34px] xl:text-[30px] lg:text-[26px] md:text-[22px] text-[18px] text-[#000] font-light aeionik-font xl:leading-[56px] leading-[40px] lg:py-0 py-6 lg:text-left text-center">
                  Elevating the way you operate by transcending conventional
                  problem-solving approaches, maneuvering past unique business
                  hurdles with creative strategies, and always staying ahead of
                  the curve.
                </p>
              </div>
            </div>
            <div className="lg:w-[55%] w-full">
              <div className="lg:px-8 sm:px-4 px-3 ">
                {/* desktop size block */}
                <div className="lg:block hidden">
                  <p className="2xl:text-[34px] xl:text-[30px] lg:text-[26px] text-[22px] text-[#000] font-light aeionik-font xl:leading-[56px] leading-[40px] lg:py-0 py-10 lg:text-left text-center">
                    Elevating the way you operate by transcending conventional
                    problem-solving approaches, maneuvering past unique business
                    hurdles with creative strategies, and always staying ahead
                    of the curve.
                  </p>
                </div>
                <div className="lg:pt-32 lg:pb-16 lg:p-0 py-3">
                  <Image
                    src={require("../../assets/about-us/img1.png")}
                    alt=""
                    className="lg:h-[100%] md:h-[450px] h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Establishing Digital Identity */}
       
          <div className="flex lg:flex-row flex-col justify-between lg:border-l-[1px] lg:border-b-[1px]  border-[#D2D2D5] ">
            
            <div className="lg:w-[45%] w-full lg:pt-0 lg:border-r-[1px] border-[#D2D2D5] lg:pb-0 pb-8">
            <div className="border-[1px] lg:border-[0px]  border-[#D2D2D5]">
              <div className="lg:px-8 px-4 lg:py-14 py-3">
                <Image
                  src={require("../../assets/about-us/img2.png")}
                  alt=""
                  className="lg:h-[100%] md:h-[450px] h-[300px] object-cover"
                />
              </div>
              <h3 className="lg:pl-8  lg:py-8 pt-10 lg:pl-5 2xl:text-[43px] xl:text-[36px] md:text-[27px] text-[20px]  text-[#000] font-normal aeionik-font lg:text-left text-center">
                Establishing Digital Identity
              </h3>
              <p className="lg:px-8 px-3 2xl:text-[34px] xl:text-[30px] lg:text-[26px] md:text-[22px] text-[18px] text-[#000] font-light aeionik-font xl:leading-[56px] leading-[40px] lg:py-0 py-6 lg:text-left text-center">
                In the digital world, it is the products that do all the
                talking. It becomes vital for them to speak narratives that
                align with your brand’s physical entity. At G&G, we take
                translating your brand’s physical entity into a digital product
                very seriously.
              </p>
              </div>
            </div>
            {/* Empowerment through Software */}
           
            <div className="lg:w-[55%] w-full lg:py-32 border-[1px] lg:border-[0px] border-[#D2D2D5]">
              <div className="lg:px-8 sm:px-4 px-3 flex justify-end ">
                <div className="lg:w-[65%] w-full lg:pt-40 lg:pb-16 py-3">
                  <Image
                    src={require("../../assets/about-us/img3.png")}
                    alt=""
                    className="lg:h-[100%] md:h-[450px] h-[300px] object-cover "
                  />
                </div>
              </div>
              <h3 className="lg:pl-8  lg:py-8 pt-10 lg:pl-5 2xl:text-[43px] xl:text-[36px] md:text-[27px] text-[20px]  text-[#000] font-normal aeionik-font lg:text-left text-center">
                Empowerment through Software
              </h3>
              <p className="lg:px-8 px-3 2xl:text-[34px] xl:text-[30px] lg:text-[26px] md:text-[22px] text-[18px] text-[#000] font-light aeionik-font xl:leading-[56px] leading-[40px] lg:py-0 py-6 lg:text-left text-center">
                Elevating possibilities – where people stop at impossible, for
                us impossible is just the starting point. We aim to not just
                innovate, but empower.
              </p>
            </div>
           
          </div>
          </div>
     
    </>
  );
};
export default WhatWeStand;
