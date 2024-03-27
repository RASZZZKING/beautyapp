import LocationClient from "@/components/LocationClient";
import NavPricing from "@/components/NavPricing";
import ProdcutInCart from "@/components/ProductInCart";
import HeaderNav from "@/components/utils/HeaderNav";
import { FC } from "react";

interface pageProps {
    
}
 
const page: FC<pageProps> = () => {
    return ( 
        <div className="bg-color-primary min-[450px]:p-2 min-[450px]:rounded-2xl min-[450px]:shadow-2xl mh50 hidden-scrollbar min-[450px]:-mt-2">
            <div className="px-4 pt-7 flex flex-col gap-5">
                <HeaderNav model="dot" title="Checkout" />
                <LocationClient />
                <ProdcutInCart />
            </div>
            <NavPricing />
        </div>
     );
}
 
export default page;