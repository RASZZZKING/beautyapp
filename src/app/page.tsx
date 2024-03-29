import Carousel from "@/components/Carousel";
import GridProducts from "@/components/GridProducts";
import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";
import getApiProduct from "@/libs/getApiProduct";
import Image from "next/image";
import { FunctionComponent } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = async () => {
  const data = [
    "https://i.pinimg.com/564x/ff/1b/e0/ff1be0305b385f8d8fee93d610015a09.jpg",
    "https://i.pinimg.com/564x/56/e4/df/56e4df8d052cb492a6a7c9c3c423783a.jpg",
    "https://i.pinimg.com/564x/3a/3d/56/3a3d563160c1e17f7a0496ab4bb27b28.jpg",
    "https://i.pinimg.com/564x/71/6c/f7/716cf7bfccac858987ed9dd43c020fe9.jpg",
  ];
  return (
    <>
      <div className="covers mh50 hidden-scrollbar min-[450px]:rounded-xl min-[450px]:shadow-2xl min-[450px]:-mt-2">
        <div className="flex flex-col gap-5">
          <SearchInput />

          <Carousel slides={data}>
            {data.map((cb, index) => {
              return (
                <div key={index} className="min-w-full h-36 object-cover">
                  <img
                    src={cb}
                    alt="loading"
                    className="min-w-full bg-color-placeholder h-36 object-cover "
                  ></img>
                  <div className="-mt-36 ml-9 h-36 flex items-start gap-3 flex-col max-w-24 text-wrap justify-center ">
                    <p className="text-2xl font-bold" style={{lineHeight: "1.4rem"}}>
                      New Collection
                    </p>
                    <div className="bg-color-primary text-color-secondary p-2 text-xs flex justify-center items-center rounded-lg">
                      Shop Now
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <GridProducts />
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default page;
