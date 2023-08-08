import React, { useEffect, useState } from 'react'
import '../styles/tvshows.css'
import axios from 'axios'
import ShowCard from './ShowCard';

const TvShows = () => {
    const API_URL = 'https://api.tvmaze.com/search/shows?q=animation';
    const [shows, setShows] = useState([])

    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                const showsData = res.data.map(item => item.show);
                setShows(showsData);
                console.log(showsData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    if (shows.length === 0) {
        return <h1>Loading...</h1>
    } return (
        <section className="tvshows">
            <h1>Shows</h1>
            <div className="cardWrapper">
                {shows.map(show => <ShowCard key={show.id} show={show} />)}
            </div>
        </section>
    )
}

export default TvShows