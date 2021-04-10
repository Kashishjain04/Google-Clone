import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Response from "../Response";

const Search = ({ results }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.q} - Google Search</title>
        <link rel="icon" href="/google-icon.svg" />
      </Head>
      <Header q={router.query.q} />
      {/* Search Results */}
      <SearchResults res={results} />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  // SSR
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=${process.env.NEXT_PUBLIC_CONTEXT_KEY}&q=${context.query.q}&start=${startIndex}`
      ).then((res) => res.json());

  // Pass to client
  return {
    props: {
      results: data,
    },
  };
}
