import React from "react";
import Image, { StaticImageData } from "next/image";

import character from "../../../public/images/wizard.png";
import master from "../../../public/images/master.png";

interface PlayerCardProps {
  character_name?: string;
  character_class?: string;
  character_race?: string;
  character_image: StaticImageData;
  character_level?: string;
  date?: string;
  table_name?: string;
  master_name?: string;
  master_image: StaticImageData;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  character_name,
  character_class,
  character_race,
  character_image,
  character_level,
  date,
  table_name,
  master_name,
  master_image,
}) => {
  return (
    <>
      <div className="flex pl-1">
        <div className="w-28 rounded-full overflow-hidden">
          <Image
            src={character_image}
            alt={"player character"}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-center ">
          <h2 className="text-base font-bold text-black-900 mb-2 line-clamp-1 max-w-[175px]">
            {character_name}
          </h2>
          <div className="flex flex-row gap-6">
            <p className="text-xs font-medium text-black-400 mb-1">
              {character_race}, {character_class}
            </p>
            <p className="text-xs font-medium text-black-400">
              ( Level {character_level} )
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-4 border-white-300" />

      <div className="flex flex-row pl-1 pr-8 mt-2 justify-between">
        <div className="flex flex-col text-center items-center">
          <h2 className="text-lg font-medium leading-3 mt-2">{table_name}</h2>
          <p className="text-xxs text-black-400 font-medium">
            Last played at {date}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-xs text-bordo-400 font-semibold leading-4">
            Dungeon Master
          </h3>
          <div className="flex flex-row items-center gap-1">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={master_image}
                alt={"dungeon master picture"}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xs font-medium">{master_name}</p>
          </div>
        </div>
      </div>
    </>
  );
};
