"use client";
import Image from "next/image";
const Contact = () => {
  return (
    //contact form
    <div className="lg:pl-32">
      <div className="w-full lg:pt-32 border-l-[1px] border-[#D2D2D5]">
        {/* heading section */}
        <h1 className="sm:px-8 px-4 py-14 lg:text-[56px] md:text-[40px] text-[30px] font-normal text-[#000] aeionik-font md:leading-[60px] leading-[36px] ">
          Want our latest stories sent straight to your inbox?
        </h1>
        {/* What your email address */}
        <div className="border-y-[1px] border-[#D2D2D5]">
          <input
            type="text"
            placeholder="What's your email address?"
            className="sm:px-8 sm:py-6 p-4 w-full lg:text-[20px] md:text-[18px] text-[16px] font-light aeionik-font bg-[#ebebed] contact_form"
          />
        </div>
        {/* label box start here */}
        <div className="sm:px-8 sm:py-6 p-4 ">
          <label className="checkbox-container sm:text-[15px] text-[13px] text-[#000] font-light aeionik-font ">
            <input type="checkbox" />
            <span className="checkmark"></span>I agree to the{" "}
            <span className="underline">Privacy Policy</span> and give my
            permission to process my personal data for the purposes specified in
            the Privacy Policy
          </label>
        </div>
        {/* send button here  */}
        <div className="w-full flex justify-between sm:p-8 p-4 bg-[#FF6A47] cursor-pointer">
          <h4 className="md:text-[28px] text-[20px] font-normal text-[#000] aeionik-font">
            Send
          </h4>
          <div className="md:pt-3 pt-2 ">
            <Image
              src={require("../../assets/blog/arrow.png")}
              alt=""
              className="md:w-[22px] w-[16px] md:h-[22px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
