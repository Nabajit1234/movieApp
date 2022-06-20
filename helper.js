const transfer = async () => {
    try {
        const movies = require('../../movies.json');

        movies.forEach(async movie => {
            let x = new Movie2({
                adult: movie.adult,
                backdrop_path: movie.backdrop_path,
                belongs_to_collection: movie.belongs_to_collection,
                budget: movie.budget,
                genres: movie.genre,
                homepage: movie.homepage,
                id: movie.id,
                imdb_id: movie.imdb_id,
                original_language: movie.original_language,
                original_title: movie.original_title,
                overview: movie.overview,
                popularity: movie.popularity,
                poster_path: movie.poster_path,
                production_companies: movie.production_companies,
                production_countries: movie.production_countries,
                release_date: movie.release_date,
                revenue: movie.revenue,
                runtime: movie.runtime,
                spoken_languages: movie.spoken_languages,
                status: movie.status,
                tagline: movie.tagline,
                title: movie.title,
                video: movie.video,
                vote_average: movie.vote_average,
                vote_count: movie.vote_count
            });
            await x.save();
        })        
    } catch (error) {

        console.log("error", error)
    }
   
}
// transfer()