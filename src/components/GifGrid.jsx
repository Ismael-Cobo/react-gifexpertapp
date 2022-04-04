import PropTypes from 'prop-types'
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifCard } from "./GifCard"

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category)
    
    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {/* Aqui mapeo los items */}
                {loading && <h4>Loading...</h4>}
                {
                    data.map(img => (

                        <GifCard
                            key={img.id}
                            url={img.url}
                            title={img.title}
                        />

                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string
}