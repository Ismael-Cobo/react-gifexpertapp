import PropTypes from 'prop-types'

export const GifCard = ({url, title}) => {
    return (
        <div className="card">
            <div className="card__img">
                <img src={url} alt={title} />
            </div>
            <p>{title}</p>
        </div>
    )
}

GifCard.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
}