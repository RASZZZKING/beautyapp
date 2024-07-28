import FeaturesUser from "@/components/FeaturesUser";
import Navbar from "@/components/Navbar";
import ProfileDetail from "@/components/ProfileDetail";
import HeaderUser from "@/components/utils/HeaderUser";
import { FunctionComponent, useState } from "react";

interface pageProps {}

const Page: FunctionComponent<pageProps> = () => {
  return (
    <>
      <div className="covers bg-color-gray min-[450px]:shadow-2xl min-[450px]:rounded-xl min-[450px]:-mt-2 hidden-scrollbar mh50">
        <div className="flex flex-col gap-5">
          <HeaderUser/>
          <ProfileDetail />
          <FeaturesUser />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Page;
