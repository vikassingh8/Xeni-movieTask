import { useDispatch } from "react-redux";



const WatchlistAction = (item) => {
    return {
        type: "WatchList",
        item
    }
}
const deleteItem = (resourceId) => {
    return async (dispatch) => {
        try {

            // Make an asynchronous HTTP request to delete the resource
            const response = await fetch(`http://localhost:5000/movieDelete/${resourceId}`, {
                method: 'DELETE',
            });

            if (response.status === 204) {
                // If the delete operation was successful (status code 204 No Content),
                // dispatch a success action
                dispatch({ type: 'DELETE_RESOURCE_SUCCESS', resourceId });
            } else {
                // If an error occurs during deletion, dispatch an error action
                dispatch({ type: 'DELETE_RESOURCE_FAILURE', error: 'Delete failed' });
            }
        } catch (error) {
            // If a network error occurs, dispatch an error action
            dispatch({ type: 'DELETE_RESOURCE_FAILURE', error: 'Network error' });
        }
    };
};
const fetchData = () => async (dispatch) => {
    const dispach = useDispatch()
    try {
        // Make an API call to fetch data from MongoDB
        const response = await fetch('http://localhost:5000/movie');
        const data = await response.json();
        // console.log(...data)

        // Dispatch an action to update the Redux store with the fetched data
        // dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        dispach(WatchlistAction(data));
    } catch (error) {
        dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
};
const saveDataToMongoDB = (data) => async (dispatch) => {
    try {
        // Make an API call to send data to the server
        await fetch('http://localhost:5000/moviePost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                poster_path: data.poster_path,
                vote_average: data.vote_average,
                release_date: data.release_date,
                original_language: data.original_language,
                title: data.title,
                movieId: data.id,
            }),
        });

    } catch (error) {
        dispatch({ type: 'SAVE_DATA_FAILURE' });
    }
};
const updateWatchMovie = (data) => async (dispatch) => {
    try {
        console.log(data)
        // Make an API call to send data to the server
        await fetch('http://localhost:5000/movieUpdate', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

    } catch (error) {
        console.log(error)
    }
};

export { WatchlistAction, deleteItem, fetchData, saveDataToMongoDB,updateWatchMovie }