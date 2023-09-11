"use client";
import Image from "next/image";
import Arrow from "../../assets/homepage/arrow.png";
import Logo from "../../assets/logo/logo-w.png";
const Footer = () => {
  return (
    <>
      {/* Footer start here */}
      <div className="lg:pl-32 bg-[#29292B] ">
        {/* footer up */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-[63%] pt-16 md:pb-32 pb-16 md:border-x-[1px] border-b-[1px] border-[#434345]">
            <div className="w-full 2xl:w-[50%] md:w-[80%] px-8 ">
              <h4 className="text-[29px] font-extralight aeionik-font text-[#fff] ">
                Subscribe to our newsletter to stay in touch with the latest!
              </h4>
              <div className="flex border-b-[1px] border-[#757575] pt-2 text-[#434345]">
                <input
                  type="text"
                  placeholder="Email address*"
                  className="w-[100%] py-2 text-[18px] font-extralight aeionik-font  bg-[#29292B] border_color email_form"
                />
                <div className="mt-2 cursor-pointer">
                  <Image src={Arrow} alt="" className="w-[22px] h-[22px] " />
                </div>
              </div>
              <div className="py-3">
                <label className="checkbox-container2 text-[15px] text-[#757575] font-extralight aeionik-font">
                <input type="checkbox" />
                  <span className="checkmark"></span>
                  {" "}
                  I agree to the{" "}
                  <span className="underline">Privacy Policy</span> and give my
                  permission to process my personal data for the purposes
                  specified in the Privacy Policy
                  
                </label>
              </div>
            </div>
          </div>
          {/* About page link start here */}
          <div className="w-full lg:w-[37%] md:pt-16 md:pb-32 md:border-b-[1px] border-[#434345]">
            <ul className="px-8 text-center md:text-left md:border-b-0 border-b-[1px] border-[#434345] md:py-0 py-4">
              <li className="text-[18px] text-[#757575] font-extralight aeionik-font py-6 cursor-pointer">
                About
              </li>
              <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 cursor-pointer">
                Company
              </li>
              <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 cursor-pointer">
                Team
              </li>
              <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 cursor-pointer">
                Careers
              </li>
              <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
        {/* footer down */}
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full lg:w-[63%] md:py-16 py-6 md:border-x-[1px] border-b-[1px] border-[#434345]">
            <div className="px-8 flex md:justify-start justify-center ">
              <Image src={Logo} alt="" className="md:w-60 w-48 md:h-12 h-10" />
            </div>
          </div>
          {/* social link start here */}
          <div className="lg:w-[37%] w-full md:py-16 py-6 border-b-[1px] border-[#434345]">
            <div className="flex 2xl:flex-row flex-col justify-between">
              <ul className="px-8 text-center md:text-left">
                <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 cursor-pointer">
                  Linkedin
                </li>
                <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 cursor-pointer">
                  Instagram
                </li>
                <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 cursor-pointer">
                  Facebook
                </li>
                <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 cursor-pointer">
                  Youtube
                </li>
              </ul>
              <ul className="px-8 text-center md:text-left">
                <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 ">
                  UAE: +971 (04) 334-9500
                </li>
                <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 ">
                  1113, Grosvenor Business Tower, Barsha Heights
                </li>
                <li className="text-[18px] text-[#fff] font-extralight aeionik-font py-3 ">
                  Dubai, UAE
                </li>
              </ul>
            </div>
            <div className="flex 2xl:flex-row flex-col justify-between px-8">
              <div className="text-center md:text-left">
                <h6 className="text-[16px] text-[#fff] font-extralight aeionik-font py-3 ">
                  © 2023. G&G Infotech. All Rights Reserved.
                </h6>
              </div>
              <div className="flex md:justify-start justify-center">
                <button className="text-[16px] text-[#fff] font-extralight aeionik-font py-3 underline">
                  Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
