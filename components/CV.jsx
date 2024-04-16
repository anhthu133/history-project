import Image from "next/image";
import Link from "next/link";
import React from "react";
import { parsedHero } from "@/constant/characters";

const CV = ({ hero }) => {
  const parsedHero = JSON.parse(hero);
  return (
    <>
      <div className="grid grid-cols-5 w-full gap-x-5 gap-y-5 max-w-[600px] mx-auto">
        <Image
          height={500}
          alt="historical character"
          className="w-full h-48 object-cover rounded-lg md:col-span-2 col-span-full"
          src="https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg"
          width={400}
        />
        <div className="w-full md:col-span-3 col-span-full p-3 bg-[#fefae0]">
          <p className="text-3xl font-semibold text-[#d4a373]">
            {parsedHero.ten}
          </p>

          <p className="text-sm font-semibold mt-1 text-slate-500">
            {parsedHero.ngaysinh}
          </p>
          <div>
            <p className="text-md mt-5 font-semibold text-slate-500">
              Thông tin chung
            </p>
            <div className="w-10 h-[1px] bg-[#e9edc9] mt-1 "></div>
            <ul>
              {parsedHero.thongtinchung.map((detail) => (
                <li key={detail}>
                  <p className="text-xs text-slate-600 mt-3 font-normal ">
                    {" "}
                    {detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:col-span-2 col-span-full">
          <div className=" p-3 rounded-lg h-fit bg-[#fefae0]">
            <p className="text-lg font-semibold text-[#d4a373] ">Vị trí</p>
            <div className="w-10 h-[1px] bg-[#e9edc9] mt-1 "></div>
            <ul className="mt-5">
              {parsedHero.vitri.map((vitri) => (
                <li key={Math.random()}>
                  <p className="text-slate-700 text-xs"> • {vitri}</p>
                </li>
              ))}
            </ul>
            {parsedHero.ditich ? (
              <>
                {" "}
                <p className="text-lg font-semibold mt-5 text-[#d4a373] ">
                  Di tích
                </p>
                <div className="w-10 h-[1px] bg-[#e9edc9] mt-1 "></div>
                <ul className="mt-5">
                  {parsedHero.ditich.map((ditich) => (
                    <li key={Math.random()}>
                      <p className="text-slate-700 text-xs"> • {ditich}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
          <div className="md:col-span-3 col-span-full rounded-lg mt-5 p-3 bg-slate-100">
            <h1 className="text-lg font-semibold text-[#d4a373]">Video</h1>
            <div className="w-10 h-[1px] bg-[#e9edc9] mt-1 "></div>
            <ul>
              {parsedHero.duonglinkvideo.map((link) => (
                <li key={link}>
                  <a href={link} target="_blank" className=" text-cyan-400">
                    <p className="truncate">{link}</p>
                  </a>
                </li>
              ))}
            </ul>
            <h1 className="text-lg font-semibold text-[#d4a373] mt-5">
              Bài viết
            </h1>
            <div className="w-10 h-[1px] bg-[#e9edc9] mt-1 "></div>
            <ul>
              {parsedHero.duonglinkbaiviet.map((link) => (
                <li key={link}>
                  <a href={link} target="_blank" className=" text-cyan-400">
                    <p className="truncate">{link}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-3 col-span-full p-3 bg-[#ccd5ae] bg-opacity-20 rounded-lg h-fit">
          <p className="text-lg font-semibold text-[#d4a373] ">Đóng góp</p>
          <div className="w-10 h-[1px] bg-[#e9edc9] mt-1 "></div>
          <ul className="mt-3  flex flex-col gap-5">
            {parsedHero.donggop.map((donggop) => (
              <li key={donggop.nam}>
                <p className="font-normal text-xs text-slate-700">
                  • {donggop.noidung}
                </p>
              </li>
            ))}
          </ul>

          <p className="text-lg font-semibold text-[#d4a373] mt-10">
            Câu nói nổi tiếng
          </p>
          <div className="w-10 h-[1px] bg-[#e9edc9] mt-1 "></div>
          <ul className="mt-3  flex flex-col gap-5">
            {parsedHero.caunoinoitieng.map((congtrang) => (
              <li key={congtrang.nam}>
                <p className="font-normal italic text-xs text-slate-700">
                  {congtrang.noidung}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CV;
