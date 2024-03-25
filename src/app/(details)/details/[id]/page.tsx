"use client";
import HeaderCaption from "@/components/utils/HeaderCaption";
import { FunctionComponent, useState } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const page: FunctionComponent<pageProps> = ({ params }) => {
  const { id } = params;

  return (
    <>
      <div className="covers2  flex flex-col gap-5">
        <div className="flex justify-between">
          <svg
            className="font-bold"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
          </svg>
          {/* {heart no fill} */}
          <p className="text-xl font-bold">Product Details</p>
          <svg
            className="font-bold"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M178,28c-20.09,0-37.92,7.93-50,21.56C115.92,35.93,98.09,28,78,28A66.08,66.08,0,0,0,12,94c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,224.14,244,166.34,244,94A66.08,66.08,0,0,0,178,28Zm-5.49,142.36A328.69,328.69,0,0,1,128,202.16a328.69,328.69,0,0,1-44.51-31.8C61.82,151.77,36,123.42,36,94A42,42,0,0,1,78,52c17.8,0,32.7,9.4,38.89,24.54a12,12,0,0,0,22.22,0C145.3,61.4,160.2,52,178,52a42,42,0,0,1,42,42C220,123.42,194.18,151.77,172.51,170.36Z"></path>
          </svg>
          {/* hartfill */}
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path>
        </svg> */}
        </div>

        {/* img  */}
        <div className="aspect-square w-full bg-color-secondary rounded-3xl"></div>

        {/* title  */}
        <div className="flex flex-col">
          <p className="text-xl font-semibold">Wool Coat Lapel Collar</p>
          <div className="flex gap-2">
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="#ffce47"
                viewBox="0 0 256 256"
              >
                <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
              </svg>
              <p className="font-bold text-sm">
                4.8{" "}
                <span className="text-color-secondary opacity-50">(335)</span>
                <span className="ms-3">•</span>
              </p>
            </div>
            <div className="opacity-50">
              <p className="text-sm font-bold">212 reviewers</p>
            </div>
          </div>
        </div>

        {/* desc  */}
        <div className="w-full  ">
          <ReadMore maxLength={77}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            voluptatem ex velit tenetur blanditiis. Laborum cumque, earum fuga
            amet enim perspiciatis tempora asperiores molestias inventore ullam
            recusandae atque consectetur aliquam eos, rerum illum sapiente.
            Dicta fuga incidunt vitae magnam alias nostrum iusto, vero dolorum
            perspiciatis id. Delectus illo beatae earum similique possimus
            recusandae unde, facere, cum, natus velit eum? Aspernatur assumenda
            nemo deserunt! Iste mollitia iusto sequi ullam neque ipsam error
            veniam natus a quod earum dicta amet, vitae odio voluptas. Odio quas
            commodi iste dolorem soluta? Repellendus perferendis doloremque
            expedita corrupti quos! Dolore, quibusdam! Quo nostrum obcaecati
            cumque ipsum.
          </ReadMore>
        </div>

        {/* select color  */}
        <HeaderCaption caption="Select color" size="base" />
        <div className="flex  w-full  items-center max-w-full min-h-14 gap-4 overflow-x-auto whitespace-nowrap">
          <label className="aspect-square opacity-50  ring-purple-500 ms-2 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 m-0 h-10 rounded-xl bg-color-main">
            <input
              type="radio"
              name="selectColor"
              value={"green"}
              className="opacity-0"
            />
          </label>
          <label className="aspect-square ring-2   ring-purple-500 ms-2 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 m-0 h-10 rounded-xl bg-color-main">
            <input
              type="radio"
              name="selectColor"
              value={"blue"}
              className="opacity-0"
            />
          </label>
        </div>

        <HeaderCaption
          caption="Select size"
          size="base"
          linkCaption="size guide"
          href="sizeguide"
        />
        <div className="flex  w-full  items-center max-w-full min-h-14 gap-1 overflow-x-auto whitespace-nowrap bg-color-gray border-opacity-30 border-color-placeholder border rounded-xl">
          <label className="aspect-square opacity-50  ring-purple-500 ms-2  m-0 h-14 flex items-center justify-center">
            <input
              type="radio"
              name="selectColor"
              value={"green"}
              className="opacity-0"
            />
            <p className="text-md font-semibold absolute">40</p>
            <div className="h-14 absolute items-end mt-0.5 hidden">
              <div className="bg-color-secondary w-14 h-2 rounded-sm"></div>
            </div>
          </label>
          <svg
            className="opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#151514"
            viewBox="0 0 256 256"
          >
            <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
          </svg>
          <label className="aspect-square opacity-50  ring-purple-500 ms-2  m-0 h-14 flex items-center justify-center">
            <input
              type="radio"
              name="selectColor"
              value={"green"}
              className="opacity-0"
            />
            <p className="text-md font-semibold absolute">44</p>
            <div className="h-14 absolute items-end mt-0.5 hidden">
              <div className="bg-color-secondary w-14 h-2 rounded-sm"></div>
            </div>
          </label>
          <svg
            className="opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#151514"
            viewBox="0 0 256 256"
          >
            <path d="M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"></path>
          </svg>
          <label className="aspect-square    ring-purple-500 ms-2  m-0 h-14  flex items-center justify-center">
            <input
              type="radio"
              name="selectColor"
              value={"blue"}
              className="opacity-0"
            />
            <p className="text-md font-semibold absolute">46</p>
            <div className="h-14 absolute items-end mt-0.5 flex">
              <div className="bg-color-secondary w-10 h-1 rounded-sm"></div>
            </div>
          </label>
        </div>


      </div>

      <div className="bottom-0 fixed w-full h-20 bg-color-gray border-opacity-30 border-color-placeholder border-t rounded-xl px-6 py-4">
        <div className=" flex justify-between w-full h-full items-center">
          <div className="flex gap-2 justify-center items-center">
            <div className="flex items-end gap-1">
            <p className="text-md opacity-50">Rp</p>
            <p className="text-xl font-semibold">500.000</p>
            </div>
            <p className="text-sm opacity-50 line-through">750.000</p>
          </div>
          <div className="bg-color-secondary h-full w-36 rounded-xl flex justify-center items-center">
            <p className="text-md text-color-primary">Add to cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

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
