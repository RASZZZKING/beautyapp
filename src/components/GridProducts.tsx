import { FunctionComponent } from "react";
import HeaderCaption from "./utils/HeaderCaption";
import CategoriesButton from "./GridProducts/CattegoriesButton";
import GridCard from "./GridProducts/GridCard";

export type GridProductsProps = {
    data: {
        id?: number | undefined | null
        title: string
        price: number
        description: string
        category: string
        imageUrl: string
        size: number[] | string[]
        colors: {
            name: string,
            hex: string
        }[]
        ratings: {
            value: number
            count: number
        }
    }[]
}
 
const GridProducts: FunctionComponent<GridProductsProps> = ({data}) => {
    return ( 
        <div className="flex flex-col gap-4">
            <HeaderCaption href="/products" caption="Popular Products" linkCaption="View all" size="lg" />
            <CategoriesButton />
            {/* <GridCard data={data} /> */}
        </div>
     );
}
 
export default GridProducts;