import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif';
import { GiffGridItem } from './GiffGridItem';


export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGif( category );
    

    return (
        
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
        
                {
                    images.map( img => (
                        <GiffGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }

            </div>
        </>
            
    )
}
