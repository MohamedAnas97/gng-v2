"use client";
import Image from "next/image";
const Topic = () => {
  const topic = [
    {
      id: 1,
      subtitle: "01",
      image: require("../../assets/blog/arrow.png"),
      link: "Startups",
    },
    {
      id: 2,
      subtitle: "02",
      image: require("../../assets/blog/arrow.png"),
      link: "Fintech",
    },
    {
      id: 3,
      subtitle: "03",
      image: require("../../assets/blog/arrow.png"),
      link: "Healthtech",
    },
    {
      id: 4,
      subtitle: "04",
      image: require("../../assets/blog/arrow.png"),
      link: "Game dev",
    },
  ];
  return (
    <>
      {/* topic section start here  */}
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[50%] w-full lg:pl-32 ">
          <div className="border-l-[1px] border-[#D2D2D5] h-[100%]">
            <h3 className="lg:p-8 py-10 text-[30px] font-normal text-[#000] aeionik-font lg:text-left text-center">
              Topics
            </h3>
          </div>
        </div>
        <div className="lg:w-[50%] flex flex-wrap">
          {/* topics content start here */}
          {topic?.map((item, index) => (
            <div
              className="w-[50%] border-x-[1px] border-b-[1px] lg:border-t-[0px] border-t-[1px] border-[#D2D2D5]"
              key={index}
            >
              <div className="flex justify-between sm:p-8 p-4 ">
                <h6 className="md:text-[24px] text-[18px] font-normal text-[#000] aeionik-font">
                  {item.subtitle}
                </h6>
                <div>
                  <Image
                    src={item.image}
                    alt=""
                    className="md:w-[24px] w-[16px] md:h-[24px] h-[16px]"
                  />
                </div>
              </div>
              <div className="sm:p-8 p-4">
                <h6 className="pt-20 pb-3 md:text-[28px] text-[20px] font-normal text-[#000] aeionik-font underline">
                  {item.link}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* topic section image here */}
      <div>
        <Image
          src={require("../../assets/blog/topic-img.png")}
          alt=""
          className="h-[400px] sm:h-[100%] object-cover"
        />
      </div>
    </>
  );
};
export default Topic;
