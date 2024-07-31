"use client";
import LocationClient from "@/components/LocationClient";
import NavPricing from "@/components/NavPricing";
import ProdcutInCart from "@/components/ProductInCart";
import HeaderNav from "@/components/utils/HeaderNav";
import { FC, useState } from "react";

interface pageProps {}

const Page: FC<pageProps> = () => {
  const [totalBiaya, setTotalBiaya] = useState(0);

  return (
    <div className="bg-color-primary relative  min-[450px]:rounded-2xl min-[450px]:shadow-2xl mh50 hidden-scrollbar min-[450px]:-mt-2">
      <div className=" mh50 flex flex-col bg-color-placeholder bg-opacity-20">
        <div className="px-4 pt-7 flex-1 flex flex-col gap-5  min-h-full min-[450px]:px-6 pb-2">
          <HeaderNav model="manify" title="Checkout" />
          <LocationClient />
          <ProdcutInCart setTotalBiaya={setTotalBiaya} />
        </div>
        <NavPricing totalBiaya={totalBiaya} />
      </div>
    </div>
  );
};

export default Page;
