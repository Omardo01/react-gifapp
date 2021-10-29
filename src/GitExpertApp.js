import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GitExpertApp = () => {

    // const categories = ['Darth Vader', 'Mandalorian', 'Jedi'];
    const [categories, setCategories] = useState(['Darth Vader']);

    // const handleAdd = () =>{
    //     setCategories([...categories, 'Game of thrones']);
    // }

    return (
        <div>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GitExpertApp;
