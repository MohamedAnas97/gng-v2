"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
const Trending = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
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
      image: require("../../assets/blog/image.png"),
      title: "#AR/VR",
      subtitle: "How to choose an engine for VR: Unity vs Unreal",
      content:
        " Both engines stand out as the go-to choices for VR development, but sometimes one is a better fit.",
      date: "Aug 18, 2023",
    },
    {
      id: 2,
      image: require("../../assets/blog/image2.png"),
      title: "#Data Science",
      subtitle: "How do chatbots work? Often with a little help from AI",
      content:
        " Ever wondered how chatbots work and why it seems that everyone is using them? We answer these questions in our latest blog post.",
      date: "Aug 18, 2023",
    },
    {
      id: 3,
      image: require("../../assets/blog/image.png"),
      title: "#AR/VR",
      subtitle: "How to choose an engine for VR: Unity vs Unreal",
      content:
        " Both engines stand out as the go-to choices for VR development, but sometimes one is a better fit.",
      date: "Sep 07, 2023",
    },
    {
      id: 4,
      image: require("../../assets/blog/image2.png"),
      title: "#Data Science",
      subtitle: "How do chatbots work? Often with a little help from AI",
      content:
        "Ever wondered how chatbots work and why it seems that everyone is using them? We answer these questions in our latest blog post.",
      date: "Sep 17, 2023",
    },
  ];
  return (
    <>
      {/* trending div start here */}
      <div className="p-8">
        <h1 className="2xl:text-[56px] md:text-[45px] text-[30px] font-normal text-[#000] aeionik-font lg:pt-20 lg:pb-2 py-10 lg:text-left text-center">
          Trending articles
        </h1>
      </div>
      <div className="border-y-[1px] border-[#D2D2D5]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          arrows={false}
        >
          {/* trending content start here */}
          {work?.map((item, index) => (
            <div key={index}>
              <div className="lg:p-8 md:p-6 p-3 border-r-[1px] border-[#D2D2D5] 2xl:h-[100vh] xl:h-[900px] lg:h-[750px] md:h-[720px] h-[650px]  ">
                <div>
                  <Image src={item.image} alt="" className=" object-fit" />
                </div>
                <h6 className="xl:text-[20px] lg:text-[18px] md:text-[15px] text-[14px] font-normal text-[#004051] aeionik-font xl:pt-5 pt-3">
                  {item.title}
                </h6>
                <h4 className="xl:text-[24px] md:text-[20px] text-[16px] underline font-normal text-[#000] aeionik-font xl:pt-5 pt-3">
                  {item.subtitle}
                </h4>
                <p className="xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-light text-[#000] aeionik-font xl:pt-5 pb-10 ">
                  {item.content}
                </p>
                <h6 className="lg:text-[19px] md:text-[16px] text-[14px] font-light text-[#000] aeionik-font">
                  {item.date}
                </h6>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex justify-end border-b-[1px] border-[#D2D2D5]">
        <div className="lg:w-[50%] w-full  flex justify-between sm:p-8 p-4 bg-[#FF6A47]">
          <h4 className="md:text-[28px] text-[20px] font-normal text-[#000] aeionik-font">
            View all
          </h4>
          <div className="md:pt-3 pt-2 cursor-pointer">
            <Image
              src={require("../../assets/blog/arrow.png")}
              alt=""
              className="md:w-[22px] w-[16px] md:h-[22px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Trending;
