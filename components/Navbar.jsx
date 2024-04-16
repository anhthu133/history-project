import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex md:px-20 px-10 py-5 items-center justify-between
    "
    >
      <Link href={"/"}>
        <h1 className="font-semibold text-slate-600 text-2xl">CVLS</h1>
      </Link>
      <ul className="flex items-center gap-5 font-medium text-slate-600">
        <li className="hover:underline">
          <Link href={"/"}>Trang chủ</Link>
        </li>
        <li className="hover:underline">
          <Link href={"#"}>Nhân vật </Link>
        </li>
        <li className="hover:underline">
          <Link href={"#"}>Sự kiện </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
