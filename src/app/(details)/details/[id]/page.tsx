"use client";
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
    size: [38, 40, 43, 45, 50]
  }
  return (
    <>
      <div className="covers2  flex flex-col gap-5">
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

      <div className="bottom-0 fixed w-full h-20 bg-color-gray border-opacity-30 border-color-placeholder border-t rounded-xl px-6 py-4">
        <div className=" flex justify-between w-full h-full items-center">
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
