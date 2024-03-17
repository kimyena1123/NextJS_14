import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
    title: "Home",
};

//API_URL을 export할 수 없어서 constants.ts로 옮겨준다.
// export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = response.json();
    
    return json;
}

export default async function HomePage(){
    const movies = await getMovies();
    console.log(movies);

    return(
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie key={movie.id}
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title} />
            ))};
        </div>
        );
}

