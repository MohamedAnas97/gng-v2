"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
const MeetArch = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 670 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 669, min: 0 },
      items: 2,
    },
  };

  const work = [
    {
      id: 1,
      image: require("../../assets/about-us/souharda.png"),
      title: "#UX/UI",
      subtitle: "Souharda Mukherjee",
      content:
        " In the world of UX, user-centered design turns problems into possibilities, and visions into vibrant realities.",
    },
    {
      id: 2,
      image: require("../../assets/about-us/shoaib.jpeg"),
      title: "#Web Development",
      subtitle: "Mohammad Shoaib",
      content:
        "Front-end development is the art of blending aesthetics and functionality into digital experiences that captivate and engage.",
    },
    {
      id: 3,
      image: require("../../assets/about-us/Anas.jpeg"),
      title: "#Web Development",
      subtitle: "Mohamed Anas",
      content:
        "Front-end development transforms pixels into pathways, where design meets functionality and creativity guides user journeys.",
    },
    {
      id: 4,
      image: require("../../assets/about-us/kenan.jpeg"),
      title: "#Backend Development",
      subtitle: "Kenan Alzaidi",
      content:
        " Back-end development is the engine room where ideas become reality, and complex systems harmonize to drive user value.",
    },
    {
      id: 5,
      image: require("../../assets/about-us/marium.jpeg"),
      title: "#Marketing Manager",
      subtitle: "Marium Babar",
      content:
        " Back-end development is the engine room where ideas become reality, and complex systems harmonize to drive user value.",
    },
    {
      id: 6,
      image: require("../../assets/about-us/linto.jpeg"),
      title: "#3D Artist",
      subtitle: "Linto vattoly",
      content:
        " Back-end development is the engine room where ideas become reality, and complex systems harmonize to drive user value.",
    },
    {
      id: 7,
      image: require("../../assets/about-us/Benzy .jpeg"),
      title: "#CTO",
      subtitle: "Benzy Aman",
      content:
        " Back-end development is the engine room where ideas become reality, and complex systems harmonize to drive user value.",
    },
    {
      id: 8,
      image: require("../../assets/about-us/omar.png"),
      title: "#Mobile App Development",
      subtitle: "Muhammad Omar",
      content:
        " Back-end development is the engine room where ideas become reality, and complex systems harmonize to drive user value.",
    },
    {
      id: 9,
      image: require("../../assets/about-us/rajeev.png"),
      title: "#Manager",
      subtitle: "Mr Rajeev",
      content:
        " Back-end development is the engine room where ideas become reality, and complex systems harmonize to drive user value.",
    },
    {
      id: 10,
      image: require("../../assets/about-us/shakara.jpeg"),
      title: "#Marketing Sales",
      subtitle: "Shakara",
      content:
        " Back-end development is the engine room where ideas become reality, and complex systems harmonize to drive user value.",
    },
    {
      id: 11,
      image: require("../../assets/about-us/noor.png"),
      title: "#Blockchain Development",
      subtitle: "Noor Mohammad",
      content:
        " Back-end development is the engine room where ideas become reality, and complex systems harmonize to drive user value.",
    },
    {
      id: 12,
      image: require("../../assets/about-us/shelly.jpeg"),
      title: "#CEO",
      subtitle: "Mr Shelley",
      content:
        " Back-end development is the engine room where ideas become reality, and complex systems harmonize to drive user value.",
    },
    // {
    //   id: 13,
    //   image: require("../../assets/about-us/web1.png"),
    //   title: "#Game Development",
    //   subtitle: "Sathiya Priyan",
    //   content:
    //     " Back-end development is the engine room where ideas become reality, and complex systems harmonize to drive user value.",
    // },
  ];

  return (
    <>
      {/* Meet the Architect of the future */}
      <div className="px-8 lg:pt-20 lg:pb-6 py-10">
        <h1 className="lg:text-[56px] md:text-[40px] text-[30px] font-normal text-[#000] md:leading-[60px] aeionik-font lg:text-left text-center">
          Meet the Architects’ of the Future
        </h1>
        <p className="lg:text-[24px] text-[18px] font-light text-[#000] aeionik-font py-4 lg:text-left text-center">
          Meet your problem solvers and web solution experts, the people who
          bring your vision to life.
        </p>
      </div>
      <div className="border-y-[1px] border-[#D2D2D5] h-[auto]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          arrows={false}
        >
          {/* #UX/UI */}
          {work?.map((item, index) => (
            <div className=" " key={index}>
              <div className="lg:p-8 md:p-6 p-3 border-r-[1px] border-[#D2D2D5] 2xl:h-[100%] xl:h-[650px] lg:h-[580px] lg:h-[560px] md:h-[520px] h-[500px] ">
                <div>
                  <Image src={item.image} alt="" className=" object-fit" />
                </div>
                <h6 className="xl:text-[20px] lg:text-[18px] md:text-[15px] text-[13px] font-normal text-[#52002D] aeionik-font xl:pt-5 pt-3">
                  {item.title}
                </h6>
                <h4 className="xl:text-[24px] md:text-[20px] text-[16px] font-normal text-[#000] aeionik-font xl:pt-5 pt-3">
                  {item.subtitle}
                </h4>
                <p className="xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-light text-[#000] aeionik-font xl:pt-5 pt-3 ">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default MeetArch;
