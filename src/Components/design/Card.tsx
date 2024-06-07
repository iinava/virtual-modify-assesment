import React from 'react';
import { CardProps } from '@/constants/types';

const DividerHorizontal: React.FC = () => (
  <div className="w-full h-[2px] bg-neutral-600 bg-opacity-55 my-2"></div>
);

const DividerVertical: React.FC = () => (
  <div className="w-[2px] h-full bg-neutral-600 bg-opacity-55 mx-2"></div>
);

export default function Card({ icon: Icon, title, count, total, available, used }: CardProps) {
  return (
    <div className="w-[300px] h-[300px] glassbg px-3 py-2 rounded-md">
      <div className="flex flex-col justify-start space-y-4">
        <div className="bg-green-800 h-14 w-14 rounded-full centeredflex text-yellow-300 text-2xl">
          <Icon />
        </div>
        <h1>{title}</h1>
        <h1 className="text-3xl">{count}</h1>
        <DividerHorizontal />
      </div>
      <div className="w-full flex p-2 gap-4 h-20 justify-center">
        <div>
          <h1 className="text-sm">Total</h1>
          <p>{total}</p>
        </div>
        <DividerVertical />
        <div>
          <h1 className="text-sm">Available</h1>
          <p>{available}</p>
        </div>
        <DividerVertical />
        <div>
          <h1 className="text-sm">Used</h1>
          <p>{used}</p>
        </div>
      </div>
    </div>
  );
}