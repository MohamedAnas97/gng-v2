"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
const Editor = () => {
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
      image: require("../../assets/blog/editor.png"),
      subtitle: "Women in tech: Tips for a successful career change",
      content:
        "Nana Patekar, a marketer-turned- project-manager, retraces her path to a successful tech career at G&G.",
      date: "May 5, 2023",
    },
    {
      id: 2,
      image: require("../../assets/blog/editor1.png"),
      subtitle: "G&G leader shares her success as a woman in tech",
      date: "May 5, 2023",
    },
    {
      id: 3,
      image: require("../../assets/blog/editor.png"),
      subtitle: "Women in tech: Tips for a successful career change",
      content:
        "Nana Patekar, a marketer-turned- project-manager, retraces her path to a successful tech career at G&G.",
      date: "May 5, 2023",
    },
    {
      id: 4,
      image: require("../../assets/blog/editor1.png"),
      subtitle: "G&G leader shares her success as a woman in tech",
      date: "May 5, 2023",
    },
  ];
  return (
    <>
      {/* Editor div start here */}
      <div className="p-8">
        <h1 className="2xl:text-[56px] md:text-[45px] text-[30px] font-normal text-[#000] aeionik-font lg:pt-20 lg:pb-2 py-10 lg:text-left text-center">
          Editors’ picks
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
          {/* Editor content start here*/}
          {work?.map((item, index) => (
            <div key={index}>
              <div className="lg:p-8 md:p-6 p-3 border-r-[1px] border-[#D2D2D5] 2xl:h-[100vh] xl:h-[850px] lg:h-[700px] md:h-[670px] h-[620px]  ">
                <div>
                  <Image src={item.image} alt="" className=" object-fit" />
                </div>
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
export default Editor;
