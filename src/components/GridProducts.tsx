import { FunctionComponent } from "react";
import HeaderCaption from "./utils/HeaderCaption";
import CategoriesButton from "./GridProducts/CattegoriesButton";
import GridCard from "./GridProducts/GridCard";

interface GridProductsProps {
    
}
 
const GridProducts: FunctionComponent<GridProductsProps> = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <HeaderCaption href="/products" caption="Popular Products" linkCaption="View all" size="lg" />
            <CategoriesButton />
            <GridCard />
        </div>
     );
}
 
export default GridProducts;