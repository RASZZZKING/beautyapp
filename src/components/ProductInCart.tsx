"use client"
import { Minus, Plus } from "@phosphor-icons/react";
import { FunctionComponent } from "react";

interface ProdcutInCartProps {
    
}
 
const ProdcutInCart: FunctionComponent<ProdcutInCartProps> = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
                <div className="aspect-square h-20 bg-color-placeholder rounded-xl"></div>
                <div className="grow flex flex-col gap-1">
                    <div className="flex flex-col">
                    <p className="text-base font-semibold">Crewneck Sweatshirt</p>
                    <p className="text-xs font-semibold opacity-50">Size: 36 - Color: Brown</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-xs font-semibold opacity-50">Rp</p>
                        <p className="font-semibold text-base">700.000</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                <Minus size={18} weight="bold" />
                    <p className="font-semibold text-base">1</p>
                <Plus size={18} weight="bold" className="text-color-main" />
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="aspect-square h-20 bg-color-placeholder rounded-xl"></div>
                <div className="grow flex flex-col gap-1">
                    <div className="flex flex-col">
                    <p className="text-base font-semibold">Crewneck Sweatshirt</p>
                    <p className="text-xs font-semibold opacity-50">Size: 36 - Color: Brown</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-xs font-semibold opacity-50">Rp</p>
                        <p className="font-semibold text-base">700.000</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                <Minus size={18} weight="bold" />
                    <p className="font-semibold text-base">1</p>
                <Plus size={18} weight="bold" className="text-color-main" />
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <div className="aspect-square h-20 bg-color-placeholder rounded-xl"></div>
                <div className="grow flex flex-col gap-1">
                    <div className="flex flex-col">
                    <p className="text-base font-semibold">Crewneck Sweatshirt</p>
                    <p className="text-xs font-semibold opacity-50">Size: 36 - Color: Brown</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-xs font-semibold opacity-50">Rp</p>
                        <p className="font-semibold text-base">700.000</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                <Minus size={18} weight="bold" />
                    <p className="font-semibold text-base">1</p>
                <Plus size={18} weight="bold" className="text-color-main" />
                </div>
            </div>
        </div>
     );
}
 
export default ProdcutInCart;