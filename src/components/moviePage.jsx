
export const page = ({name, img, rating}) => {
    return(
        <div className="page">
            <img src={img} alt="MoviePhoto" />
            <h2>{name}</h2>
            <span>{rating}</span>
        </div>
    )
} 