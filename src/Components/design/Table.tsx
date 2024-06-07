import React from "react";
import { tableData } from "@/constants";


export default function Table() {
  return (
    <div className="grid grid-cols-4 text-neutral-400">
      <h1>Project Name</h1>
      <h1>Size</h1>
      <h1>Time Due</h1>
      <h1>Cost</h1>
      {tableData.map((item) => (
        <>
          <div key={item.name} className="flex items-center">
            {item.icon && <item.icon className="mr-2 hidden sm:block text-green-500 glassbg p-1 rounded-full" size={24} />}
            <h1 className="text-black ">{item.name}</h1>
          </div>
          <h1 className="text-black">{item.size}</h1>
          <h1 className="text-black">{item.date}</h1>
          <h1 className="text-black">{item.cost}</h1>
        </>
      ))}
    </div>
  );
}
