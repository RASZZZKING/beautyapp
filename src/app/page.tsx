import Carousel from "@/components/Carousel";
import GridProducts from "@/components/GridProducts";
import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";
import getApiProduct from "@/libs/getApiProduct";
import Image from "next/image";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = async () => {
  return (
    <>
      <div className="covers">
        <div className="flex flex-col gap-5">
          <SearchInput />
          <Carousel />
          <GridProducts />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default page;
