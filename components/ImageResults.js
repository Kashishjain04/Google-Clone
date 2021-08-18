import Image from "next/image";
import PaginationButtons from "./PaginationButtons";

const ImageResults = ({ res }) => {
  console.log(res);
  return (
    <div className="mx-auto w-full px-3">
      <div className="flex flex-wrap grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-x-3">
        {res?.items?.map((item) => (
          <div
            key={item.link}
            className={`w-[${item.image.thumbnailWidth}px] overflow-hidden w-44 z-0`}
          >
            <Image
              src={item.image.thumbnailLink}
              width={item.image.thumbnailWidth}
              height={item.image.thumbnailHeight}
            />

            <p className="line-clamp-1">{item?.title}</p>
            <p>{item?.displayLink}</p>
          </div>
        ))}
      </div>
      <PaginationButtons />
    </div>
  );
};

export default ImageResults;
