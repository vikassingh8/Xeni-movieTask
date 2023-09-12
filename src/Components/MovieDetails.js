import React from 'react'
import { useEffect, useState } from 'react';
import {  saveDataToMongoDB } from '../redux/Actions';
import { useDispatch } from 'react-redux';
import Spinner from './Spinner';
const MovieDetails = () => {
  const dispatch = useDispatch()
  const [top_rated, setTop_rated] = useState([])
  const [loading, setLoading] = useState(false)

  const getrated = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGQ3MGI5MWE3Mzc3ZTE4ZjJmNzI1NDljNzgwMDAyOCIsInN1YiI6IjYzZGUyYWI0ZGRkNTJkMDBkODJhOTczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8oUUvSRVLV59YjFQMggrFBboSOooigcVmzucFjf4boc"
        ,
      },
    };
    try {
      setLoading(true)
      const fetchData = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'",
        options
      );
      const data = await fetchData.json();
      setTop_rated(data.results);
      setTimeout(() => {
        <Spinner />
        setLoading(false)
      }, 500)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getrated();
  }, []);

  return (
    <>
      {
        (loading === true) ? <Spinner /> : (
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900">Top Rated Movies</h2>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {top_rated.map((item, index) => (
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
                      Rating-{item.vote_average}
                    </p>
                    <button onClick={() => dispatch(saveDataToMongoDB(item))} className="mt-4 bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full text-sm">
                      Watch Later
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default MovieDetails
