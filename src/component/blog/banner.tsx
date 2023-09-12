"use client";
import Image from "next/image";
const Banner = () => {
  const blog = [
    {
      key: 1,
      title: "#Development",
      subtitle: "Best practices for building a software development team",
      image: require("../../assets/blog/arrowimg.png"),
      content:
        "Top-notch dev teams feature the right blend of hard and soft skills, plus ace project management — and they know when it’s the right time to grow their ranks.",
    },
    {
      key: 2,
      title: "#Development",
      subtitle: "The future of AI in software development",
      image: require("../../assets/blog/pinkarrow.png"),
      content:
        "AI won’t replace engineers anytime soon, but it can become that elusive 10x productivity multiplier the industry has been talking about for years.",
    },
    {
      key: 3,
      title: "#Fintech",
      subtitle: "How to unlock new opportunities for DeFi in real estate",
      image: require("../../assets/blog/pinkarrow.png"),
      content:
        "Decentralized finance (DeFi) is revolutionizing real estate through innovative platforms, mortgage advancements, and transformative technology.",
    },
  ];
  return (
    <>
      {/* blog banner section start here */}
      <div className="flex lg:flex-row flex-col">
        {/* left side content */}
        <div className="lg:w-[50%] w-full lg:border-r-[1px] border-b-[1px] border-[#D2D2D5]">
          <div className="sm:p-8 p-4">
            <div>
              <Image src={require("../../assets/blog/blogimg.png")} alt="" />
            </div>
            <h6 className="2xl:text-[20px] sm:text-[18px] text-[16px] font-normal text-[#52002D] aeionik-font py-3">
              #Development
            </h6>
            <h2 className="2xl:text-[47px] md:text-[40px] text-[30px] font-normal text-[#000] aeionik-font py-2 md:leading-[56px] ">
              The importance of soft skills among developers
            </h2>
            <div className="flex lg:flex-row flex-row-reverse justify-between py-4">
              <div className="lg:pt-14 md:pt-8 pt-6 cursor-pointer">
                <Image
                  src={require("../../assets/blog/arrowimg.png")}
                  alt=""
                  className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]"
                />
              </div>
              <div className="2xl:w-[45%] lg:w-[60%] w-[80%] md:pb-0 pb-2">
                <p className="2xl:text-[20px] sm:text-[18px] text-[16px] font-light text-[#000] aeionik-font leading-[28px]">
                  Engineers who know how to listen, detect nuance, and act with
                  empathy are critical to a nimble and efficient software
                  development process.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right side content */}
        <div className="lg:w-[50%] w-full">
          {/* Development */}
          {blog?.map((item, index) => (
            <div
              className="flex md:flex-row flex-col justify-between sm:p-8 p-4 border-b-[1px] border-[#D2D2D5]"
              key={index}
            >
              <h6 className="2xl:text-[20px] sm:text-[18px] text-[16px] font-normal text-[#52002D] aeionik-font">
                {item.title}
              </h6>
              <div className="md:w-[65%] w-full md:pb-20 pb-6">
                <div className="flex justify-between">
                  <div className="w-[80%] ">
                    <h3 className="2xl:text-[24px] sm:text-[22px] text-[18px] font-light text-[#000] aeionik-font underline">
                      {item.subtitle}
                    </h3>
                  </div>
                  <div className="cursor-pointer">
                    <Image
                      src={item.image}
                      alt=""
                      className="md:w-[50px] w-[40px] md:h-[50px] h-[40px]"
                    />
                  </div>
                </div>
                <p className="2xl:text-[20px] sm:text-[18px] text-[16px] font-light text-[#000] aeionik-font leading-[28px] py-3">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Banner;
