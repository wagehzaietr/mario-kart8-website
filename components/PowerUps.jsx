"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";


export default function PowerUps({ powerups }) {
  const { name, description, image, id,style } = powerups;
  const [isFlipped, setIsFlipped] = useState(false);
  const rotateY = useMotionValue(0);
  const rotate = useTransform(rotateY, [0, 180], ["0deg", "180deg"]);

  const handleMouseEnter = () => {
    setIsFlipped(true);
    rotateY.set(180);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
    rotateY.set(0);
  };

  return (
    <div className="relative p-[3rem] w-[350px] h-64">
      <motion.div
        className={`absolute inset-0 rounded-lg shadow-lg`}
        style={{
          rotateY: rotate,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={isFlipped}
        transition={{ duration: 0.8, type: "spring" }}>
        <div
          className={`absolute inset-0 flex items-center rounded-[20px] justify-center ${style}`}
          key={id}>
          {isFlipped ? (
            <div className={`p-4 text-center text-black rounded-[50px] `}>
              <div style={{ transform: `rotateY(-180deg)` }}>
                <div
                  className={`flex cursor-pointer gap-3 flex-row-reverse items-center justify-center ${style}`}>
                  <Image
                    src={image}
                    width={150}
                    height={60}
                    alt="Front"
                    className="object-cover p-[2rem]"
                  />
                  <h1 className="text-2xl p-5 font-bold">{name}</h1>
                </div>
                <p className= {` font-mono text-[17px] ${style}`}>{description}</p>
              </div>
            </div>
          ) : (
            <Image
              src={image}
              width={500}
              height={200}
              alt="Front"
              className="object-contain p-[3rem] w-full h-full"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}




//powerups styles

const powerUps = [
  {
    id: 1,
    style: "bg-white text-[#0938b2]",
  },
  {
    id: 2,
    style: "bg-red-500 text-white",
  },
  {
    id: 3,
    style: "bg-green-500",
  },
  {
    id: 4,
    style: "bg-[#ad4dfe] text-white",
  },
  {
    id: 5,
    style: "bg-[#29dfff] text-white",
  },
  {
    id: 6,
    style: "bg-[#f85190] text-white ",
  },
  {
    id: 7,
    style: "bg-[#f02227] text-white",
  },
  {
    id: 8,
    style: "bg-[#25d8c3] text-slate-500",
  },
  {
    id: 9,
    style: "bg-[#ff9122] text-white",
  },
];
