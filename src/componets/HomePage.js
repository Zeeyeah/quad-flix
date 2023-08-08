import React from 'react'
import Layout from './Layout'
import HeroSection from './HeroSection'
import TvShows from './TvShows'

const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <TvShows />
        </Layout>
    )
}

export default HomePage