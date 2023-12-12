import { Movies } from './MovieList';
import { useState } from 'react';
import { Filter } from './filterCom'
export const Nav = () => {
    const [ name, setName ] = useState('');
    return(
        <div className="navbar">
            <div className="logo">
                <h1>M<i class="fa-solid fa-sun"></i>vies</h1>
            </div>
            <input 
                type='text' 
                placeholder="Filter by name" 
                value={name} 
                onChange={
                    (e) => {
                        setName(e.target.value)
                        console.log(e.target.value)
                        console.log(e)
                    }
                } />


            <button onClick={
                () => <Filter arr={Movies} mName={name} />
            }>Filter</button>
        </div>
    )
}

