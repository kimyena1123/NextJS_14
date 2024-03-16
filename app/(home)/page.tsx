"use client"

import { useEffect, useState } from "react";

export default function Page(){
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    //정보 가져오기
    const getMovies = async () => {
        const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
        const json = await response.json();

        //setMovies는 원래 빈 배열이었는데, setMovies(json)을 통해 정보를 안에 넣어줬다. 이 내용은 movies에 담겨 있음.
        setMovies(json);
        setIsLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);

    return (
    <div>
        {/* <Navigation /> */}
        {isLoading ? "loading..." : JSON.stringify(movies)};
    </div>
    );
}