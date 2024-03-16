//localhost:3000/movies/[id]
//localhost:3000/movies/:id

// export default function MovieDetail(props){
//     console.log(props); //{ params: { id: 'adsf' }, searchParams: {} }
//     console.log(props.params); //{ id: 'adsf' }
//     return <h1>Movie</h1>
// }

import { API_URL } from "../../../(home)/page";


async function getMovie(id: string){
    console.log(`Fetching movies: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`) //https://nomad-movies.nomadcoders.workers.dev/movies/763215
    
    return response.json();
}

async function getVideos(id: string){
    console.log(`Fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`);

    return response.json();
}

{/* <MovieDetail params={{id: 1234}} /> */}
export default async function MovieDetail({params: {id}}: {params:{id: string}}){
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    console.log(id);
    
    return <h1>영화제목: {movie.title},<br/> 아이디: {movie.id}</h1>
}