import React from 'react'
import '../styles/tvshows.css'
import { Link } from 'react-router-dom'


const ShowCard = ({ show }) => {
    return (
        <div className="card">
            <img src={show.image.original} className="cardImg" alt="" />
            <div className="overlay">
                <h1>{show.name}</h1>
                <div>
                    <p><b>Genre: </b>{show.genres.join(', ')}</p>
                    <p><b>Ratings: </b>{show.rating.average ? show.rating.average : 'N/A'}</p>
                    <p><b>Status: </b>{show.status ? show.status : 'N/A'}</p>
                    <Link to={`/show/${show.id}`}><button>Watch</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ShowCard