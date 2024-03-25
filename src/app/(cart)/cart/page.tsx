import LocationClient from "@/components/LocationClient";
import NavPricing from "@/components/NavPricing";
import ProdcutInCart from "@/components/ProductInCart";
import HeaderNav from "@/components/utils/HeaderNav";
import { FC } from "react";

interface pageProps {
    
}
 
const page: FC<pageProps> = () => {
    return ( 
        <>
            <div className="px-4 pt-7 flex flex-col gap-5">
                <HeaderNav model="dot" title="Checkout" />
                <LocationClient />
                <ProdcutInCart />
            </div>
            <NavPricing />
        </>
     );
}
 
export default page;