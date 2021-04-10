import PaginationButtons from "./PaginationButtons";

const SearchResults = ({ res }) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-48">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {res?.searchInformation?.formattedTotalResults} results (
        {res?.searchInformation?.formattedSearchTime} seconds)
      </p>

      {res?.items?.map((item) => (
        <div className="max-w-xl mb-8" key={item.link}>
          <div className="group">
            <a href={item.link} className="text-sm">
              {item.formattedUrl}
            </a>
            <a href={item.link} className="text-sm">
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {item.title}
              </h2>
            </a>
          </div>

          <p className="line-clamp-2">{item?.snippet}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
