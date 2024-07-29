import DescDetail from "@/components/DescDetail";
import ImageDetail from "@/components/ImageDetail";
import SelecetColor from "@/components/SelectColor";
import SelectSize from "@/components/SelectSize";
import TagPricing from "@/components/TagPricing";
import HeaderCaption from "@/components/utils/HeaderCaption";
import HeaderNav from "@/components/utils/HeaderNav";
import { theProduct } from "@/libs/dataData";
import { FunctionComponent, useState } from "react";

interface pageProps {
  params: {
    key: number;
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

const Page: FunctionComponent<pageProps> = ({ params }) => {
  const { key } = params;

  const descProdcut =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemoexpedita corrupti quos Dolore, quibusdam! Quo nostrum obcaecaticumque ipsum";
  
  const sizes = theProduct.data[key]
  // {
  //   size: [38, 40, 43, 45, 50, 51, 56, 77, 79, 81, 93, 95],
  // };
  return (
    <>
      <div className="covers2 mh50 hidden-scrollbar min-[450px]:rounded-xl min-[450px]:shadow-2xl flex flex-col gap-5 min-[450px]:-mt-2">
        <HeaderNav model="like" title="Product Details" liked={false} />
        <ImageDetail src={theProduct.data[key].imageUrl} />
        <DescDetail
          title={theProduct.data[key].title}
          rating={theProduct.data[key].ratings.value}
          ratters={theProduct.data[key].ratings.count}
          reviewers={theProduct.data[key].ratings.count}
          desc={theProduct.data[key].description}
        />
        <HeaderCaption caption="Select color" size="base" />
        <SelecetColor colors={theProduct.data[key].colors} />

        <HeaderCaption
          caption="Select size"
          size="base"
          linkCaption="size guide"
          type="sizeguide"
        />
        <SelectSize data={theProduct.data[key].size} />
      </div>
      <TagPricing price={theProduct.data[key].price} />
    </>
  );
};

export default Page;

