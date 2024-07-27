"use client";
import CategoriesButton from "@/components/GridProducts/CattegoriesButton";
import GridCard from "@/components/GridProducts/GridCard";
import Navbar from "@/components/Navbar";
import PopFeat from "@/components/utils/PopFeat";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import {
  Calendar,
  DayRange,
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
import React, {
  FunctionComponent,
  useRef,
  useState,
} from "react";

interface pageProps {
  params: {
    keyword: string
  },
}

type ActiveIconState = {
  date: boolean;
  likes: boolean;
  size: boolean;
  sell: boolean;
  ratings: boolean;
  color: boolean;
  popular: boolean;
};
type SizingState = {
  XS: boolean;
  S: boolean;
  M: boolean;
  L: boolean;
  X: boolean;
  XL: boolean;
};
type ColorsState = {
  blue: boolean; // Blue
  black: boolean; // Black
  white: boolean; // White
  maroon: boolean; // Maroon
  gray: boolean; // Gray
  beggie: boolean; // Beige
  gold: boolean; // Gold
  navy: boolean; // Navy
  coral: boolean; // Coral
  olive: boolean; // Olive
  teal: boolean; // Teal
  lavender: boolean; // Lavender
  khaki: boolean; // Khaki
  peach: boolean; // Peach
  plum: boolean; // Plum
  sienna: boolean;
};
type ViewState = {
  date: boolean;
  size: boolean;

  color: boolean;
};

const page: FunctionComponent<pageProps> = ({params}) => {
  const { keyword } = params
  const keywordURI = decodeURIComponent(keyword)
  const manifyGlassRef = useRef<HTMLDivElement>(null);
  const inputSearch = useRef<HTMLInputElement>(null);
  const [popFilters, setPopFilters] = useState<boolean>(false);
  const [showSize, setShowSize] = useState<boolean>(false);
  const [showDate, setShowDate] = useState<boolean>(false);
  const [showColor, setShowColor] = useState<boolean>(false);
  const [activeIcon, setActiveIcon] = useState<ActiveIconState>({
    date: false,
    likes: false,
    size: false,
    sell: false,
    ratings: false,
    color: false,
    popular: false,
  });
  const [showPage, setShowPage] = useState({
    date: false,
    size: false,
    color: false,
  });
  const [sizing, setSizing] = useState<SizingState>({
    XS: false,
    S: false,
    M: false,
    L: false,
    X: false,
    XL: false,
  });
  const [colorss, setColorss] = useState<ColorsState>({
    blue: false, // Blue
    black: false, // Black
    white: false, // White
    maroon: false, // Maroon
    gray: false, // Gray
    beggie: false, // Beige
    gold: false, // Gold
    navy: false, // Navy
    coral: false, // Coral
    olive: false, // Olive
    teal: false, // Teal
    lavender: false, // Lavender
    khaki: false, // Khaki
    peach: false, // Peach
    plum: false, // Plum
    sienna: false,
  });

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

  const updateActiveIcon = (iconName: keyof ActiveIconState) => {
    setActiveIcon((prevState) => ({
      ...prevState,
      [iconName]: !prevState[iconName],
    }));
  };
  const updateSizingState = (size: keyof SizingState) => {
    setSizing((prevState) => ({
      ...prevState,
      [size]: !prevState[size],
    }));
  };
  const updateColorsState = (color: keyof ColorsState) => {
    setColorss((prevState) => ({
      ...prevState,
      [color]: !prevState[color],
    }));
  };
  const updateShowState = (view: keyof ViewState) => {
    setShowPage((prevState) => ({
      ...prevState,
      [view]: !prevState[view],
    }));
  };

  const handleSize = () => {
    if (showColor === true || showDate === true) {
      //kalau pop up nya muncul ni
      if (activeIcon.size === false) {
        // kalau ikonya mau aktif
        // !satu paket start
        setShowSize(true);
        setActiveIcon((prevState) => ({
          ...prevState,
          size: true,
        }));
        // !satu paket end
      } else if (activeIcon.size === true) {
        // kalau iconnya aktif tapi popupnya ga muncul
        if (showSize === false) {
          setShowSize(true);
        } else {
          setActiveIcon((prevState) => ({ ...prevState, size: false }));
          setShowSize(false);
        }
        // kalau iconnya aktif dan popupnya muncul
      }
      setShowDate(false); // matiin popupnya
      setShowColor(false);
    } else if (
      showColor === false &&
      showDate === false &&
      showSize === false &&
      activeIcon.size === false
    ) {
      // !satu paket start
      setShowSize(true);
      setActiveIcon((prevState) => ({
        ...prevState,
        size: true,
      }));
      // !satu paket end
    } else if (activeIcon.size === true) {
      if (showSize === true) {
      // !satu paket start
      setShowSize(false);
      setActiveIcon((prevState) => ({
        ...prevState,
        size: false,
      }));
      // !satu paket end
    }else{
      setShowSize(true)
    }
    }
    // if true return false, if false return true. i want if false return true, if props <= 1 active return showSize true when showSize false, if showSize true you can turn off the togle to false and show the previous showState
  };
  const handleColorss = () => {
    if (showSize || showDate) {
      //kalau pop up nya muncul ni
      if (activeIcon.color === false) {
        // kalau ikonya mau aktif
        // !satu paket start
        setShowColor(true);
        setActiveIcon((prevState) => ({
          ...prevState,
          color: true,
        }));
        // !satu paket end
      } else if (activeIcon.color === true) {
        // kalau iconnya aktif tapi popupnya ga muncul
        if (showColor === false) {
          setShowColor(true);
        } else {
          setActiveIcon((prevState) => ({ ...prevState, color: false }));
          setShowColor(false);
        }
        // kalau iconnya aktif dan popupnya muncul
      }
      setShowDate(false); // matiin popupnya
      setShowSize(false);
    } else if (
      showColor === false &&
      showDate === false &&
      showSize === false &&
      activeIcon.color === false
    ) {
      // !satu paket start
      setShowColor(true);
      setActiveIcon((prevState) => ({
        ...prevState,
        color: true,
      }));
      // !satu paket end
    } else if (activeIcon.color === true) {
      // !satu paket start
      if (showColor === true) {
      setShowColor(false);
      setActiveIcon((prevState) => ({
        ...prevState,
        color: false,
      }));
      // !satu paket end
    }else{
      setShowColor(true);

    }
    }
    // if true return false, if false return true. i want if false return true, if props <= 1 active return showSize true when showSize false, if showSize true you can turn off the togle to false and show the previous showState
  };
  const handleDate = () => {
    if (showSize || showColor) {
      //kalau pop up nya muncul ni
      if (activeIcon.date === false) {
        // kalau ikonya mau aktif
        // !satu paket start
        setShowDate(true);
        setActiveIcon((prevState) => ({
          ...prevState,
          date: true,
        }));
        // !satu paket end
      } else if (activeIcon.date === true) {
        // kalau iconnya aktif tapi popupnya ga muncul
        if (showDate === false) {
          setShowDate(true);
        } else {
          setActiveIcon((prevState) => ({ ...prevState, date: false }));
          setShowDate(false);
        }
        // kalau iconnya aktif dan popupnya muncul
      }
      setShowColor(false); // matiin popupnya
      setShowSize(false);
    } else if (
      showColor === false &&
      showDate === false &&
      showSize === false &&
      activeIcon.date === false
    ) {
      // !satu paket start
      setShowDate(true);
      setActiveIcon((prevState) => ({
        ...prevState,
        date: true,
      }));
      // !satu paket end
    } else if (activeIcon.date === true) {
      // !satu paket start
      if (showDate === true) {
        setShowDate(false);
        setActiveIcon((prevState) => ({
          ...prevState,
          date: false,
        }));
        // !satu paket end
      } else {
        setShowDate(true);
      }
    } else {
    }
    // if true return false, if false return true. i want if false return true, if props <= 1 active return showSize true when showSize false, if showSize true you can turn off the togle to false and show the previous showState
  };
  const iconPopUp = {
    data: [
      {
        name: "date" as keyof ActiveIconState,
        icons: <CalendarBlank size={15} weight="bold" />,
        onClick: handleDate,
      },
      {
        name: "likes" as keyof ActiveIconState,
        icons: <Heart size={15} weight="bold" />,
        onClick: () => updateActiveIcon("likes"),
      },

      {
        name: "size" as keyof ActiveIconState,
        icons: <Person size={15} weight="bold" />,
        onClick: handleSize,
      },
      {
        name: "sell" as keyof ActiveIconState,
        icons: <Coins size={15} weight="bold" />,
        onClick: () => updateActiveIcon("sell"),
      },
      {
        name: "ratings" as keyof ActiveIconState,
        icons: <Star size={15} weight="bold" />,
        onClick: () => updateActiveIcon("ratings"),
      },
      {
        name: "color" as keyof ActiveIconState,
        icons: <Palette size={15} weight="bold" />,
        onClick: handleColorss,
      },
      {
        name: "popular" as keyof ActiveIconState,
        icons: <ThumbsUp size={15} weight="bold" />,
        onClick: () => updateActiveIcon("popular"),
      },
    ],
  };

  interface ItemPop {
    children: React.ReactNode;
    name: keyof ActiveIconState;
    onClick: React.ReactEventHandler;
  }
  const ItemsPopUp: FunctionComponent<ItemPop> = ({
    children,
    name,
    onClick,
  }) => {
    return (
      <div className="flex flex-col items-center cursor-pointer justify-center gap-1  transition-all duration-500 ease-in-out">
        <div
          onClick={onClick}
          className={`p-1 w-full rounded items-center  transition-all duration-500 ease-in-out justify-center flex flex-col ${
            activeIcon[name] ? "bg-color-placeholder" : "bg-color-primary"
          }`}
        >
          {children}
          <p className="capitalize">{name}</p>
        </div>
      </div>
    );
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
          <div className="flex justify-between items-center gap-3 -mt-2">
            <p className="text-sm font-semibold text-wrap">
              Search for <span className="font-normal">{keywordURI}</span>
            </p>
            <p className="text-sm">
              some products that you <span className="font-semibold">like</span>
            </p>
          </div>
          <GridCard />
        </div>
      </div>
      <Navbar />

      {/* Pop Filters */}
      <PopFeat title="Filters" onClose={handleClose} isVisible={popFilters}>
        <div className="grid grid-cols-5 gap-x-2 text-xs items-center justify-center gap-y-2 mt-4">
          {iconPopUp.data.map((cb, i) => (
            <ItemsPopUp onClick={cb.onClick} name={cb.name} key={i}>
              {cb.icons}
            </ItemsPopUp>
          ))}
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden  ${
            showDate ? "max-h-[320px] mt-0" : "max-h-0"
          }`}
        >
          <div className="w-full flex justify-center items-center h-full">

          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            locale={"en"}
            maximumDate={maximumDate}
            minimumDate={minimumDate}
          />
          </div>
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            showSize ? "max-h-[300px] mt-4" : "max-h-0"
          }`}
        >
          <div className="w-full grid grid-cols-6 gap-2">
            {dataSize.data.map((cb, i) => (
              <label
                className={`btn transition-all duration-0 ${
                  true === sizing[cb] &&
                  "bg-color-main hover:bg-opacity-70 hover:bg-color-main text-color-primary relative"
                }`}
                key={i}
                // onClick={() => setSizeFilter(cb)}
                onChange={() => updateSizingState(cb)}
              >
                <input
                  type="checkbox"
                  name="sizeInput"
                  className="opacity-0 absolute"
                />
                {cb}
              </label>
            ))}
          </div>
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            showColor ? "max-h-[300px] my-4" : "max-h-0"
          }`}
        >
          <div className="w-full grid grid-cols-6 gap-3 my-3 pe-3">
            {colors.data.map((cb, index: number) => {
              return (
                <label
                  key={index}
                  style={{ backgroundColor: `${cb.hex}` }}
                  className={`aspect-square cursor-pointer ${
                    colorss[cb.name] === true
                      ? "ring-2 liked2"
                      : "opacity-85 border border-color-placeholder border-opacity-70"
                  } shadow-xl ring-color-placeholder ring-purple-500 ms-2 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 m-0 h-10 rounded-xl `}
                >
                  <input
                    type="radio"
                    name="selectColor"
                    value={cb.name}
                    onChange={() => updateColorsState(cb.name)}
                    className="opacity-0"
                  />
                </label>
              );
            })}
          </div>
        </div>
      </PopFeat>
      {/* Pop Filters End */}
    </>
  );
};

export default page;

const dataSize = {
  data: [
    "XS" as keyof SizingState,
    "S" as keyof SizingState,
    "M" as keyof SizingState,
    "L" as keyof SizingState,
    "X" as keyof SizingState,
    "XL" as keyof SizingState,
  ],
};

const colors = {
  data: [
    { name: "blue" as keyof ColorsState, hex: "#0000FF" }, // Blue
    { name: "black" as keyof ColorsState, hex: "#000000" }, // Black
    { name: "white" as keyof ColorsState, hex: "#FFFFFF" }, // White
    { name: "maroon" as keyof ColorsState, hex: "#800000" }, // Maroon
    { name: "gray" as keyof ColorsState, hex: "#808080" }, // Gray
    { name: "beggie" as keyof ColorsState, hex: "#F5F5DC" }, // Beige
    { name: "gold" as keyof ColorsState, hex: "#FFD700" }, // Gold
    { name: "navy" as keyof ColorsState, hex: "#000080" }, // Navy
    { name: "coral" as keyof ColorsState, hex: "#FF7F50" }, // Coral
    { name: "olive" as keyof ColorsState, hex: "#808000" }, // Olive
    { name: "teal" as keyof ColorsState, hex: "#008080" }, // Teal
    { name: "lavender" as keyof ColorsState, hex: "#E6E6FA" }, // Lavender
    { name: "khaki" as keyof ColorsState, hex: "#F0E68C" }, // Khaki
    { name: "peach" as keyof ColorsState, hex: "#FFDAB9" }, // Peach
    { name: "plum" as keyof ColorsState, hex: "#DDA0DD" }, // Plum
    { name: "sienna" as keyof ColorsState, hex: "#A0522D" },
  ],
};
