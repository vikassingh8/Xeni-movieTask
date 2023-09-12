import React, { useEffect, useState } from 'react'
import Home from './Home';
import Spinner from './Spinner';

const Sidebar = () => {
    const [movieData, setMovieData] = useState([])
    const [loading, setLoading] = useState(false)


    const [search, setSerch] = useState("a");
    function handelSearch(e) {
        setSerch(e.target.value)
    }
    const [year, setYear] = useState("2023");
    function handelYear(e) {
        setYear(e.target.value)
        console.log(e.target.value)
    }
    const [Language, setLanguage] = useState("en_US");
    function handelLanguage(e) {
        setLanguage(e.target.value)
        console.log(e.target.value)
    }

    const getMovies = async () => {
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
                `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=${Language}&page=1&year=${year}`,
                options
            );
            const data = await fetchData.json();
            setMovieData(data.results);
            setTimeout(() => {
                <Spinner />
                setLoading(false)
            }, 500)

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMovies();

    }, []);

    function buttonSearch() {

        getMovies();

    }

    return (
        <>
            {
                (loading === true) ? <Spinner /> : (<div>
                    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                        </svg>
                    </button>
                    <aside id="default-sidebar" className="fixed mt-16 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200 dark:bg-gray-800">
                            <ul className="space-y-2 font-medium">
                                <li>
                                    <span className="ml-20  text-2xl text-center">Filter</span>
                                    <hr className="w-48 h-1 mx-auto mb-4 bg-blue-500 border-0 rounded md:mb-10 dark:bg-gray-700" />
                                </li>
                                <li>

                                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                            </svg>
                                        </div>
                                        <input
                                            onChange={handelSearch}
                                            type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Movies" required />
                                        <button
                                            onClick={buttonSearch}
                                            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                    </div>

                                </li>
                                <li>
                                    <hr className='my-4' />
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Year</label>
                                    <select
                                        onChange={handelLanguage}
                                        id="countries" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option defaultValue={"en_US"}>Choose Language</option>
                                        <option value="en_US">English</option>
                                        <option value="hi">Hindi</option>
                                    </select>
                                    <hr className='my-4' />
                                </li>
                                <li>
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Year</label>
                                    <select
                                        onChange={handelYear}
                                        id="countries" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option defaultValue={"2023"}>Choose Year</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                    </select>
                                </li>

                            </ul>
                        </div>
                    </aside>



                    <div className="p-4 sm:ml-64">
                        <div className="p-4 border-2 border-gray-700 border-dashed rounded-lg dark:border-gray-700">
                            <Home movieData={movieData} />
                        </div>
                    </div>
                </div>
                )
            }
        </>
    )
}

export default Sidebar
