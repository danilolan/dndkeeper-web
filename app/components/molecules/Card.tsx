import React from "react";
import Image from "next/image";

import character from "../../../public/images/wizard.png";

export const Card = () => {
  return (
    <div className="max-w-sm pr-1 py-4 min-w-[290px] bg-white-600 border-2 border-white-300 rounded-3xl shadow-md">
      <div className="flex pl-3">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <Image
            src={character}
            alt={"player character"}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-6 flex flex-col justify-center ">
          <h2 className="text-base font-bold text-black-900 mb-2 line-clamp-1 max-w-[160px]">
            Baragor Ironfirst
          </h2>
          <div className="flex flex-row gap-6">
            <p className="text-xs font-medium text-black-400 mb-1">
              Elf, Wizard
            </p>
            <p className="text-xs font-medium text-black-400">( Level 4 )</p>
          </div>
        </div>
      </div>
    </div>
  );
};
