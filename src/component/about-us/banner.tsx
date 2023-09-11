"use client";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      {/* about page start here */}
      <div className="flex ">
        <div className="lg:w-[35%] lg:border-r-[1px] lg:py-80 border-r-0 border-[#D2D2D5]"></div>
        {/* We've got you */}

        <div className="lg:w-[58%] w-full lg:border-r-[1px] border-r-0 border-[#D2D2D5] lg:text-left text-center">
          <h1 className=" pt-16 lg:pb-72 pb-16 lg:pl-10 text-[#000] font-normal lg:text-[73px] md:text-[56px] text-[40px] leading-[83px] aeionik-font">
            We’ve got you.
          </h1>
          <div className=" flex justify-end">
            <div className=" lg:pt-24 pt-8 lg:pb-0 pb-16 lg:w-[75%] w-full">
              <p className="text-[#000] font-light xl:text-[24px] md:text-[20px] text-[18px] aeionik-font md:px-10 px-6 ">
                We’re in this together - from ideation to launch & further
                beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Get in touch */}
      <div className="flex lg:flex-row flex-col 2xl:h-[590px] xl:h-[450px] lg:h-[350px] md:h-[500px] h-[350px] lg:px-0 md:px-8 px-4 ">
        <div className="lg:w-[35%]  lg:border-r-[1px]  border-r-0 border-[#D2D2D5] bg-[#FF6A47] lg:rounded-none rounded-t-lg">
          <div className="flex justify-between py-8 px-6">
            <h4 className="text-[#000] font-normal md:text-[30px] text-[24px] aeionik-font">
              Get in touch
            </h4>
            <div className="pt-3 cursor-pointer">
              <Image
                src={require("../../assets/about-us/vector.png")}
                alt=""
                className="md:w-[23px] w-[20px] md:h-[23px] h-[20px]"
              />
            </div>
          </div>
        </div>
        {/* Desktop image */}
        {/* Get touch left Image  */}
        <div className="w-[58%]  banner_img lg:block hidden border-b-[1px] border-[#D2D2D5]"></div>
        {/* Get touch right Image */}
        <div className="w-[7%]  banner_img2 lg:block hidden"></div>
        {/* Tab & Mobile image */}
        <div className="w-[100%] h-[100%]  banner_img3 lg:hidden block rounded-b-lg"></div>
      </div>
    </>
  );
};
export default Banner;
