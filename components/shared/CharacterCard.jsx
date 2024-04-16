import Image from "next/image";
import Link from "next/link";
import React from "react";

const CharacterCard = ({ img, title, id, description }) => {
  return (
    <Link href={`/characters/${id}`} className="flex justify-center">
      <div className="w-full border border-slate-200 rounded-lg">
        <Image
          src={img}
          width={500}
          height={500}
          alt="historical character"
          className="w-full object-cover object-top h-[200px] rounded-lg"
        />
        <div className="p-2">
          <p className="text-xl mt-3 font-semibold text-slate-500">{title}</p>
          <p className="text-sm mt-3 font-normal text-slate-400 truncate">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
