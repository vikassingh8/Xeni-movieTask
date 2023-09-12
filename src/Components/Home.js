import React from "react";
import {  saveDataToMongoDB } from "../redux/Actions";
import { useDispatch } from "react-redux"
const Home = ({ movieData }) => {
  const dispatch = useDispatch()



  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-11   lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Movies</h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movieData.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-100 border border-gray-200 p-4 rounded-lg hover:shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={`Movie poster for ${item.title}`}
                  className="w-full h-auto object-cover"
                />
                <h3 className="mt-2 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.release_date}</p>
                <p className="mt-2 text-lg font-medium text-gray-900">
                  ${item.vote_average}
                </p>
                <button onClick={() => dispatch(saveDataToMongoDB(item))} className="mt-4 bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full text-sm">
                  Watch Later
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
