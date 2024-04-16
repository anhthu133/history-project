import React from "react";
import CharacterGrid from "./shared/CharacterGrid";
import CharacterCard from "./shared/CharacterCard";
import { heros } from "@/constant/characters";

const Hero = () => {
  return (
    <div className="">
      <div className=" rounded-lg bg-orange-200 p-3">
        <h1 className="font-semibold text-slate-700  text-3xl ">
          Sơ yếu lý lịch - Dòng chảy thời gian
        </h1>

        <p className="text-slate-700 text-lg mt-2">
          Website là đơn vị cung cấp thông tin lịch sử mang mục đích giáo dục và
          phi lợi nhuận. CVLS có thể coi như là một thư viện lưu trữ những bản
          sơ yếu lý lịch (CV - Curriculum Vitae) của những con người và sự kiện
          thuộc về quá khứ.<br/>
          Chúng tôi đem đến một nguồn tài nguyên tham khảo
          miễn phí và úy tín dành cho tất cả mọi người.
        </p>
      </div>
      <p className="font-semibold mt-5 text-3xl text-slate-700">
        Nhân vật lịch sử
      </p>
      <CharacterGrid>
        {heros.map((hero) => (
          <CharacterCard
            key={hero.id}
            img={hero.imgUrl[0]}
            id={hero.id}
            title={hero.ten}
            description={hero.caunoinoitieng[0].noidung}
          />
        ))}
      </CharacterGrid>
    </div>
  );
};

export default Hero;
