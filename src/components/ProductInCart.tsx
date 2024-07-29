"use client";
import { theProduct } from "@/libs/dataData";
import { Minus, Plus } from "@phosphor-icons/react";
import { FunctionComponent, useEffect, useState } from "react";

interface ProdcutInCartProps {
  setTotalBiaya: (total: number) => void;
}

const ProdcutInCart: FunctionComponent<ProdcutInCartProps> = ({ setTotalBiaya }) => {
  const [totalBiaya, setTotalBiayaState] = useState(0);

  useEffect(() => {
    let total = 0;
    theProduct.data.slice(0, 3).forEach((cb) => {
      total += cb.price;
    });
    setTotalBiayaState(total);
    setTotalBiaya(total);
  }, []);

  const updateTotal = (amount: number) => {
    setTotalBiayaState((prevTotal) => {
      const newTotal = prevTotal + amount;
      setTotalBiaya(newTotal);
      return newTotal;
    });
  };

  return (
    <div className="flex flex-col gap-4  rounded-xl">
      {theProduct.data.slice(0, 3).map((cb, i) => {
        const [biayaProdukIni, setBiayaProdukIni] = useState<number>(1);
        const ubahBiayaMinus = () => {
          if (biayaProdukIni === 1) return alert("beneran?");
          setBiayaProdukIni(biayaProdukIni - 1);
          updateTotal(-cb.price);
        };
        const ubahBiayaPlus = () => {
          setBiayaProdukIni(biayaProdukIni + 1);
          updateTotal(cb.price);
        };
        return (
          <div key={i} className="flex gap-4 items-center">
            <img src={cb.imageUrl} className="aspect-square h-20 bg-color-placeholder shadow-lg rounded-xl"/>
            <div className="grow flex flex-col gap-1">
              <div className="flex flex-col">
                <p className="text-base font-semibold">{cb.title}</p>
                <p className="text-xs font-semibold opacity-50">
                  Size: {cb.size[0]} - Color: {cb.colors[0].name}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-xs font-semibold opacity-50">$</p>
                <p className="font-semibold text-base">{cb.price * biayaProdukIni}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Minus size={18} weight="bold" onClick={ubahBiayaMinus} className={`${biayaProdukIni === 0 && "disabled"}`} />
              <p className="font-semibold text-base">{biayaProdukIni}</p>
              <Plus size={18} weight="bold" onClick={ubahBiayaPlus} className="text-color-main" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProdcutInCart;
