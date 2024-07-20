import FeaturesUser from "@/components/FeaturesUser";
import Navbar from "@/components/Navbar";
import ProfileDetail from "@/components/ProfileDetail";
import HeaderUser from "@/components/utils/HeaderUser";
import {
  AppleLogo,
  FacebookLogo,
  GoogleLogo,
} from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent, useState } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <>
      <div className=" bg-color-gray min-[450px]:shadow-2xl min-[450px]:rounded-xl min-[450px]:-mt-2 hidden-scrollbar mh50">
        <div className="flex h-[90vh] flex-col justify-evenly w-full py-3 px-5">
          <div className="text-4xl font-semibold">Let's Go, Model! <br /><span className="font-medium text-2xl">Search anything you want</span></div>
          <img src="/login.png" alt="models" />
          <div>
            <p className="text-lg text-center w-full font-semibold mb-2">Sign with</p>
            <div className="flex gap-5  justify-center">
              <div className=" cursor-pointer rounded-full bg-color-placeholder bg-opacity-40 p-2 hover:bg-opacity-60">
                <GoogleLogo size={20} weight="bold" />
              </div>
              <div className=" cursor-pointer rounded-full bg-color-placeholder bg-opacity-40 p-2 hover:bg-opacity-60">
                <FacebookLogo size={20} weight="bold" />
              </div>
              <div className=" cursor-pointer rounded-full bg-color-placeholder bg-opacity-40 p-2 hover:bg-opacity-60">
                <AppleLogo size={20} weight="bold" />
              </div>
            </div>
          </div>
          <p className="text-sm w-full text-center mt-10 cursor-pointer">Back</p>
        </div>
      </div>
    </>
  );
};

export default page;
