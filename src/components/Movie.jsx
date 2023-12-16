import { Rating } from './stars'
import { Link } from 'react-router-dom'
import { page } from './moviePage'
import { Movies } from './MovieList'
import { useState } from 'react'

export const MovieCard = (props) => {
    const [key, setKey] = useState(0)
    return(
        <div>
            <img src={props.poster} alt="Poster"/>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <Rating star={props.rate}/>
            <a onClick={ () =>  setKey({key})} ><Link to='/movie' >Description</Link></a> 
        </div>
    )
}

