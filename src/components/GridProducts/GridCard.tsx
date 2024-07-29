import Link from "next/link";
import { FunctionComponent } from "react";
import { GridProductsProps } from "../GridProducts";

interface GridCardProps {
  data: GridProductsProps;
  category: string;
}

const GridCard: FunctionComponent<GridCardProps> = ({ data, category }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.data.map((cb, i) => {
        if (category === "all") {
          return (
            <CardGrid
              key={i}
              name={cb.title}
              price={cb.price}
              imageUrl={cb.imageUrl}
              id={i}
            />
          );
        } else if (cb.category === category) {
          return (
            <CardGrid
              key={i}
              name={cb.title}
              price={cb.price}
              imageUrl={cb.imageUrl}
              id={i}
            />
          );
        } else {
          return;
        }
      })}
    </div>
  );
};

export default GridCard;

const CardGrid = ({
  name,
  imageUrl,
  price,
  id,
}: {
  name: string;
  imageUrl: string;
  price: number;
  id?: number | null | undefined;
}) => {
  return (
    <div className="flex flex-col gap-2 ">
      <Link href={`/details/${id}`} className="">
        <img
          src={imageUrl}
          alt=""
          className=" h-56 w-full object-cover aspect-square shadow-xl hover:scale-[102%] transition-all duration-1000 rounded-2xl"
        />
      </Link>
      <div>
        <p className="font-semibold text-base">{name}</p>
        <p className="font-semibold text-base">$ {price}</p>
      </div>
    </div>
  );
};
