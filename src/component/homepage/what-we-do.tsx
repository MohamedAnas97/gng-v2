"use client";
import dynamic from "next/dynamic";

const WhatWeDo = (): any => {

  const PixiComponentWithNoSSR = dynamic(() => import("./carousel"), {
    ssr: false,
  });

  return (
    <div>
      <PixiComponentWithNoSSR />
    </div>
  );
};
export default WhatWeDo;
