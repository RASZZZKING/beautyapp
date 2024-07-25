"use client";
import CategoriesButton from "@/components/GridProducts/CattegoriesButton";
import GridCard from "@/components/GridProducts/GridCard";
import Navbar from "@/components/Navbar";
import PopFeat from "@/components/utils/PopFeat";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {
  Calendar,
  DayValue,
  DayRange,
  Day,
} from "react-modern-calendar-datepicker";
import {
  MagnifyingGlass,
  CalendarBlank,
  Coins,
  Heart,
  Person,
  SlidersHorizontal,
  SortAscending,
  X,
  Palette,
  Star,
  ThumbsUp,
} from "@phosphor-icons/react/dist/ssr";
import React, { Children, FunctionComponent, ReactNode, useRef, useState } from "react";

interface pageProps {}

const page: FunctionComponent<pageProps> = () => {
  const manifyGlassRef = useRef<HTMLDivElement>(null);
  const inputSearch = useRef<HTMLInputElement>(null);
  const [popFilters, setPopFilters] = useState<boolean>(false);
  const [popDate, setPopDate] = useState<boolean>(false);

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
    setPopDate(false);
  };

  const handlePop = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setPopFilters(true);
  };

  const handleDate = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setPopDate(true);
  };

  const defaultFrom = {
    year: 2024,
    month: 7,
    day: 20,
  };

  const defaultTo = {
    year: 2024,
    month: 7,
    day: 25,
  };

  const maximumDate = {
    year: 2025,
    month: 1,
    day: 1,
  };

  const minimumDate = {
    year: 2024,
    month: 1,
    day: 1,
  };

  const [selectedDay, setSelectedDay] = useState<DayRange>({
    from: defaultFrom,
    to: defaultTo,
  });

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
        <div className="grid grid-cols-5 gap-x-2 text-xs  items-center justify-center gap-y-2 mt-4">
          <div
            onClick={handleDate}
            className="flex flex-col items-center cursor-pointer justify-center gap-1"
          >
            <p>Date</p>
          </div>
          {
            iconPopUp.data.map((cb,i)=>(
              <ItemsPopUp name={cb.name} key={i} >{cb.icons}</ItemsPopUp>
            ))
          }
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden mb-4 ${
            popDate ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            locale={"en"}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
          />
        </div>
      </PopFeat>
      {/* Pop Filters End */}
    </>
  );
};

export default page;

interface ItemPop {
  children: React.ReactNode
  name: string
}
const ItemsPopUp: FunctionComponent<ItemPop> = ({children, name}) => {
  return (
    <div className="flex flex-col items-center cursor-pointer justify-center gap-1">
      <div className="p-1 w-full bg-color-placeholder rounded items-center justify-center flex flex-col">
        {children}
        <p>{name}</p>
      </div>
    </div>
  );
};

const iconPopUp = {
  data: [
    {
      name: "Date",
      icons: <CalendarBlank size={15} weight="bold" />,
    },
    {
      name: "Likes",
      icons: <Heart size={15} weight="bold" />,
    },

    {
      name: "Size",
      icons: <Person size={15} weight="bold" />,
    },
    {
      name: "Sell",
      icons: <Coins size={15} weight="bold" />,
    },
    {
      name: "Ratings",
      icons: <Star size={15} weight="bold" />,
    },
    {
      name: "Color",
      icons: <Palette size={15} weight="bold" />,
    },
    {
      name: "Popular",
      icons: <ThumbsUp size={15} weight="bold" />,
    },
  ],
};
