import axios from "axios";
import baseService from "./base.service";

const signIn = async (loginInput: any, token: string) => {
    const user = baseService.post('auth/login', loginInput, token);
    if (!user) {
        return { message: 'Unauthorized!' };
    }
    return user;
}

const signOut = async () => {
    try {
        const response = await axios.get('https://reactnative.dev/movies.json');
        const data = await response.data;
        return data.movies;
    } catch (error) {
        console.log(error);
    }
    return null;
}



const MovieService = { signIn };

export default MovieService;