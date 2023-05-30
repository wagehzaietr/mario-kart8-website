import React from "react";
import star from "../public/star.png";
import Image from "next/image";

export default function Star({ styles }) {
  return (
    <Image
      src={star}
      alt="logo"
      width={1920}
      height={1080}
      className={styles}
    />
  );
}
