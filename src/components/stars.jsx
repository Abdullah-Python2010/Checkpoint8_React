
export const Rating = (props) => {
    
        let stars = []
        for (let i = 0; i < Math.floor(props.star); i++) {
            stars.push(<i class="fa-solid fa-star"></i>)
            
        }
        
    return(  
            <div>                
                {stars}
            </div> 
        
        );
}

