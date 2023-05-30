import React, { useState } from "react";
import Logo from "../public/logo.png";
import Image from "next/image";
import star from "../public/star.png";
import mush from "../public/mushroom.png";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const NavItems = [
  {
    name: "Characters",
    link: "#Characters",
  },
  {
    name: "Courses",
    link: "#tracks",
  },
  {
    image: Logo,
    link: "#",
  },
  {
    name: "Power ups",
    link: "#power-ups",
  },
  {
    name: "Buy now",
    link: "#buynow",
  },
];

export default function Navbar() {
  const [isnavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isnavOpen);
  };

  return (
    <>
      <header className={styles.header}>
        {isnavOpen ? (
          <AiOutlineClose
            onClick={toggleNav}
            size={30}
            className="md:hidden float-right m-5 z-[1] block"
            color="#ffd700"
          />
        ) : (
          <AiOutlineMenu
            className="md:hidden float-right m-5 z-[1] block"
            onClick={toggleNav}
            size={30}
            color="#ef4444"
          />
        )}
        <Image
          src={star}
          alt="logo"
          width={1920}
          height={1080}
          className={styles.image1}
        />
        <Image
          src={mush}
          alt="logo"
          width={1920}
          height={1080}
          className={styles.image2}
        />
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {NavItems.map((item, index) => {
              return (
                <a href={item.link} key={index}>
                  <motion.li
                    key={index}
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className={styles.li}
                    whileHover={{ scale: 1.1, color: "#ffd700" }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 0.9 }}>
                    {item.name}
                    {item.image && (
                      <Image
                        src={item.image}
                        alt="logo"
                        width={250}
                        height={250}
                      />
                    )}
                  </motion.li>
                </a>
              );
            })}
          </ul>
        </nav>
      </header>
      <motion.nav
        initial={{ x: -300 }}
        animate={isnavOpen ? { x: 0 } : { x: -300 }}
        className=" md:hidden w-[40%] bg-[#646464ae] fixed top-0 left-0 z-50 h-screen gap-10 flex flex-col items-center">
        {NavItems.map((item, index) => {
          if (item === "image") return null;
          if (item.name)
            return (
              <li
                key={index}
                onClick={toggleNav}
                className="mt-10 list-none text-1xl">
                <a href={item.link}>{item.name}</a>
              </li>
            );
        })}
      </motion.nav>
    </>
  );
}

//styles

const styles = {
  header: `relative overflow-hidden`,
  image1: `fixed md:absolute m-5 rotate-[25deg] top-0 left-0 w-[40px] md:w-[60px] h-[60px] object-contain blur-[2px]`,
  image2: `fixed md:absolute z-[-5] md:top-0 md:right-0 m-5 rotate-[25deg] top-[2rem] right-[-1rem] w-[40px] md:w-[60px] h-[60px] object-contain blur-[2px]`,
  nav: `flex container mx-auto p-5 `,
  ul: `flex items-center ml-[2rem] hidden md:flex px-[1rem] justify-around w-full h-16`,
  li: `flex text-[18px]  uppercase cursor-pointer`,
};
