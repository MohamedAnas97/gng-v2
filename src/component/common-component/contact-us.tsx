"use client";
import Image from "next/image";
import Upload from "../../assets/homepage/upload.png";
import { usePathname } from "next/navigation";

const ContactUs = () => {
  const pathname = usePathname();
  console.log("sssss");
  return (
    <>
      {/* contact us start here */}
      <div className="lg:pl-32 lg:pr-0 sm:px-8 px-4 lg:pt-0 pt-10">
        <div className="w-[100%] lg:border-t-0 border-t-[1px] border-[#D2D2D5]">
          <div className="2xl:w-[75%] lg:w-[85%]  border-x-[1px] border-[#D2D2D5] lg:pt-32">
            <h1 className="py-20 lg:pl-8 lg:text-left text-center text-[56px] font-normal leading-[56px] aeionik-font">
              Contact us
            </h1>
          </div>
        </div>
        {/* form start here */}
        <form className="w-[100%]">
          <div className="flex lg:flex-row flex-col ">
            <div className="2xl:w-[75%] lg:w-[85%] border-[1px] border-[#D2D2D5]">
              <div className="flex flex-wrap">
                <div className="md:border-r-[1px] md:w-[50%] w-[100%] border-[#D2D2D5]">
                  {/* first Name */}
                  <div className="  border-b-[1px] border-[#D2D2D5]">
                    <input
                      type="text"
                      placeholder="First name*"
                      className="md:p-9 p-7 w-full border-[none] lg:text-[20px] md:text-[17px] text-[15px] text-[#000] font-light aeionik-font bg-[#ebebed] contact_form"
                    />
                  </div>
                  {/* last Name */}
                  <div className=" border-b-[1px] border-[#D2D2D5]">
                    <input
                      type="text"
                      placeholder="Last name*"
                      className="md:p-9 p-7 w-full lg:text-[20px] md:text-[17px] text-[15px] text-[#000] font-light aeionik-font bg-[#ebebed] contact_form"
                    />
                  </div>
                  {/* Email Address */}
                  <div className="border-b-[1px] border-[#D2D2D5]">
                    <input
                      type="text"
                      placeholder="Email address*"
                      className="md:p-9 p-7 w-full lg:text-[20px] md:text-[17px] text-[15px] text-[#000] font-light aeionik-font bg-[#ebebed] contact_form"
                    />
                  </div>
                </div>
                <div className="md:w-[50%] w-[100%]">
                  {/* phone  */}
                  <div className="border-b-[1px] border-[#D2D2D5]">
                    <input
                      type="phone"
                      placeholder="Phone"
                      className="md:p-9 p-7 w-full lg:text-[20px] md:text-[17px] text-[15px] text-[#000] font-light aeionik-font bg-[#ebebed] contact_form"
                    />
                  </div>
                  {/* Estimated budget */}
                  <div className="border-b-[1px] border-[#D2D2D5]">
                    <input
                      type="text"
                      placeholder="Estimated budget*"
                      className="md:p-9 p-7 w-full lg:text-[20px] md:text-[17px] text-[15px] text-[#000] font-light aeionik-font bg-[#ebebed] contact_form"
                    />
                  </div>
                  {/* Upload file */}
                  <div className=" flex justify-between md:p-8 p-7 border-b-[1px] border-[#D2D2D5]">
                    <label className="xl:text-[20px] lg:text-[17px] text-[16px] text-[15px] text-[#000] font-light aeionik-font ">
                      Upload file (max file size is 30MB)
                    </label>
                    <div className="lg:py-[7px] py-[5px]">
                      <Image
                        src={Upload}
                        alt=""
                        className="lg:w-[24px] lg:h-[24px] w-[23px] h-[23px] "
                      />
                    </div>
                  </div>
                </div>
                {/* Type your Message */}
                <div className="w-[100%] flex border-b-[1px] border-[#D2D2D5] ">
                  <textarea
                    cols={2}
                    rows={4}
                    className="w-[100%] md:px-9 px-7 2xl:py-10 md:py-8 py-7 lg:text-[20px] md:text-[17px] font-light aeionik-font text-[15px] text-[#000] bg-[#ebebed] contact_form"
                    placeholder="Type your message*"
                  />
                </div>
                <div className="flex justify-between w-[100%]">
                  <div className="2xl:w-[84%] lg:w-[74%] 2xl:p-8 2xl:pr-0 sm:p-7 p-3 ">
                    <label className="checkbox-container text-[14px] text-[#000] font-light aeionik-font ">
                    <input type="checkbox"  />
                      <span className="checkmark"></span>
                     
                      I agree to the{" "}
                      <span className="underline">Privacy Policy</span> and give
                      my permission to process my personal data for the purposes
                      specified in the Privacy Policy
                     
                    </label>
                  </div>
                  <div
                    className={`2xl:w-[16%] w-[26%]  ${
                      pathname === "/about-us" ? "bg-[#FF6A47]" : "bg-[#3155FF]"
                    } lg:block hidden`}
                  ></div>
                </div>
              </div>
            </div>
            {/* send button */}
            <div className="2xl:w-[25%] lg:w-[15%] flex flex-col justify-end 2xl:mb-[86px] mb-[100px] ">
              <div
                className={`2xl:py-[87px] lg:py-[78px] md:py-8 py-4 ${
                  pathname === "/about-us" ? "bg-[#FF6A47]" : "bg-[#3155FF]"
                }  text-center`}
              >
                <button
                  className={`${
                    pathname === "/about-us" ? "text-[#000]" : "text-[#fff]"
                  } md:text-[20px] text-[15px] font-normal aeionik-font`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactUs;
