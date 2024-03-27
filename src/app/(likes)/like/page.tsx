import GridProducts from "@/components/GridProducts";
import Navbar from "@/components/Navbar";
import HeaderNav from "@/components/utils/HeaderNav";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  return (
    <>
      <div className="covers mh50 hidden-scrollbar min-[450px]:rounded-xl min-[450px]:shadow-2xl min-[450px]:-mt-2">
        <div className="flex flex-col gap-5">
          <GridProducts />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default page;
