"use client"
import { Star } from "@phosphor-icons/react";
import { FunctionComponent, useState } from "react";
import Link from "next/link"

interface DescDetailProps {
  keyz: number | string
    title: string
    ratters: number
    rating: number
    reviewers: number
    desc: string
}

const DescDetail: FunctionComponent<DescDetailProps> = ({title, desc, rating, ratters, reviewers, keyz}) => {
 
  return (
    <>
      {/* title  */}
      <div className="flex flex-col">
        <p className="text-2xl font-semibold">{title}</p>
        <div className="flex gap-2">
          <div className="flex gap-1">
          <Star size={18} weight="fill" color="#ffce47" />
            <p className="font-bold text-sm">
              {rating} <span className="text-color-secondary opacity-50">({ratters})</span>
              <span className="ms-3">•</span>
            </p>
          </div>
          <div className="opacity-50">
            <div className="text-sm font-bold">see these <Link className="text-color-main" href={`/reviews/${keyz}`}>Reviews</Link> product </div>
          </div>
        </div>
      </div>

      {/* desc  */}
      <div className="w-full  ">
        <ReadMore maxLength={77}>
          {desc}
        </ReadMore>
      </div>
    </>
  );
};

export default DescDetail;

const ReadMore = ({
    children,
    maxLength,
  }: {
    children: string;
    maxLength: number;
  }) => {
    const [isTruncated, setIsTruncated] = useState(true);
  
    const toggleTruncate = () => {
      setIsTruncated(!isTruncated);
    };
    const redLES = "  Read less";
  
    return (
      <div>
        {isTruncated ? (
          <>
            <span className="opacity-50">{children.slice(0, maxLength)}</span>
            <span className="opacity-50">... </span>
            <button className="text-color-main" onClick={toggleTruncate}>
              Read more
            </button>
          </>
        ) : (
          <>
            {children}
            <button className="text-color-main ms-1" onClick={toggleTruncate}>
              {"   "}
              {redLES}
            </button>
          </>
        )}
      </div>
    );
  };
  