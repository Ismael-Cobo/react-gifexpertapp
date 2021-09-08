import React from 'react'

export const GridGifItem = ( { id, title, url } ) => {

    return (
            <div className='card'>
                    <div className='card__img'>
                        <img src={ url } alt={title} />
                    </div>
                
                <p>{ title }</p>
            </div>
    )
}
