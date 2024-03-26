"use client"
import { FunctionComponent } from "react";

interface NavPricingProps {
    
}
 
const NavPricing: FunctionComponent<NavPricingProps> = () => {
    return ( 
        <div className=" flex gap-4 flex-col w-full mt-8  shadow-inner pt-5 rounded-lg px-4 pb-2">
            <div className="font-semibold flex justify-between">
                <p className="opacity-50 text-base">Subtotal</p>
                <div className="flex items-center">
                    <p className="text-xs opacity-50">Rp</p>
                    <p className="text-base">700.000</p>
                </div>
            </div>
            <div className="font-semibold flex justify-between">
                <p className="opacity-50 text-base">Delivery</p>
                <div className="flex items-center">
                    <p className="text-xs opacity-50">Rp</p>
                    <p className="text-base">10.000</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="border-color-secondary border-opacity-50 border-t border-dashed w-full h-1"></div>
            </div>
            <div className="flex justify-between">
                <p className="font-bold text-xl">Total</p>
                <div className="flex items-center">
                    <p className="font-bold opacity-50 text-md">Rp</p>
                    <p className="font-bold text-xl">770.000</p>
                </div>
            </div>
            <p className="text-md text-color-placeholder font-semibold">You saved <span className="text-color-main opacity-100">Rp 30.000</span> with this purchase.</p>
            <div className="h-12 bg-color-secondary font-bold text-color-primary flex justify-center items-center rounded-xl text-xl w-full text-center">
                Checkout
            </div>
        </div>
     );
}
 
export default NavPricing;