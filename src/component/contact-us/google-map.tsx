"use client";
import Image from "next/image";
const GoogleMap = () => {
  return (
    <>
      <div className="sm:px-8 px-4 lg:pt-40 lg:pb-14 py-16">
        <h1 className="2xl:text-[70px] xl:text-[56px] text-[40px] font-normal text-[#000] aeionik-font xl:leading-[70px] lg:text-left text-center ">
          You can find us at
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col border-y-[1px] border-[#D2D2D5] ">
        <div className="lg:w-[50%] w-full">
          <div className="flex justify-between sm:p-8 p-4 border-b-[1px] border-[#D2D2D5]">
            <h4 className="xl:text-[28px] md:text-[24px] text-[20px] font-normal text-[#000] aeionik-font">
              UAE
            </h4>
            <div className="xl:pt-6 pt-4 cursor-pointer">
              <Image
                src={require("../../assets/contact/mins.png")}
                alt=""
                className="xl:w-[30px] md:w-[20px] w-[18px] h-[3px]"
              />
            </div>
          </div>
          <div className="sm:px-8 px-4 py-10">
            <h6 className="md:text-[22px] text-[18px] font-normal text-[#52002D] aeionik-font">
              Dubai
            </h6>
            <p className="md:text-[20px] text-[16px] font-light text-[#52002D] aeionik-font">
              1113 Grosvenor Business Tower, 11th <br /> Floor, Phone: +971 (04)
              334 9500
            </p>
          </div>
          <div className="flex justify-between sm:p-8 p-4 border-y-[1px] border-[#D2D2D5]">
            <h4 className="xl:text-[28px] md:text-[24px] text-[20px] font-normal text-[#000] aeionik-font">
              INDIA
            </h4>
            <div className="cursor-pointer xl:pt-0 pt-1">
              <Image
                src={require("../../assets/contact/plus.png")}
                alt=""
                className="xl:w-[30px] md:w-[20px] w-[18px] xl:h-[36px] md:h-[26px] h-[22px]"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] w-full">
          <Image src={require("../../assets/contact/map.png")} alt="" />
        </div>
      </div>
    </>
  );
};
export default GoogleMap;
