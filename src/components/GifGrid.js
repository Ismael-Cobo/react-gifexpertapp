import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs'
import { GridGifItem } from './GridGifItem'

export const GifGrid = ({ category }) => {

    const {data: images, loading} = useFetchGifs(category);
    
    /*const [images, setimages] = useState([])

    useEffect( () => {
        getGifs(category)
            .then(imgs => setimages(imgs))
    }, [category])

    */

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>loading...</p> }

            <div className='card-grid' >
            
                {
                    images.map( img => (
                        <GridGifItem 
                            key = {img.id} 
                            { ...img }
                        />
                    ))
                }
            
            </div>  
            
        </>
    )
}
