import { Data } from './MovieData'
import { MovieCard } from './Movie'

export const Movies = () => {
    return(
        <div className='container'>
            
            {
                Data.map(
                    (info, index) => {
                        return(
                            <div className='movie'>
                                <MovieCard poster={info.image} name={info.Title} desc={info.Description} rate={Number(info.Rating)}  />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}
