import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div
        className="max-w-6xl max-auto space-y-4 p-4 mx-auto border-2  my-6
      "
      >
        <h1 className="text-2xl font-medium text-amber-500">About Us</h1>
        <p>
          Welcome to my personal portfolio project, an IMDb clone website built
          using Next.js, React.js, Tailwind CSS, and the IMDb API. As a movie
          enthusiast and developer, I wanted to create a platform that allows
          users to search for their favorite movies and TV shows, read reviews,
          and discover new content.
        </p>
        <p>
          On the homepage, users are greeted with a search bar where they can
          type in the name of the movie or TV show they are looking for. The
          search results will display the matching titles along with their
          ratings, release year, and a brief description. Users can click on a
          title to view more details about it, including the cast, director,
          genre, runtime, and user reviews.
        </p>
        <p>
          The website also features a "Top Rated" section, where users can view
          the highest-rated movies and TV shows based on user reviews. This
          section is updated regularly to keep the content fresh and relevant.
        </p>
        <p>
          In addition to searching for movies and TV shows, users can also
          create an account and save their favorite titles for future reference.
          This feature allows users to easily keep track of the content they
          want to watch and recommend it to their friends.
        </p>
        <p>
          The website is designed with a modern and sleek user interface using
          Tailwind CSS, which enhances the user experience by making the site
          visually appealing and easy to navigate. Overall, this IMDb clone
          project showcases my skills in building responsive and dynamic web
          applications using cutting-edge technologies.
        </p>
      </div>
    </>
  );
};

export default About;
