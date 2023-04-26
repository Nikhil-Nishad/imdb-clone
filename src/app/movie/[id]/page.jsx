import Image from "next/image";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  // get movie
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-5xl mx-auto md:space-x-6">
        <Image
          src={`http://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="Movie Image"
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="https://cdn.dribbble.com/users/961752/screenshots/8461416/media/77029d5c0a1b7182e1638ce2e2e11a3f.gif"
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-2xl mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3 text-lg">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="p-2">
            <span className="font-semibold mr-1">Release Date : </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="flex p-2 items-center">
            <span className="font-semibold mr-1">Ratings :</span>
            <AiFillHeart className="text-red-500 mr-1 ml-3 " />
            {movie.vote_count}{" "}
          </p>
          <p className="p-2">
            <span className="font-semibold mr-1"> Genres : </span>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
