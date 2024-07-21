"use client";
import CategoriesButton from "@/components/GridProducts/CattegoriesButton";
import GridCard from "@/components/GridProducts/GridCard";
import Navbar from "@/components/Navbar";
import PopFeat from "@/components/utils/PopFeat";
import {
  MagnifyingGlass,
  CalendarBlank,
  Coins,
  Heart,
  Person,
  SlidersHorizontal,
  SortAscending,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent, useRef, useState } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  const manifyGlassRef = useRef<HTMLDivElement>(null);
  const inputSearch = useRef<HTMLInputElement>(null);
  const [popFilters, setPopFilters] = useState<boolean>(false);

  const handleClickInput = () => {
    if (manifyGlassRef.current && inputSearch.current) {
      manifyGlassRef.current.style.opacity = "0";
      inputSearch.current.style.paddingLeft = "1rem";
    }
  };

  const handleKeyDownInput = (event: any) => {
    if (
      manifyGlassRef.current &&
      inputSearch.current &&
      !inputSearch.current.value
    ) {
      manifyGlassRef.current.style.opacity = "1";
      inputSearch.current.style.paddingLeft = "2.5rem";
    }
  };

  const handleClose = () => {
    setPopFilters(false);
  };

  const handlePop = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setPopFilters(true);
  };

  return (
    <>
      <div className="covers mh50 hidden-scrollbar min-[450px]:rounded-xl min-[450px]:shadow-2xl min-[450px]:-mt-2">
        <div className="flex flex-col gap-5 relative">
          <div className="flex gap-2 items-center">
            <div className="flex relative flex-1 w-full ">
              <div
                className="absolute h-12 w-8 ps-2 opacity-100 flex items-center text-color-placeholder"
                ref={manifyGlassRef}
              >
                <MagnifyingGlass size={24} />
              </div>
              <form
                className="w-full"
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent form submission
                }}
              >
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full h-12 rounded-xl bg-color-gray ps-10 text-color-secondary px-4"
                  ref={inputSearch}
                  onClick={handleClickInput}
                  onKeyUp={handleKeyDownInput}
                />
              </form>
              <div className="right-0 text-color-placeholder absolute flex items-center h-12 px-2  rounded-e-xl">
                <div className="bg-color-gray ps-2">
                  <X size={20} />
                </div>
              </div>
            </div>
            <div
              onClick={handlePop}
              className="bg-color-secondary  cursor-pointer hover:bg-opacity-20 rounded-full p-2 bg-opacity-10"
            >
              <SlidersHorizontal size={20} />
            </div>
          </div>
          <CategoriesButton />
          <div className="flex justify-between items-center -mt-2">
            <p className="text-sm font-semibold">
              Search for <span className="font-normal">Naruto Jeans</span>
            </p>
          </div>
          <GridCard />
        </div>
      </div>
      <Navbar />

      {/* Pop Filters */}
      <PopFeat title="Filters" onClose={handleClose} isVisible={popFilters}>
        <div className="grid grid-cols-5 text-xs  items-center justify-center">
          <div className="flex flex-col gap-1">
            <SortAscending size={15} />
            <p>Sort</p>
          </div>
          <div className="flex flex-col gap-1">
            <CalendarBlank size={15} />
            <p>Tanggal</p>
          </div>
          <div className="flex flex-col gap-1">
            <Heart size={15} />
            <p>Likes</p>
          </div>
          <div className="flex flex-col gap-1">
            <Person size={15} />
            <p>Size</p>
          </div>
          <div className="flex flex-col gap-1">
            <Coins size={15} />
            <p>Sell</p>
          </div>
          <div className="flex flex-col gap-1">
            <Coins size={15} />
            <p>Sell</p>
          </div>
        </div>
      </PopFeat>

      {/* Pop Filters End */}
    </>
  );
};

export default page;

const filtersData = {
    data: {
      size: ["S", "M", "L", "XL", "XXL"],
    },
  };