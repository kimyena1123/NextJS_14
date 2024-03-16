//localhost:3000/movies/[id]
//localhost:3000/movies/:id

import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// export default function MovieDetail(props){
//     console.log(props); //{ params: { id: 'adsf' }, searchParams: {} }
//     console.log(props.params); //{ id: 'adsf' }
//     return <h1>Movie</h1>
// }


{/* <MovieDetail params={{id: 1234}} /> */}
export default async function MovieDetail({params: {id}}: {params:{id: string}}){
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    
    return (
        <div>
            <h2>Movie detail page</h2>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>

            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}