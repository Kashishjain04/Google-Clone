import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/Header";
import SearchResults from "../../components/SearchResults";
import ImageResults from "../../components/ImageResults";
import Response, { images } from "../../Response";

const Search = ({ allData, imageData }) => {
  const router = useRouter(),
    [images, setImages] = useState(false);
  return (
    <div>
      <Head>
        <title>{router.query.q} - Google Search</title>
        <link rel="icon" href="/google-icon.svg" />
      </Head>
      <Header setImages={setImages} q={router.query.q} />
      {/* Search Results */}
      {images ? (
        <ImageResults res={imageData} />
      ) : (
        <SearchResults res={allData} />
      )}
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  // SSR
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const allData = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.q}&start=${startIndex}`
      ).then((res) => res.json());

  const imageData = useDummyData
    ? images
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.q}&start=${startIndex}&searchType=news`
      ).then((res) => res.json());

  // Pass to client
  return {
    props: {
      allData,
      imageData,
    },
  };
}
