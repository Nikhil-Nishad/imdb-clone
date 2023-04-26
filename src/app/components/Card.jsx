import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 group sm:m-2 transition-shadow duration-200 max-sm:m-3 max-sm:border-slate-400">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`http://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="Movie Image"
          className="sm:rounded-t-lg group-hover:opacity-80 transition duration-200"
          // placeholder="blur"
          // blurDataURL=""
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg font-bold">{result.title || result.name}</h2>
          <p>{result.overview.substring(0, 40)}...</p>

          <p className="flex items-center ">
            {result.release_date || result.first_air_date}
            <AiFillHeart className="text-red-500 mr-1 ml-3 " />
            {result.vote_count}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
