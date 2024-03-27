import DescDetail from "@/components/DescDetail";
import ImageDetail from "@/components/ImageDetail";
import SelecetColor from "@/components/SelectColor";
import SelectSize from "@/components/SelectSize";
import HeaderCaption from "@/components/utils/HeaderCaption";
import HeaderNav from "@/components/utils/HeaderNav";
import { FunctionComponent, useState } from "react";

interface pageProps {
  params: {
    id: string;
  };
}
interface Color {
  name: string;
  hex: string;
}
interface Colors {
  colors: Color[];
}

interface Size {
  size: number[] | string[]
}

const page: FunctionComponent<pageProps> = ({ params }) => {
  const { id } = params;

  const descProdcut =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemoexpedita corrupti quos Dolore, quibusdam! Quo nostrum obcaecaticumque ipsum";
  const colors: Colors = {
    colors: [
      {
        name: "white",
        hex: "#FFFFFF",
      },
      { name: "black", hex: "#000000" },
      { name: "gray", hex: "#36454f" },
      { name: "brown", hex: "#353839" },
    ],
  };
  const sizes: Size = {
    size: [38, 40, 43, 45, 50, 51,56,77, 79, 81, 93,95]
  }
  return (
    <>
      <div className="covers2 mh50 hidden-scrollbar min-[450px]:rounded-xl min-[450px]:shadow-2xl flex flex-col gap-5 min-[450px]:-mt-2">
        <HeaderNav model="like" title="Product Details" liked={false} />
        <ImageDetail src={"oke"} />
        <DescDetail
          title={"Wool Coat Lapel Collar"}
          rating={4.8}
          ratters={336}
          reviewers={212}
          desc={descProdcut}
        />
        <HeaderCaption caption="Select color" size="base" />
        <SelecetColor colors={colors.colors} />

        <HeaderCaption
          caption="Select size"
          size="base"
          linkCaption="size guide"
          href="sizeguide"
        />
        <SelectSize data={sizes} />
      </div>
      <div className="opacity-100 absolute mw500 max-[450px]:fixed w-full  bg-color-primary border-opacity-30 border-color-placeholder border-t rounded-xl min-[450px]:-mt-[4.3rem]">
        <div className=" flex justify-between bg-color-primary w-full h-20 items-center px-6 py-4 rounded-xl">
          <div className="flex gap-2 justify-center items-center">
            <div className="flex items-end gap-1">
              <p className="text-md opacity-50">Rp</p>
              <p className="text-xl font-semibold">500.000</p>
            </div>
            <p className="text-sm opacity-50 line-through">750.000</p>
          </div>
          <div className="bg-color-secondary h-full w-36 rounded-xl flex justify-center items-center">
            <p className="text-md text-color-primary">Add to cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
