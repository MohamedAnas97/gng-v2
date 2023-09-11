"use client";
import Image from "next/image";
import Star from "../../assets/homepage/star.png";
import Carousel from "react-multi-carousel";
import Video from "../../shared/video";

const Banner = () => {
  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {/* banner video */}
      <div className="relative">
        <Video videoUrl={require("../../assets/video/home.mp4")} />
        {/* video subtitle */}
        <div className="absolute bottom-0 video_content">
          <p className="text-[#fff] text-center 2xl:px-48 py-16 xl:px-36 lg:px-20 px-10 uppercase xl:text-[18px] lg:text-[16px] text-[14px] font-normal plusjakarta video_content">
            You have an idea, we have the talent and resources to turn it into
            reality. G&G Innovations is a software development company elevating
            brands through ground-breaking user experience and disruptive
            digital products. WE’RE WITH YOU FROM CONCEPTUALISATION TO
            DEPLOYMENT & BEYOND
          </p>
        </div>
      </div>

      {/*Carosuel desktop size start here */}
      <div className="lg:block hidden bg-[#EBEBED]">
        <div className="flex justify-around pt-2 px-8 ">
          <h2 className="2xl:text-[49px] xl:text-[36px] text-[24px] font-normal text-[#000] 2xl:tracking-[-5px] xl:tracking-[-3px] tracking-[-2px] oranienbaum xl:leading-[56px] m-0 ">
            UX/UI DESIGN
          </h2>
          <div className="xl:pt-3 pt-1 ">
            <Image
              src={Star}
              alt=""
              className="xl:w-[32px] xl:h-[32px] w-[22px] h-[22px] "
            />
          </div>
          <h2 className="2xl:text-[49px] xl:text-[36px] text-[24px] font-normal text-[#000] 2xl:tracking-[-5px] xl:tracking-[-3px] tracking-[-2px] oranienbaum xl:leading-[56px] m-0 ">
            METAVERSE
          </h2>
          <div className="xl:pt-3 pt-1">
            <Image
              src={Star}
              alt=""
              className="xl:w-[32px] xl:h-[32px] w-[22px] h-[22px] m-0"
            />
          </div>
          <h2 className="2xl:text-[49px] xl:text-[36px] text-[24px] font-normal text-[#000] 2xl:tracking-[-5px] xl:tracking-[-3px] tracking-[-2px] oranienbaum xl:leading-[56px] m-0">
            GAME DEVELOPMENT
          </h2>
          <div className="xl:pt-3 pt-1">
            <Image
              src={Star}
              alt=""
              className="xl:w-[32px] xl:h-[32px] w-[22px] h-[22px] m-0"
            />
          </div>
          <h2 className="2xl:text-[49px] xl:text-[36px] text-[24px] font-normal text-[#000] 2xl:tracking-[-5px] xl:tracking-[-3px] tracking-[-2px] oranienbaum xl:leading-[56px] m-0">
            BLOCKCHAIN
          </h2>
          <div className="xl:pt-3 pt-1">
            <Image
              src={Star}
              alt=""
              className="xl:w-[32px] xl:h-[32px] w-[22px] h-[22px] m-0"
            />
          </div>
          <h2 className="2xl:text-[49px] xl:text-[36px] text-[24px] font-normal text-[#000] 2xl:tracking-[-5px] xl:tracking-[-3px] tracking-[-2px] oranienbaum xl:leading-[56px] m-0 ">
            MOBILE APP
          </h2>
          <div className="xl:pt-3 pt-1">
            <Image
              src={Star}
              alt=""
              className="xl:w-[32px] xl:h-[32px] w-[22px] h-[22px] m-0"
            />
          </div>
          <h2 className="2xl:text-[49px] xl:text-[36px] text-[24px] font-normal text-[#000] 2xl:tracking-[-5px] xl:tracking-[-3px] tracking-[-2px] oranienbaum xl:leading-[56px] m-0">
            WEBSITE
          </h2>
        </div>
      </div>

      {/*Carosuel Tab size start here  */}
      <div className="lg:hidden sm:block hidden bg-[#EBEBED]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={false}
        >
          <div className="flex justify-around pt-2 px-8 ">
            <h2 className="md:text-[24px] text-[22px] ] font-normal text-[#000] sm:tracking-[-1px] oranienbaum">
              UX/UI DESIGN
            </h2>
            <div className="pt-1">
              <Image src={Star} alt="" className="w-[20px] h-[20px]" />
            </div>
            <h2 className=" md:text-[24px] text-[22px]  font-normal text-[#000] sm:tracking-[-1px]] oranienbaum">
              METAVERSE
            </h2>
            <div className="pt-1">
              <Image src={Star} alt="" className="w-[20px] h-[20px] " />
            </div>
            <h2 className="md:text-[24px] text-[22px]  font-normal text-[#000] sm:tracking-[-1px] oranienbaum">
              GAME DEVELOPMENT
            </h2>
          </div>
          <div className="flex justify-around pt-2 px-8 ">
            <h2 className="md:text-[24px] text-[22px]  font-normal text-[#000] sm:tracking-[-1px] oranienbaum">
              BLOCKCHAIN
            </h2>
            <div className="pt-1 ">
              <Image src={Star} alt="" className="w-[20px] h-[20px] " />
            </div>
            <h2 className="md:text-[24px] text-[22px]  font-normal text-[#000] sm:tracking-[-1px] oranienbaum">
              MOBILE APP
            </h2>
            <div className="pt-1 ">
              <Image src={Star} alt="" className="w-[20px] h-[20px] " />
            </div>
            <h2 className="md:text-[24px] text-[22px] font-normal text-[#000] sm:tracking-[-1px] oranienbaum">
              WEBSITE
            </h2>
          </div>
        </Carousel>
      </div>
      {/*Carosuel mobile size start here  */}
      <div className="lg:hidden block sm:hidden bg-[#EBEBED]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={false}
        >
          <div className="flex justify-around pt-2 px-4 ">
            <h2 className="text-[19px]  font-normal text-[#000] sm:tracking-[-1px] oranienbaum">
              UX/UI DESIGN
            </h2>
            <div className="pt-1">
              <Image src={Star} alt="" className="w-[20px] h-[20px]" />
            </div>
            <h2 className="text-[19px] font-normal text-[#000] sm:tracking-[-1px]] oranienbaum">
              METAVERSE
            </h2>
          </div>

          <div className="flex justify-around pt-2 px-4 ">
            <h2 className="text-[19px] font-normal text-[#000] sm:tracking-[-1px] oranienbaum">
              BLOCKCHAIN
            </h2>
            <div className="pt-1">
              <Image src={Star} alt="" className="w-[20px] h-[20px] " />
            </div>
            <h2 className="text-[19px] font-normal text-[#000] sm:tracking-[-1px] oranienbaum">
              GAME DEVELOPMENT
            </h2>
          </div>
          <div className="flex justify-around pt-2 px-4 ">
            <h2 className="text-[19px]  font-normal text-[#000] sm:tracking-[-1px] oranienbaum">
              MOBILE APP
            </h2>
            <div className="pt-1 ">
              <Image src={Star} alt="" className="w-[20px] h-[20px] " />
            </div>
            <h2 className="text-[19px]  font-normal text-[#000] sm:tracking-[-1px] oranienbaum">
              WEBSITE
            </h2>
          </div>
        </Carousel>
      </div>
    </>
  );
};
export default Banner;
