import Results from "./components/results";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-us&per_page=100`,
    { next: { revalidate: 100000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to load data.");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <>
      <Results results={results} />
    </>
  );
}
