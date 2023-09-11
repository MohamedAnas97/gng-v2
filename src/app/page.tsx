import Banner from "@/component/homepage/banner";
import WhatWeDo from "@/component/homepage/what-we-do";
import HowWeWork from "@/component/homepage/how-we-work";
import Language from "@/component/homepage/language";
import OurWork from "@/component/homepage/our-work";
import ContactUs from "@/component/common-component/contact-us";

export default function Home() {
  return (
    <>
      <Banner />
      <WhatWeDo />
      <HowWeWork />
      <Language />
      <OurWork />
      <ContactUs />
    </>
  );
}
