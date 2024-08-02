import { Star } from "@phosphor-icons/react/dist/ssr";

const ReviewComps = ({
    star,
    imageSenderUrl,
    imageProductUrl,
    nameSender,
    description,
    handleShowImage,
    thumbnailVideo,
    videoUrl,
  }: {
    star: number;
    imageSenderUrl: string;
    nameSender: string;
    imageProductUrl?: string[];
    description?: string;
    handleShowImage: (url: string,type: string) => void;
    thumbnailVideo?: string;
    videoUrl?: string;
  }) => {
    const dipencet = (url: string, type: string) => {
      handleShowImage(url, type);
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
                onClick={() => dipencet(cb, "img")}
                src={cb}
                className="min-h-20 contrast-50 cursor-pointer rounded-lg aspect-square object-cover max-h-20"
              />
            ))}
            {thumbnailVideo && videoUrl && (
              <img
                onClick={() => dipencet(videoUrl, "vid")}
                src={thumbnailVideo}
                className="min-h-20 cursor-pointer rounded-lg aspect-square object-cover max-h-20"
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  export default ReviewComps