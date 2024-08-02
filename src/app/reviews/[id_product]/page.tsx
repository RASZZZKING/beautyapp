"use client";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import HeaderNav from "@/components/utils/HeaderNav";
import dataReview, {
  dataFotoProfil,
  dataVideoURL,
  descriptions,
  indonesianNames,
} from "@/libs/dataReview";
import { Camera, Star, VideoCamera } from "@phosphor-icons/react/dist/ssr";
import { theProduct } from "@/libs/dataData";
import ReviewComps from "@/components/ReviewComps";

interface PageProps {
  params: {
    id_product: number;
  };
}

const Page: FunctionComponent<PageProps> = ({ params }) => {
  const { id_product } = params;
  // console.log("🚀 ~ id_product:", theProduct.data[id_product].title )
  const catProduct = theProduct.data[id_product].category;

  const [showImage, setShowImage] = useState(false);
  const [slowShowImage, setslowShowImage] = useState(false);
  const [showImageUrl, setShowImageUrl] = useState("/lakikecil.png");
  const [totalStar, setTotalStar] = useState<number>(5);
  const [menu, setMenu] = useState<string>("all");
  const [typeShow, setTypeImage] = useState<string>("img")
  const [reviewData, setReviewData] = useState(dataReview.data);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      imageWrapperRef.current &&
      !imageWrapperRef.current.contains(event.target as Node)
    ) {
      handleSlowmo();
    }
  };

  const handleSlowmo = () => {
    setslowShowImage(true);
    setTimeout(() => {
      setShowImage(false);
      setslowShowImage(false);
    }, 300);
  };

  const handleShowImage = (url: string, type: string) => {
    setShowImageUrl(url);
    setTypeImage(type);
    setShowImage(true);
  };

  return (
    <div className="bg-color-primary relative min-[450px]:rounded-2xl min-[450px]:shadow-2xl mh50 hidden-scrollbar">
      {showImage && (
        <div
          className={`fixed ${
            slowShowImage ? "fadeOut" : "fadeIn"
          } left-0 top-0 flex z-50 items-center  justify-center h-full w-full`}
        >
          <div className="bg-color-secondary mw500 flex items-center justify-center  bg-opacity-60 w-full h-full min-[450px]:rounded-2xl min-[450px]:shadow-2xl mh50 hidden-scrollbar">
            <div ref={imageWrapperRef}>
              {
                typeShow === "img" ?
                (
                  <img
                    src={showImageUrl}
                    className="z-10 rounded-md object-scale-down max-h-96"
                  />
                ) :
                (
                  <video
                  autoPlay
                    
                    src={showImageUrl}
                    className="z-10 rounded-md object-scale-down max-h-96"
                  ></video>
                ) 
              }
            </div>
          </div>
        </div>
      )}
      <div className="p-4 pt-7 flex flex-col gap-5 min-[450px]:px-6 min-[450px]:-mt-2">
        <HeaderNav model="cart" title="Review" />
        <div className="flex gap-3 w-full max-w-full">
          <div
            onClick={() => setMenu("all")}
            className={`flex-1 btn transition-all duration-300 ${
              menu === "all" ? "btn-neutral" : "btn-outline"
            } btn-md`}
          >
            All
          </div>
          <div
            onClick={() => setMenu("photo")}
            className={`btn ${
              menu === "photo" ? "btn-neutral" : "btn-outline"
            } transition-all duration-300 btn-md`}
          >
            With Photo <Camera size={20} weight="bold" />
          </div>
          <div
            onClick={() => setMenu("video")}
            className={`btn ${
              menu === "video" ? "btn-neutral" : "btn-outline"
            } transition-all duration-300 btn-md`}
          >
            With Video <VideoCamera size={20} weight="bold" />
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between -mt-3 w-full max-w-full">
          <div
            onClick={() => setTotalStar(1)}
            className={`btn text-warning shadow btn-xs`}
          >
            <Star size={13} weight={totalStar === 1 ? "fill" : "bold"} />
          </div>
          <div
            onClick={() => setTotalStar(2)}
            className={`btn text-warning shadow btn-xs`}
          >
            <Star size={13} weight={totalStar === 2 ? "fill" : "bold"} />
            <Star size={13} weight={totalStar === 2 ? "fill" : "bold"} />
          </div>
          <div
            onClick={() => setTotalStar(3)}
            className={`btn text-warning shadow btn-xs`}
          >
            <Star size={13} weight={totalStar === 3 ? "fill" : "bold"} />
            <Star size={13} weight={totalStar === 3 ? "fill" : "bold"} />
            <Star size={13} weight={totalStar === 3 ? "fill" : "bold"} />
          </div>
          <div
            onClick={() => setTotalStar(4)}
            className={`btn text-warning shadow btn-xs`}
          >
            <Star size={13} weight={totalStar === 4 ? "fill" : "bold"} />
            <Star size={13} weight={totalStar === 4 ? "fill" : "bold"} />
            <Star size={13} weight={totalStar === 4 ? "fill" : "bold"} />
            <Star size={13} weight={totalStar === 4 ? "fill" : "bold"} />
          </div>
          <div
            onClick={() => setTotalStar(5)}
            className={`btn text-warning shadow btn-xs`}
          >
            <Star size={13} weight={totalStar === 5 ? "fill" : "bold"} />
            <Star size={13} weight={totalStar === 5 ? "fill" : "bold"} />
            <Star size={13} weight={totalStar === 5 ? "fill" : "bold"} />
            <Star size={13} weight={totalStar === 5 ? "fill" : "bold"} />
            <Star size={13} weight={totalStar === 5 ? "fill" : "bold"} />
          </div>
        </div>
        <div className="grid gap-6">
          <ReviewComps
            star={totalStar}
            imageSenderUrl={dataFotoProfil[totalStar]}
            nameSender={indonesianNames[id_product]}
            imageProductUrl={[
              `/assets/sweeater${totalStar}.jpeg`,
              `/assets/sweeater${totalStar + 1}.jpeg`,
            ]}
            description={descriptions[totalStar]}
            handleShowImage={handleShowImage}
            thumbnailVideo={dataVideoURL[totalStar].thumbnailUrl}
            videoUrl={dataVideoURL[totalStar].videoUrl}
          />
          <ReviewComps
            thumbnailVideo={dataVideoURL[totalStar + 4].thumbnailUrl}
            star={totalStar}
            imageSenderUrl={dataFotoProfil[totalStar + 1]}
            nameSender={indonesianNames[totalStar + 1]}
            imageProductUrl={[
              `/assets/sweeater${totalStar + 2}.jpeg`,
              `/assets/sweeater${totalStar + 3}.jpeg`,
            ]}
            description={descriptions[totalStar + 4]}
            handleShowImage={handleShowImage}
            videoUrl={dataVideoURL[totalStar+4].videoUrl}
          />
          {menu !== "video" && (
            <ReviewComps
              star={totalStar}
              imageSenderUrl={dataFotoProfil[totalStar + 2]}
              nameSender={indonesianNames[totalStar + 2]}
              imageProductUrl={[
                `/assets/sweeater${totalStar + 4}.jpeg`,
                `/assets/sweeater${totalStar + 5}.jpeg`,
              ]}
              description={descriptions[totalStar + 5]}
              handleShowImage={handleShowImage}
            />
          )}
          {menu === "all" && (
            <>
              <ReviewComps
                star={totalStar}
                imageSenderUrl={dataFotoProfil[totalStar + 3]}
                nameSender={indonesianNames[totalStar + 3]}
                description={descriptions[totalStar + -1]}
                handleShowImage={handleShowImage}
              />
              <ReviewComps
                star={totalStar}
                imageSenderUrl={dataFotoProfil[totalStar + 4]}
                nameSender={indonesianNames[totalStar + 4]}
                handleShowImage={handleShowImage}
              />
              <ReviewComps
                star={totalStar}
                imageSenderUrl={dataFotoProfil[totalStar + 5]}
                nameSender={indonesianNames[totalStar + 5]}
                handleShowImage={handleShowImage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;


