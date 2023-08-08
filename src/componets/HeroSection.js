import React, { useEffect, useState } from 'react'
import heroImage from '../images/hero.jpeg'
import fire from '../images/fire.svg'
import '../styles/herosection.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const HeroSection = () => {

    const [heroShowInfo, setHeroShowInfo] = useState()

    useEffect(() => {
        axios.get('https://api.tvmaze.com/shows/55138')
            .then(res => {
                setHeroShowInfo(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    if (heroShowInfo) return (
        <section className="heroSection">
            <img src={heroImage} alt="hero" className='heroImage' />
            <div className="heroShowInfo">
                <div className="fire">
                    <img src={fire} alt="" /> <span>Hot</span>
                </div>
                <h1 className="heroTitle">{heroShowInfo.name}</h1>
                <ul className="genre">
                    {heroShowInfo.genres.map(genre => (
                        <li key={genre}>{genre}</li>
                    ))}
                    <span>English</span>
                </ul>
                <Link to={`/show/${heroShowInfo.id}`}>
                    <button style={{ cursor: 'pointer' }}>
                        Book Now!
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default HeroSection