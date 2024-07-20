import DescDetail from "@/components/DescDetail";
import ImageDetail from "@/components/ImageDetail";
import SelecetColor from "@/components/SelectColor";
import SelectSize from "@/components/SelectSize";
import TagPricing from "@/components/TagPricing";
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
  size: number[] | string[];
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
    size: [38, 40, 43, 45, 50, 51, 56, 77, 79, 81, 93, 95],
  };
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
          type="sizeguide"
        />
        <SelectSize data={sizes} />
      </div>
      <TagPricing />
    </>
  );
};

export default page;
