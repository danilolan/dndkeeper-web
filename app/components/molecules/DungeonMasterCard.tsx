import Image, { StaticImageData } from "next/image";

import master from "../../../public/images/master.png"

interface DungeonMasterCardProps {
    name: string;
    image: StaticImageData;
    table_name: string;
    date: string;
}

export const DungeonMasterCard: React.FC<DungeonMasterCardProps> = ( { name, image, table_name, date } ) => {
  return (
    <>
      <div className="flex pl-1">
        <div className="w-28 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={"player character"}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-center ">
          <h2 className="ml-2 text-base font-bold text-black-900 line-clamp-1 max-w-[175px]">
            {name}
          </h2>
          <div className="flex flex-row">
            <p className="ml-2 text-xs font-medium text-black-400 mb-1">
              Dungeon Master
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-4 border-white-300" />

      <div className="flex-row mt-2">
        <div className="flex flex-col text-center items-center">
          <h2 className="text-lg text-bordo-400 font-medium leading-3 mt-2">{table_name}</h2>
          <p className="text-xxs text-black-400 font-medium">
            Last played at {date}
          </p>
        </div>

      </div>
    </>
  )
};
