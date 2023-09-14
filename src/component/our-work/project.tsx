"use client";
import Image from "next/image";
const Project = () => {
  const project = [
    {
      id: 1,
      title: "Gold Souk",
      subtitle: "Next- Commerce",
      image: require("../../assets/our-work/gold.png"),
    },
    {
      id: 2,
      title: "4ever in Love",
      subtitle: "Matrimony Website & App",
      image: require("../../assets/our-work/love.png"),
    },
    {
      id: 3,
      title: "Let's Win",
      subtitle: "Blockchain based Gaming App",
      image: require("../../assets/our-work/lets.png"),
    },
  ];
  return (
    <>
      {/* Projects start here */}
      <div className="flex flex-wrap w-[100%] border-l-[2px] border-t-[1px] border-[#D2D2D5] ">
        {/* Gold souk */}
        {project?.map((item, index) => (
          <div
            className="md:w-[50%] w-[100%] border-r-[1px] border-b-[1px] border-[#D2D2D5] "
            key={index}
          >
            <div className="p-9">
              <div className="xl:py-5 py-3">
                <h1 className="text-[#000] xl:text-[52px] lg:text-[45px] sm:text-[30px] text-[25px] font-normal aeionik-font xl:leading-[56px] leading-[40px] md:text-left text-center">
                  {item.title}
                </h1>
                <h6 className="text-[#000] xl:text-[26px] sm:text-[20px] text-[18px] font-light aeionik-font leading-[39px] md:text-left text-center py-3">
                  {item.subtitle}
                </h6>
              </div>
              <div>
                <Image src={item.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Project;
