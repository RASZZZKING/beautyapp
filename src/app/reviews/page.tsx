"use client";
import HeaderNav from "@/components/utils/HeaderNav";
import { theProduct } from "@/libs/dataData";
import {
  Camera,
  SortAscending,
  SortDescending,
  Star,
  StarFour,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent, useState, useEffect, useRef } from "react";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  const [showImage, setShowImage] = useState(false);
  const [slowShowImage, setslowShowImage] = useState(false);
  const [showImageUrl, setShowImageUrl] = useState("/lakikecil.png");
  const [totalStar, setTotalStar] = useState<number>(5)
  const [menu, setMenu] = useState<string>("all")
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (imageWrapperRef.current && !imageWrapperRef.current.contains(event.target as Node)) {
      handleSlowmo()
    }
  };
  const handleSlowmo = () => {
    setslowShowImage(true)
    setTimeout(()=>{
        setShowImage(false)
        setslowShowImage(false)
    },300)
  }
  useEffect(() => {
    if (showImage) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showImage]);

  const handleShowImage = (url: string) => {
    setShowImageUrl(url);
    setShowImage(true);
  };

  return (
    <div className="bg-color-primary relative min-[450px]:rounded-2xl min-[450px]:shadow-2xl mh50 hidden-scrollbar">
      {showImage && (
        <div className={`fixed  ${slowShowImage?"fadeOut":"fadeIn"} left-0 top-0 flex z-50 items-center  justify-center h-full w-full`}>
          <div  className="bg-color-secondary mw500 flex items-center justify-center  bg-opacity-60 w-full h-full min-[450px]:rounded-2xl min-[450px]:shadow-2xl mh50 hidden-scrollbar">
            <div ref={imageWrapperRef}>
            <img src={showImageUrl} className="z-10 rounded-md object-scale-down max-h-96" />
            </div>
          </div>
        </div>
      )}
      <div className="p-4 pt-7 flex flex-col gap-5 min-[450px]:px-6 min-[450px]:-mt-2">
        <HeaderNav model="cart" title="Review" />
        <div className="flex gap-3 w-full max-w-full">
          <div onClick={()=>setMenu("all")} className={`flex-1 btn transition-all duration-300 ${menu === "all" ? "btn-neutral":"btn-outline"} btn-md`}>All</div>
          <div onClick={()=>setMenu("photo")} className={`btn ${menu === "photo" ? "btn-neutral":"btn-outline"} transition-all duration-300 btn-md`}>
            With Photo <Camera size={20} weight="bold" />
          </div>
          <div onClick={()=>setMenu("video")} className={`btn ${menu === "video" ? "btn-neutral":"btn-outline"} transition-all duration-300 btn-md`}>
            With Video <VideoCamera size={20} weight="bold" />
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between -mt-3 w-full max-w-full">
          <div onClick={()=>setTotalStar(1)} className={`btn ${totalStar === 1 ?"btn-neutral":"btn-outline"} btn-xs`}>
            <Star size={13} weight={totalStar === 1?"fill":"bold"} />
          </div>
          <div onClick={()=>setTotalStar(2)} className={`btn ${totalStar === 2 ?"btn-neutral":"btn-outline"} btn-xs`}>
            <Star size={13} weight={totalStar === 2?"fill":"bold"} />
            <Star size={13} weight={totalStar === 2?"fill":"bold"} />
          </div>
          <div onClick={()=>setTotalStar(3)} className={`btn ${totalStar === 3 ?"btn-neutral":"btn-outline"} btn-xs`}>
            <Star size={13} weight={totalStar === 3?"fill":"bold"} />
            <Star size={13} weight={totalStar === 3?"fill":"bold"} />
            <Star size={13} weight={totalStar === 3?"fill":"bold"} />
          </div>
          <div onClick={()=>setTotalStar(4)} className={`btn ${totalStar === 4 ?"btn-neutral":"btn-outline"} btn-xs`}>
            <Star size={13} weight={totalStar === 4?"fill":"bold"} />
            <Star size={13} weight={totalStar === 4?"fill":"bold"} />
            <Star size={13} weight={totalStar === 4?"fill":"bold"} />
            <Star size={13} weight={totalStar === 4?"fill":"bold"} />
          </div>
          <div onClick={()=>setTotalStar(5)} className={`btn ${totalStar === 5 ?"btn-neutral":"btn-outline"} btn-xs`}>
            <Star size={13} weight={totalStar === 5?"fill":"bold"} />
            <Star size={13} weight={totalStar === 5?"fill":"bold"} />
            <Star size={13} weight={totalStar === 5?"fill":"bold"} />
            <Star size={13} weight={totalStar === 5?"fill":"bold"} />
            <Star size={13} weight={totalStar === 5?"fill":"bold"} />
          </div>
        </div>
        <div className="grid gap-6">
          <ReviewComps
            star={dataCoba.star}
            imageSenderUrl={dataCoba.imageSenderUrl}
            nameSender={dataCoba.nameSender}
            imageProductUrl={dataCoba.imageProductUrl}
            description={dataCoba.description}
            handleShowImage={handleShowImage}
          />
          <ReviewComps
            star={dataCoba.star}
            imageSenderUrl={dataCoba.imageSenderUrl}
            nameSender={dataCoba.nameSender}
            imageProductUrl={dataCoba.imageProductUrl}
            description={dataCoba.description}
            handleShowImage={handleShowImage}
          />
          <ReviewComps
            star={dataCoba.star}
            imageSenderUrl={dataCoba.imageSenderUrl}
            nameSender={dataCoba.nameSender}
            imageProductUrl={dataCoba.imageProductUrl}
            description={dataCoba.description}
            handleShowImage={handleShowImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

type ReviewNih = {
  star: number;
  imageSenderUrl: string;
  imageProductUrl?: string[];
  videoProductUrl?: string[];
  nameSender: string;
  description: string;
};
const dataCoba: ReviewNih = {
  star: 4,
  imageSenderUrl: "/lakikecil.png",
  imageProductUrl: [
    theProduct.data[10].imageUrl,
    theProduct.data[11].imageUrl,
    theProduct.data[12].imageUrl,
  ],
  nameSender: "Farras Akra",
  description: `I absolutely love this product! It's been a game-changer in my kitchen. The air fryer function works like a charm, and I've been able to make all sorts of delicious, healthier meals. Highly recommend!`,
};

export const ReviewComps = ({
  star,
  imageSenderUrl,
  imageProductUrl,
  nameSender,
  description,
  handleShowImage,
}: {
  star: number;
  imageSenderUrl: string;
  nameSender: string;
  imageProductUrl?: string[];
  description: string;
  handleShowImage: (url: string) => void;
}) => {
  const dipencet = (url: string) => {
    handleShowImage(url);
  };
  return (
    <div className="flex gap-4">
      <div>
        <img
          src={imageSenderUrl}
          className="rounded-full object-cover w-12 h-12 border"
        />
      </div>
      <div className="grid gap-2 flex-1">
        <div className="flex items-center gap-2">
          <div className="font-medium">{nameSender}</div>
          <div className="flex items-center gap-0.5 text-warning">
            <Star className="w-5 h-5" weight={star > 0 ? "fill" : "regular"} />
            <Star className="w-5 h-5" weight={star > 1 ? "fill" : "regular"} />
            <Star className="w-5 h-5" weight={star > 2 ? "fill" : "regular"} />
            <Star className="w-5 h-5" weight={star > 3 ? "fill" : "regular"} />
            <Star className="w-5 h-5" weight={star > 4 ? "fill" : "regular"} />
          </div>
        </div>
        <div className="text-sm leading-loose text-muted-foreground">
          <p>{description}</p>
        </div>
        <div className="flex gap-2">
          {imageProductUrl?.map((cb, i) => (
            <img
              key={i}
              onClick={() => dipencet(cb)}
              src={cb}
              className="min-h-20 contrast-50 cursor-pointer rounded-lg aspect-square object-cover max-h-20"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
