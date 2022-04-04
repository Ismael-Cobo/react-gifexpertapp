import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

import './styles/styles.css'


export const GifExpertApp = ({ defaultValue = [] }) => {

    // const [categories, setCategories] = useState(['one punch man'])
    const [categories, setCategories] = useState(defaultValue)


    return (
        <div className='gif__contenedor'>
            <h3 className='gif__titulo'>GifExpertApp</h3>
            <AddCategory setCategories={setCategories} />
            {/* Aqui mapeo el conjunto de items con el grid */}
            <ol className='gif__ol'>
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
