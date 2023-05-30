import luigihead from "../public/luigihead.png";
import monkeyhead from "../public/monkeyhead.png";
import yoshi from "../public/yoshi.png";
import peachhead from "../public/peachhead.png";
import peachkart from "../public/peachkart.png";
import donkeykart from "../public/donkeykart.png";
import luigikart from "../public/luigikart.png";
import yoshikart from "../public/yoshikart.png";
import redshell from "../public/redshell.png";
import blooper from "../public/blooper.png";
import booboo from "../public/boo.png";
import greenshell from "../public/greenshell.png";
import mushroom from "../public/mushroom.png";
import rocket from "../public/rocket.png";
import banana from "../public/banana.png";
import star from "../public/star.png";
import flower from "../public/flower.png";
import Logo from "../public/logo.png";


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


const data = [
  {
    img: luigihead,
    showenimage: luigikart,
    name: "luigi",
  },
  {
    img: yoshi,
    showenimage: yoshikart,
    name: "yoshi",
  },
  {
    img: monkeyhead,
    showenimage: donkeykart,
    name: "donkey",
  },
  {
    img: peachhead,
    showenimage: peachkart,
    name: "peach",
  },
];

const powerUps = [
  {
    id: 1,
    name: "Super Star",
    description:
      "Grants temporary invincibility and increased speed to the player.",
    style: `bg-white text-[#0938b2]`,
    image: star,
    flippedImage: star,
    color: "bg-blue-500",
  },
  {
    id: 2,
    name: "Red Shell",
    description:
      "A homing shell that targets and hits the nearest opponent on the track.",
    style: `bg-red-500 text-white`,
    image: redshell,
    flippedImage: redshell,
  },
  {
    id: 3,
    name: "Green Shell",
    description:
      "A shell that can be thrown at opponents to knock them off course.",
    style: `bg-green-500 text-white`,
    image: greenshell,
    flippedImage: greenshell,
  },
  {
    id: 4,
    name: "Banana",
    description:
      "A throwable item that causes opponents to slip and spin out when hit.",
    style: `bg-[#ad4dfe] text-white`,
    image: banana,
    flippedImage: banana,
  },
  {
    id: 5,
    name: "Bullet Bill",
    description:
      "Transforms the player into a Bullet Bill, allowing automatic speed and knocking over opponents.",
    style: `bg-[#29dfff] text-white`,
    image: rocket,
    flippedImage: rocket,
  },
  {
    id: 6,
    name: "Boo",
    description:
      "Makes the player temporarily invisible and steals a random item from an opponent.",
    style: "bg-[#f85190] text-white",
    image: booboo,
    flippedImage: booboo,
  },
  {
    id: 7,
    name: "Mushroom",
    description: "Provides a short burst of speed to the player when used.",
    style: "bg-[#f02227] text-white",
    image: mushroom,
    flippedImage: mushroom,
  },
  {
    id: 8,
    name: "Piranha Plant",
    description:
      "Attaches to the front of the kart, bites nearby opponents, and gives a small speed boost.",
    style: "bg-[#25d8c3] text-white",
    image: flower,
    flippedImage: flower,
  },
  {
    id: 9,
    name: "Blooper",
    description:
      "Squirts ink on opponents' screens, obstructing their view temporarily.",
    style: "bg-[#ff9122] text-white",
    image: blooper,
    flippedImage: blooper,
  },
];

export { data, powerUps, NavItems };
