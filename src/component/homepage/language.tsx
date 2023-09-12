const Language = () => {
  return (
    <>
      <div className="lg:pl-32 lg:pr-0 sm:px-8 px-4 ">
        {/* we speack your language */}
        <div className="flex justify-end lg:border-l-[1px] lg:border-r-0 border-x-[1px] border-b-[1px] border-[#D2D2D5]">
          <div className="lg:w-[55%] xl:p-8 lg:p-4 lg:text-left text-center">
            <h6 className="pt-10 text-[#52002D] lg:text-[28px] text-[24px] font-normal aeionik-font">
              We speak your language
            </h6>
            <h2 className="py-4 lg:px-0 px-4 text-[#000] xl:text-[56px] md:text-[40px] text-[30px] font-normal lg:leading-[60px] leading-[36px] aeionik-font">
              Wondering how well we know your industry? Curious which tech
              stacks we support?
            </h2>
            <p className="py-4 lg:px-0 px-4 text-[#000] lg:text-[22px] text-[20px] font-normal leading-[34px] aeionik-font">
              Spanning 30+ verticals and 25+ technologies, our team has designed
              and implemented innovative solutions to suit even the most unique
              needs.
            </p>
          </div>
        </div>
        {/* Expertise */}
        <div className="flex lg:flex-row flex-col justify-between lg:border-l-[1px] lg:border-r-0 border-x-[1px] border-b-[1px] border-[#D2D2D5] lg:px-8 md:py-14 py-8">
          <h4 className="text-[#52002D] 2xl:text-[28px] xl:text-[24px] text-[20px] font-normal aeionik-font py-2 lg:text-left text-center">
            Expertise
          </h4>
          <div className="lg:w-[55%] flex md:flex-row flex-col lg:justify-between justify-evenly xl:px-8 px-4 ">
            <ul className="lg:w-[55%] md:w-[40%] w-full md:text-left text-center">
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Software development
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Web development
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Mobile development
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                UI/UX Prototyping
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Game development
              </li>
            </ul>
            <ul className="lg:w-[55%] md:w-[40%] w-full md:text-left text-center">
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Blockchain
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                AR/VR
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Metaverse
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Artificial intelligence
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[23px] text-[19px] font-normal aeionik-font py-2">
                Avatar Customization
              </li>
            </ul>
          </div>
        </div>
        {/* Industries */}
        <div className="flex lg:flex-row flex-col justify-between lg:border-l-[1px] lg:border-r-0 border-x-[1px] border-b-[1px] border-[#D2D2D5] lg:px-8 md:py-14 py-8">
          <h4 className="text-[#52002D] 2xl:text-[28px] xl:text-[24px] text-[20px] font-normal aeionik-font py-2 lg:text-left text-center">
            Industries
          </h4>
          <div className="lg:w-[55%] flex md:flex-row flex-col lg:justify-between justify-evenly xl:px-8 px-4 md:text-left text-center">
            <ul className="lg:w-[55%] md:w-[40%] w-full">
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Fintech
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Healthtech
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Edtech
              </li>
            </ul>
            <ul className="lg:w-[55%] md:w-[40%] w-full">
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Ecommerce
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Real estate
              </li>
              <li className="text-[#000] 2xl:text-[28px] xl:text-[24px] text-[19px] font-normal aeionik-font py-2">
                Marketing/Adtech
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Language;
