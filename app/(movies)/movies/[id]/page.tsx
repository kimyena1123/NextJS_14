//localhost:3000/movies/[id]
//localhost:3000/movies/:id

// export default function MovieDetail(props){
//     console.log(props); //{ params: { id: 'adsf' }, searchParams: {} }
//     console.log(props.params); //{ id: 'adsf' }
//     return <h1>Movie</h1>
// }


{/* <MovieDetail params={{id: 1234}} /> */}
export default function MovieDetail({params: {id}}: {params:{id: string}}){
    
    return <h1>Movie {id}</h1>
}