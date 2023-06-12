import axios from "axios";

const getMovies = async () => {
    try {
        const response = await axios.get('https://reactnative.dev/movies.json');
        const data = await response.data;
        return data.movies;
    } catch (error) {
        console.log(error);
    }
    return null;
}

const MovieService = { getMovies };

export default MovieService;