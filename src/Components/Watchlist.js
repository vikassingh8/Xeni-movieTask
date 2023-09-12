import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, fetchData, updateWatchMovie } from "../redux/Actions";
import Spinner from "./Spinner";

const Watchlist = () => {
  const [loading, setLoading] = useState(true)


  const dispatch = useDispatch()
  dispatch(fetchData());


 
  const watchListData = useSelector((item) => item.change);
  setTimeout(() => {
    setLoading(false)
  }, 500)

  return (
    <>
      {
        (loading === true) ? <Spinner /> : (
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900">WatchList</h2>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {watchListData.map((item, index) => (
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


                    <div className="flex justify-between">
                      <button onClick={() => dispatch(deleteItem(item.movieId))}

                        className="mt-4 bg-blue-500 text-white hover:bg-blue-600 py-2 px-4 rounded-full text-sm"
                      >
                        Delet
                      </button>
                      {
                        (item.watch === "true") ? (
                          <button onClick={() => dispatch(updateWatchMovie({ movieId: item.movieId, watch: "false" }))}

                            className="mt-4 bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded-full text-sm"
                          > Remove from watch list
                          </button>
                        )
                          : (
                            <button onClick={() => dispatch(updateWatchMovie({ movieId: item.movieId, watch: "true" }))}

                              className="mt-4 bg-green-500 text-white hover:bg-green-600 py-2 px-4 rounded-full text-sm"
                            >Add to watch list
                            </button>
                          )
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div >
        )}
    </>
  );
};

export default Watchlist;
