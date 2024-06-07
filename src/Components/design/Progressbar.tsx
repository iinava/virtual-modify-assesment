import React from 'react';
import { GoNorthStar } from 'react-icons/go';
interface CustomComponentProps {
    imageSrc: string;
    color: string;
    name: string;
    width: string;
    Icon: React.ComponentType;
  }

const CustomprogressBar: React.FC<CustomComponentProps> = ({ imageSrc, color, width, Icon,name }) => {
    // console.log(color);
    
  return (
    <div className="flex flex-col text-black  my-2 ">
     
     <div className="flex items-center gap-2">
        <p style={{color}}>
          <Icon />
        </p>
      {name}
      </div>
      <div className="w-[90%] bg-green-300 h-12 flex justify-start items-center rounded-full">
        <div className="image-container">
          <img
            src={imageSrc}
            alt="Sample Image"
            className="rounded-image"
          />
        </div>
        <div style={{ width }} className="bg-green-800 h-8 flex justify-start rounded-full text-black"></div>
      </div>
     
    </div>
  );
};

export default CustomprogressBar;
