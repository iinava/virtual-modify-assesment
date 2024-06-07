"use client";
import React, { useState } from "react";
import { FaBell, FaCoins } from "react-icons/fa";
import { CiCirclePlus, CiLocationArrow1 } from "react-icons/ci";
import Card from "@/Components/design/Card";
import AvatarGroup from "@/Components/design/AvatarGroup";
import CustomprogressBar from "@/Components/design/Progressbar";
import LineChart from "@/Components/design/Chart";
import Table from "@/Components/design/Table";
import { ProgressbarData, cardData, items } from "@/constants";

export default function Designpage() {
  const [selected, setSelected] = useState(items[0]);

  const handleClick = (item: any) => {
    setSelected(item);
  };
  return (
    <main className="w-full flex flex-col ">
        <nav className="flex justify-between bg-green-900 px-2 flex-wrap py-2 ">
          <div className="flex justify-center items-center">
            <img  className=" w-14 sm:w-20" src="/ssstar.svg" alt="icon" />
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
        </nav>
      <div className="w-full  bg-green-900 flex flex-col p-4">
      
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

          <div className="w-[150px] h-[300px] glassbg  flex flex-col justify-start items-center rounded-md">
            <div className="mt-20">
              <p>used space</p>
              <h1 className="text-3xl text-yellow-300">64.2%</h1>
            </div>
            <div className="w-full bg-yellow-300 flex-grow"></div>
          </div>
        </div>
      </div>
      <div className="w-full md:grid md:grid-cols-3  bg-white px-3 ">
        <div className="  p-3">
          <div className="flex justify-between items-center text-black text-2xl">
            <h1 className="text-sm">Team Activity</h1>
            <AvatarGroup />
            <div className="flex gap-2">
              <button className="h-9 w-9 bg-yellow-400 rounded-full centeredflex">
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
              <CustomprogressBar
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
        <div className="  col-span-2 text-black p-4">
          <div className="flex justify-between w-full">
            <p>Revenue</p>
            <button className="rounded-full glassbg centeredflex  h-8 w-8">
              <FaCoins />
            </button>
          </div>
          <div className="divider-horizontal mt-2"></div>
          <p>Memory usage</p>
          <h1 className="text-4xl">57,2 trb</h1>
          <LineChart />
          
          <div className="divider-horizontal mt-2"></div>

          <Table />
        </div>
      </div>
    </main>
  );
}
