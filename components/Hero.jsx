import React from "react";
import CharacterGrid from "./shared/CharacterGrid";
import CharacterCard from "./shared/CharacterCard";

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
          thuộc về quá khứ. Chúng tôi đem đến một nguồn tài nguyên tham khảo
          miễn phí và úy tín dành cho tất cả mọi người.
        </p>
      </div>
      <p className="font-semibold mt-5 text-3xl text-slate-700">
        Nhân vật lịch sử
      </p>
      <CharacterGrid>
        <CharacterCard
          img={
            "https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg"
          }
          title={"Hai Bà Trưng"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi laudantium eius in iusto perferendis voluptas voluptatum, inventore alias saepe repellat quis autem ipsa! Esse repellendus architecto non ea aperiam impedit molestias minima nesciunt, nulla explicabo at sapiente facere amet."
          }
        />
        <CharacterCard
          img={
            "https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg"
          }
          title={"Trần Quốc Tuấn"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi laudantium eius in iusto perferendis voluptas voluptatum, inventore alias saepe repellat quis autem ipsa! Esse repellendus architecto non ea aperiam impedit molestias minima nesciunt, nulla explicabo at sapiente facere amet."
          }
        />
        <CharacterCard
          img={
            "https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg"
          }
          title={"Hai Bà Trưng"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi laudantium eius in iusto perferendis voluptas voluptatum, inventore alias saepe repellat quis autem ipsa! Esse repellendus architecto non ea aperiam impedit molestias minima nesciunt, nulla explicabo at sapiente facere amet."
          }
        />
        <CharacterCard
          img={
            "https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg"
          }
          title={"Hai Bà Trưng"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi laudantium eius in iusto perferendis voluptas voluptatum, inventore alias saepe repellat quis autem ipsa! Esse repellendus architecto non ea aperiam impedit molestias minima nesciunt, nulla explicabo at sapiente facere amet."
          }
        />
        <CharacterCard
          img={
            "https://cand.com.vn/Files/Image/thanhbinh/2020/01/20/eab955b3-4d93-4419-adab-1551091a17b9.jpg"
          }
          title={"Hai Bà Trưng"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae modi laudantium eius in iusto perferendis voluptas voluptatum, inventore alias saepe repellat quis autem ipsa! Esse repellendus architecto non ea aperiam impedit molestias minima nesciunt, nulla explicabo at sapiente facere amet."
          }
        />
      </CharacterGrid>
    </div>
  );
};

export default Hero;
