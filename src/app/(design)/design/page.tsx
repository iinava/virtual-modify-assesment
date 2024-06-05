"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { CiVideoOn } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaCoins } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { IoSparkles } from "react-icons/io5";
import { GoNorthStar } from "react-icons/go";
import Card from "@/Components/Card";
import AvatarGroup from "@/Components/AvatarGroup";
import CustomComponent from "@/Components/Progressbar";
export default function Designpage() {
  const items = [
    "Dashboard",
    "Storage",
    "Collection",
    "Collaboration",
    "Analytics",
    "Trash",
    "Settings",
  ];
  const ProgressbarData = [
    {
      imageSrc:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "green",
      width: "60%",
      Icon: GoNorthStar,
      name: "wisky words",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "red",
      width: "50%",
      Icon: IoSparkles,
      name: "Doodle worse",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "blue",
      width: "20%",
      Icon: GoSun,
      name: "Sparkle craft",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "blue",
      width: "80%",
      Icon: GoSun,
      name: "wonder wave",
    },
  ];

  const cardData = [
    {
      icon: TfiGallery,
      title: "Pictures",
      count: 6455,
      total: "100 Gb",
      available: "43 Gb",
      used: "57 Gb",
    },
    {
      icon: CiVideoOn,
      title: "Videos",
      count: 235,
      total: "200 Gb",
      available: "150 Gb",
      used: "50 Gb",
    },
    {
      icon: CiMusicNote1,
      title: "Music",
      count: 1234,
      total: "50 Gb",
      available: "20 Gb",
      used: "30 Gb",
    },
  ];
  const [selected, setSelected] = useState(items[0]);

  const handleClick = (item: any) => {
    setSelected(item);
  };
  return (
    <div className="w-full flex flex-col ">
      <div className="w-full  bg-green-900 flex flex-col p-4">
        <div className="flex justify-between p-2 flex-wrap ">
          <div>
            <h1 className="text-4xl">Creative space</h1>
          </div>
          <div className="flex gap-4 items-center">
            <p>Mark</p>
            <div className="image-container">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Sample Image"
                className="rounded-image"
              />
            </div>
            <button className="centeredflex rounded-full w-12 h-12 text-2xl bg-white  text-black ">
              <FaBell />
            </button>
            <button className=" glassbg rounded-[30px] p-3 centeredflex gap-2">
              <p className="text-yellow-300 text-2xl">
                <CiCirclePlus />
              </p>
              join
            </button>
          </div>
        </div>
        <div className=" w-full  flex gap-4 flex-wrap items-center justify-between   px-2">
          <div className="flex flex-col gap-4  w-[250px] ">
            {items.map((item, index) => (
              <a
                key={index}
                href={`#`}
                className={selected === item ? "text-yellow-300" : ""}
                onClick={() => handleClick(item)}
              >
                {item}
              </a>
            ))}
          </div>

          {cardData.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              count={item.count}
              total={item.total}
              available={item.available}
              used={item.used}
            />
          ))}

          <div className="w-[150px] h-[300px] glassbg  flex flex-col justify-start items-center">
            <div className="mt-20">
              <p>used space</p>
              <h1 className="text-3xl text-yellow-300">64.2%</h1>
            </div>
            <div className="w-full bg-yellow-300 flex-grow"></div>
          </div>
        </div>
      </div>
      <div className="w-full md:grid md:grid-cols-3  bg-neutral-200 ">
        <div className="  p-3">
          <div className="flex justify-between items-center text-black text-2xl">
            <h1 className="text-sm">Team Activity</h1>
            <AvatarGroup />
            <div className="flex">
              <button className="h-9 w-9 bg-yellow-400 rounded-full centeredflex">
                {" "}
                <CiCirclePlus />
              </button>
              <button className="h-9 w-9  rounded-full">
                <CiLocationArrow1 />
              </button>
            </div>
          </div>
          <div className="divider-horizontal mt-2 "></div>
          <div className="py-4">
            {ProgressbarData.map((item, index) => (
              <CustomComponent
                key={index}
                imageSrc={item.imageSrc}
                color={item.color}
                width={item.width}
                Icon={item.Icon}
                name={item.name}
              />
            ))}
          </div>
        </div>
        <div className=" h-[300px] col-span-2 text-black p-4">
          <div className="flex justify-between w-full">
            <p>Revenue</p>
            <button className="rounded-full glassbg centeredflex  h-8 w-8"><FaCoins /></button>
          </div>
          <div className="divider-horizontal mt-2"></div>
        <p>Memory usage</p>
        <h1 className="text-4xl">2345 TB</h1>

        </div>
      </div>
    </div>
  );
}
