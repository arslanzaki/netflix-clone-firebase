import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl pt-4 pl-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal text-xs md:text-lg flex items-center justify-center h-full text-center">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
