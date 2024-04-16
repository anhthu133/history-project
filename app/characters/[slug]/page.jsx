import CV from "@/components/CV";
import { heros } from "@/constant/characters";
import React from "react";

const Page = ({ params }) => {
  const res = heros.find((hero) => {
    return hero.id === parseInt(params.slug);
  });
  console.log(res);
  return (
    <div>
      <CV hero={JSON.stringify(res)} />
    </div>
  );
};

export default Page;
