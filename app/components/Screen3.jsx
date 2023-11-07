"use client"
import { useContext } from "react";
import { DescriptionContext } from "../packagelist/page";
import Topbar from "./Topbar";
import PackageHighlight from './PackageHighlight';
import Hotels from './Hotels';
import Hotels2 from './Hotels2';
import Inclusions from "./Inclusions";
import Pack from "./Pack";
import Booking from "./Booking";
import Footer from "./Footer";

export default function Screen3() {
  return (
    <>
      <div className="sm:w-[360px]">
        <Topbar  />
        <div className='w-full sm:w-screen absolute top-[280px] bg-backgroundColor rounded-[36px] flex flex-col items-center sm2:w-[360px]'>
          <PackageHighlight  />
          <Hotels  />
          <Hotels2  />
          <Inclusions  />
          <Pack  />
          <Booking  />
          <Footer />
        </div>
      </div>
    </>
  );
}
