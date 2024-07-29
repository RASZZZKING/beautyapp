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
    <div className="bg-color-primary min-[450px]:p-2 min-[450px]:rounded-2xl min-[450px]:shadow-2xl mh50 hidden-scrollbar min-[450px]:-mt-2">
      <div className="px-4 pt-7 flex flex-col gap-5">
        <HeaderNav model="manify" title="Checkout" />
        <LocationClient />
        <ProdcutInCart setTotalBiaya={setTotalBiaya} />
      </div>
      <NavPricing totalBiaya={totalBiaya} />
    </div>
  );
};

export default Page;
