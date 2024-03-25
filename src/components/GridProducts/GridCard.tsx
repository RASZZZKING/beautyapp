import Link from "next/link";
import { FunctionComponent } from "react";

interface GridCardProps {}

const GridCard: FunctionComponent<GridCardProps> = () => {
  return <div className="grid grid-cols-2 gap-4">
    <CardGrid name="Jeans Levi's" price="300.000" imageUrl="/details/123" />
    <CardGrid name="Jeans Levi's" price="300.000" imageUrl="/details/123" />
    <CardGrid name="Jeans Levi's" price="300.000" imageUrl="/details/123" />
    <CardGrid name="Jeans Levi's" price="300.000" imageUrl="/details/123" />
  </div>;
};

export default GridCard;

const CardGrid = ({
  name,
  imageUrl,
  price,
}: {
  name: string;
  imageUrl: string;
  price: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Link href={`details/123`} className=" aspect-square bg-color-placeholder rounded-2xl"></Link>
      <div>
        <p className="font-semibold text-base">{name}</p>
        <p className="font-semibold text-base">Rp {price}</p>
      </div>
    </div>
  );
};
