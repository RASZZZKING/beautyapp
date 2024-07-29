"use client"
import { useRouter } from "next/navigation";
import { FunctionComponent, useRef, useState } from "react";

interface TagPricingProps {
    price: number
}
 
const TagPricing: FunctionComponent<TagPricingProps> = ({price}) => {
  const router = useRouter()
    const [clicked, setClicked] = useState<Boolean>(false)
    const handleClick = () => {
      
        setClicked(true)
        router.push("/cart")
        setTimeout(() => {
            setClicked(false)
        }, 400);
    }
    return ( 
        <div className="opacity-100 buttum absolute mw500 max-[450px]:fixed w-full  bg-color-primary border-opacity-30 border-color-placeholder border-t rounded-xl min-[450px]:-mt-[4.3rem]">
        <div className=" flex justify-between bg-color-primary w-full h-20 items-center px-6 py-4 rounded-xl">
          <div className="flex gap-2 justify-center items-center">
            <div className="flex items-end gap-1">
              <p className="text-md opacity-50">$</p>
              <p className="text-xl font-semibold">{price - 20}</p>
            </div>
            <p className="text-sm opacity-50 line-through">{price}</p>
          </div>
          <div  onClick={handleClick} className={`${clicked && "liked3"} bg-color-secondary cursor-pointer h-full w-36 rounded-xl flex justify-center items-center`}>
            <p className="text-md text-color-primary">Add to cart</p>
          </div>
        </div>
      </div>
     );
}
 
export default TagPricing;