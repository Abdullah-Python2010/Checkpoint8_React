import { useState } from 'react';
import { Data } from './MovieData'
import { Movies } from './MovieList'
import { MovieCard } from './Movie'
export const Form = () => {
        const [movie, setMovie] = useState({
            Title: '',
            Description: '',
            image: '',
            Rating: ''});
    
    // const filterMovies = ({ title, rating }) => {
    // Implement filtering logic based on title and rating
    {


}



    return(
        <div className="Input">
            <h2>Add a new movie</h2>
            <input 
                type='text'
                value={movie.Title}
                onChange= {e=>setMovie({...movie, Title : e.target.value})}
                placeholder='Name of Movie'
            />
            <input 
                type='text'
                value={movie.Description}
                onChange= {e=>setMovie({...movie, Description : e.target.value})}
                placeholder='Description'
            />
            <input 
                type='text'
                value={movie.image}
                onChange= {e=>setMovie({...movie, image : e.target.value})}
                placeholder='Image link or address'
            />
            <input 
                type='text'
                value={movie.Rating}
                onChange= {e=>setMovie({...movie, Rating : e.target.value})}
                placeholder='Rating. Not more than 5'
            />

            <button
                onClick={
                    () => {
                            if( movie.Description === '' || movie.Title === '' ||  movie.Rating === ''  ||  movie.image === ''){
                                alert('Please fill in all the inputs to be able to add the movie')
                            }else{
                                Data.unshift({movie})
                                alert('Success')
                                console.log(Data)                                
                            }
                        }   
                }
            >
                Add Movie
            </button>
        </div>
    )


}