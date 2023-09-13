"use client";
import Image from "next/image";
const Banner = () => {
  return (
    <>
    {/* contact section start here */}
      <div className="flex lg:flex-row flex-col lg:border-b-[1px] border-[#D2D2D5]">
        <div className="lg:w-[50%] w-full lg:border-r-[1px] border-[#D2D2D5] ">
          {/* content section */}
          <div className="lg:mt-24 lg:border-t-[1px] border-[#D2D2D5] lg:py-0 py-10">
            <h1 className="sm:px-8 px-4 sm:py-12 py-8 2xl:text-[57px] xl:text-[48px] md:text-[40px] text-[30px] text-[#000] font-normal aeionik-font md:leading-[60px] lg:text-left text-center">
              Whether you want to do the crafting or need an expertly engineered
              product, We’re ready to take flight with you on-board.
            </h1>
          </div>
        </div>
        <div className="lg:w-[50%] w-full sm:px-0 px-4 ">
          {/* contact Form section here */}
          <div className="lg:border-[0px] border-[1px] border-[#D2D2D5]">
            <div className="sm:px-8 px-4 md:pt-16 md:pb-32 sm:py-12 py-8 border-b-[1px] border-[#D2D2D5]">
              <h6 className="md:text-[30px] text-[20px] text-[#000] font-normal aeionik-font md:text-left text-center">
                Get in touch
              </h6>
            </div>
            <div className=" border-b-[1px] border-[#D2D2D5]">
              <input
                type="text"
                placeholder="Full name*"
                className="sm:p-8 p-4 w-full border-[none] xl:text-[19px] lg:text-[17px] text-[16px] text-[15px] text-[#000] font-light aeionik-font bg-[#ebebed] contact_form"
              />
            </div>
            {/* last Name */}
            <div className=" border-b-[1px] border-[#D2D2D5]">
              <input
                type="email"
                placeholder="Email address*"
                className="sm:p-8 p-4 w-full xl:text-[19px] lg:text-[17px] text-[16px] text-[15px] text-[#000] font-light aeionik-font bg-[#ebebed] contact_form"
              />
            </div>
            {/* Email Address */}
            <div className="border-b-[1px] border-[#D2D2D5]">
              <input
                type="number"
                placeholder="Phone"
                className="sm:p-8 p-4 w-full xl:text-[19px] lg:text-[17px] text-[16px] text-[15px] text-[#000] font-light aeionik-font bg-[#ebebed] contact_form"
              />
            </div>

            <div className="w-[100%] flex border-b-[1px] border-[#D2D2D5] ">
              <textarea
                cols={2}
                rows={4}
                className="w-[100%] sm:p-8 p-4 xl:text-[19px] lg:text-[17px] text-[16px] text-[15px] font-light aeionik-font text-[15px] text-[#000] bg-[#ebebed] contact_form"
                placeholder="How can we help you?"
              />
            </div>
            <div className=" flex justify-between sm:p-8 p-4 border-b-[1px] border-[#D2D2D5]">
              <label className="xl:text-[19px] lg:text-[17px] text-[16px] text-[15px] text-[#000] font-light aeionik-font ">
                Upload file (max file size is 30MB)
              </label>
              <div className="lg:py-[7px] py-[5px]">
                <Image
                  src={require("../../assets/homepage/upload.png")}
                  alt=""
                  className="lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] "
                />
              </div>
            </div>
            <div className="sm:p-8 p-4 ">
              <label className="checkbox-container text-[14px] text-[#000] font-light aeionik-font sm:pb-8 pb-4">
                <input type="checkbox" />
                <span className="checkmark"></span>I agree to the{" "}
                <span className="underline">Privacy Policy</span> and give my
                permission to process my personal data for the purposes
                specified in the Privacy Policy
              </label>
              <div className=" flex justify-between sm:p-8 p-4 bg-[#FF6A47] cursor-pointer">
                <h4 className="lg:text-[28px] md:text-[20px] text-[18px] font-normal text-[#000] aeionik-font">
                  Submit
                </h4>
                <div className="md:pt-3 pt-2 ">
                  <Image
                    src={require("../../assets/blog/arrow.png")}
                    alt=""
                    className="lg:w-[22px] lg:h-[22px] md:w-[18px] md:h-[18px] w-[15px] h-[15px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
