"use client";
import { Button } from "flowbite-react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

const card = [
  {
    id: 1,
    image: "/image1.png",
    name: "Build as one team",
    info: "Work seamlessly across your organization on a platform designed for collaboration.",
  },
  {
    id: 2,
    image: "/image2.png",
    name: "Transform your culture",
    info: "Embrace innersource, iterate faster and ship more frequently using the best tools from open source teams.",
  },
  {
    id: 3,
    image: "/image3.png",
    name: "Learn as you build",
    info: "Get insight into how your team builds today with community-backed KPIs.",
  },
];

export default function Home() {
  const [color, setColor] = useState("black");

  return (
    <div style={{ backgroundColor: color }} className="gap-7">
      <div className="flex md:flex-col items-center justify-center  ">
        <div className="pb-7 content-center flex flex-col items-center gap-y-[15px]">
          <h1 className="text-white justify-center text-sm sm:text-2xl pt-24 font-bold">
            Turn collaboration into innovation
          </h1>{" "}
          <div className="flex gap-x-4">
            <p className="text-xs text-[#3F83F8]">
              Learn more about inner source
            </p>
            <FaArrowRightLong className="text-[#3F83F8]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center gap-[48px] p-3">
        {card.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col md:flex-col lg:flex-col items-center  sm:flex gap-x-5"
          >
            <div>
              <img
                src={item.image}
                className="w-40 sm:w-56 md:w-full pb-4 object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm sm:text-xl font-bold  text-white flex justify-center md:flex-none ">
                {item.name}
              </h2>
              <p className="text-[#9ca3af] text-xs sm:text-sm md:text-xl flex w-56 md:w-96  items-center ">
                {item.info}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-cols sm:flex md:flex-row items-center justify-center gap-y-[26px] sm:gap-x-[27px]   py-24 p-7">
        <Button
          className=" flex items-center w-full sm:w-[88px] h-[34px] border-2 border-whiterounded-lg p-2 sm:p-6 hover:text-black text-white"
          onClick={() => {
            setColor("black");
          }}
        >
          <FaCartPlus className="mr-2 h-5 w-5" />
          Black
        </Button>
        <Button
          className=" flex items-center w-full sm:w-[88px] h-[34px] border-2 border-whiterounded-lg p-2 sm:p-6 hover:text-red-600 active:text-white"
          onClick={() => {
            setColor("red");
          }}
        >
          <FaCartPlus className="mr-2 h-5 w-5" />
          Red
        </Button>

        <Button
          className=" flex items-center w-full sm:w-[88px] h-[34px] border-2 border-whiterounded-lg p-2 sm:p-6 hover:text-green-500 active:text-white"
          onClick={() => {
            setColor("green");
          }}
        >
          <FaCartPlus className="mr-2 h-5 w-5" />
          Green
        </Button>
        <Button
          className=" flex items-center w-full sm:w-[88px] h-[34px] border-2 border-whiterounded-lg p-2 sm:p-6 hover:text-blue-600 active:text-white"
          onClick={() => {
            setColor("blue");
          }}
        >
          <FaCartPlus className="mr-2 h-5 w-5" />
          Blue
        </Button>
      </div>
    </div>
  );
}
