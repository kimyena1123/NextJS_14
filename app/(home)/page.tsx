"use client"

import { useEffect, useState } from "react";

export default function Page(){
    const [movies, setMovies] = useState();

    //정보 가져오기
    const getMovies = async () => {
        const response = await fetch('https://nomad-movies.nomadcoders.workers.dev/movies');
        const json = await response.json();

        setMovies(json);
    }
    useEffect(() => {
        getMovies();
    }, []);

    return (
    <div>
        {/* <Navigation /> */}
        {JSON.stringify(movies)};
    </div>
    );
}