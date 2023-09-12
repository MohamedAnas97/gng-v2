"use client";
import Image from "next/image";
import Logo from "../../assets/logo/logo.png";
import Link from "next/link";
import AnimateHeight from "react-animate-height";
import { useState } from "react";

const Header = () => {
  const [divheight, setDivheight]: any = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className=" lg:block hidden">
        <div className="flex justify-between bg-[#EBEBED] border-y-[1px] border-[#D2D2D5]  ">
          <div className="lg:pl-12 pl-3 pt-7 pb-3 w-[35%] border-r-[1px] border-[#D2D2D5]">
            <Link href={"/"}>
              <Image src={Logo} alt="" className="md:w-60 w-48 md:h-12 h-10" />
            </Link>
          </div>
          {/* desktop links */}
          <div className="flex w-[65%] justify-end ">
            <ul className="py-7 xl:pr-10 pr-5 xl:pr-14 pr-8  text-center">
              <Link href={"/our-work"}>
                {" "}
                <li className="inline 2xl:pr-16 pr-7 text-[#000] 2xl:text-[19px] xl:text-[17px] text-[16px] font-normal cursor-pointer aeionik-font">
                  How we work
                </li>
              </Link>
              <li className="inline 2xl:px-19 px-9 text-[#000] 2xl:text-[19px] xl:text-[17px] text-[16px] font-normal cursor-pointer aeionik-font">
                Portfolio
              </li>
              <Link
                href={"/blog"}
                onClick={() => {
                  setDivheight(0);
                }}
              >
                <li className="inline 2xl:px-20 px-9  text-[#000] 2xl:text-[19px] xl:text-[17px] text-[16px] font-normal cursor-pointer aeionik-font">
                  Blog
                </li>
              </Link>
              <Link href={"/about-us"}>
                <li className="inline 2xl:pl-15 pl-7 text-[#000] 2xl:text-[19px] xl:text-[17px] text-[16px] font-normal cursor-pointer aeionik-font">
                  About us
                </li>
              </Link>
            </ul>
            <div className="bg-[#FF6A47] lg:block hidden ">
              <Link href={"/contact-us"}
                onClick={() => {
                  setDivheight(0);
                }}>
                <button className="xl:px-12 px-10 py-7 text-[#000] 2xl:text-[19px] xl:text-[17px] text-[16px] font-normal aeionik-font">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Responsive  Tab & Mobile */}
      <div className="lg:hidden block">
        <div className="flex justify-between  border-y-[1px] border-[#D2D2D5]">
          <div className="lg:pl-12 pl-3 pt-7 pb-3 lg:w-[35%]">
            <Link href={"/"}>
              <Image src={Logo} alt="" className="md:w-60 w-48 md:h-12 h-10" />
            </Link>
          </div>
          {/* hamburger for mobile and medium screen */}
          <div
            className="px-8 pt-10 pb-3 "
            aria-expanded={divheight !== 0}
            aria-controls="example-panel"
            onClick={() => {
              setDivheight(divheight === 0 ? "auto" : 0);
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <Image
                src={require("../../assets/homepage/close.png")}
                alt=""
                className="h-[20px] w-[20px] cursor-pointer "
              />
            ) : (
              <Image
                src={require("../../assets/homepage/humberger.png")}
                alt=""
                className="w-[30px] h-[14px] cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="absolute w-full bg-[#EBEBED]">
          <AnimateHeight id="example-panel" duration={500} height={divheight}>
            <ul>
              <Link
                href={"/our-work"}
                onClick={() => {
                  setDivheight(0);
                }}
              >
                {" "}
                <li className="md:px-5 md:py-5 py-4 px-4 text-[#000]  text-[18px] font-normal cursor-pointer aeionik-font border-b-[1px] border-[#D2D2D5]">
                  How we work
                </li>
              </Link>
              <li className="md:px-5 md:py-5 py-4 px-4  text-[#000]  text-[18px] font-normal cursor-pointer aeionik-font border-b-[1px] border-[#D2D2D5]">
                Portfolio
              </li>
              <Link
                href={"/blog"}
                onClick={() => {
                  setDivheight(0);
                }}
              >
                <li className="md:px-5 md:py-5 py-4 px-4 text-[#000]  text-[18px] font-normal cursor-pointer aeionik-font border-b-[1px] border-[#D2D2D5]">
                  Blog
                </li>
              </Link>
              <Link
                href={"/about-us"}
                onClick={() => {
                  setDivheight(0);
                }}
              >
                <li className="md:px-5 md:py-5 py-4 px-4 text-[#000]  text-[18px] font-normal cursor-pointer aeionik-font border-b-[1px] border-[#D2D2D5]">
                  About us
                </li>
              </Link>
            </ul>
          </AnimateHeight>
        </div>
      </div>
    </>
  );
};
export default Header;
