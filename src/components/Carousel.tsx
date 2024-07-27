"use client"
import { FunctionComponent, useEffect, useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
  slides?: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: FunctionComponent<CarouselProps> = ({
  children,
  slides = [],
  autoSlide = true,
  autoSlideInterval = 4000,
}) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    const after = current === slides.length - 1 ? 0 : current + 1;
    setCurrent(after);
  };

  const prev = () => {
    const after = current === 0 ? slides.length - 1 : current - 1;
    setCurrent(after);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [current, autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative rounded-xl">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="p-1 rounded-full shadow bg-color-gray text-gray-800 hover:bg-color-primary">
                    <CaretCircleLeft size={22} />
                </button>
                <button onClick={next} className="p-1 rounded-full shadow bg-color-gray text-gray-800 hover:bg-color-primary">
                    <CaretCircleRight size={22} />
                </button>
            </div> */}
      <div className="absolute bottom-1.5 right-14 ">
        <div className="flex items-center justify-center gap-2">
          {slides.map((cb: string, index: number) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer transition-all w-2 h-2 bg-color-primary rounded-full
                        ${current === index ? "p-[0.32rem]" : "bg-opacity-50"}
                        `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
