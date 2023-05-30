import Image from "next/image";
import React, { useState } from "react";
import coinbox from "../public/coinbox.png";

export default function GoUp() {
  const [show, setShow] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const goUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {show && (
        <div className="goUp cursor-pointer" onClick={goUp}>
          <Image
            src={coinbox}
            alt="coinbox"
            className=" fixed bottom-0 right-0 m-[1.5rem] z-[5]"
            width={60}
            height={60}
          />
        </div>
      )}
    </>
  );
}
