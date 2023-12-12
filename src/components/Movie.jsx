import { Rating } from './stars'

export const MovieCard = (props) => {
    return(
        <div>
            <img src={props.poster} alt="Poster"/>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <Rating star={props.rate}/>
        </div>
    )
}

