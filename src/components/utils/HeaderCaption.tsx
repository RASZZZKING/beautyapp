import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderCaptionProps {
  href?: string;
  caption: string;
  linkCaption?: string;
  size: string;
}

const HeaderCaption: FunctionComponent<HeaderCaptionProps> = ({
  href,
  size,
  caption,
  linkCaption,
}) => {
  return (
    <div className="w-full flex justify-between">
      <p className={`font-semibold text-${size}`}>{caption}</p>
      {href && (
        <Link
          href={href}
          className={`font-semibold text-${size} text-color-main`}
        >
          {linkCaption}
        </Link>
      )}
    </div>
  );
};

export default HeaderCaption;
