import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../styles/show.css'
import Layout from '../componets/Layout'


const Show = () => {
    const { id } = useParams()
    const [show, setShow] = useState({})
    const [showImages, setShowImages] = useState([])
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [formData, setFormData] = useState({});


    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then(res => {
                setShow(res.data);
                const tempData = {
                    movieName: res.data.name,
                    name: 'Ziya Uddin',
                    email: 'zu0827992@gmail.com',
                    numTickets: 1,
                }
                setFormData(tempData);
                console.log(res.data);
            })
            .catch(err => {
                console.error('Error fetching show details:', err);
            });

        axios.get(`https://api.tvmaze.com/shows/${id}/images`)
            .then(res => {
                setShowImages(res.data.filter(image => image.type === 'background'));
            })
            .catch(err => {
                console.error('Error fetching show images:', err);
            });
    }, [id]);

    const handleFormSubmit = event => {
        event.preventDefault();

        const userBookingDetails = {
            movieName: formData.movieName,
            name: formData.name,
            email: formData.email,
            numTickets: formData.numTickets,
        };
        const storedUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
        storedUserDetails.push(userBookingDetails);
        localStorage.setItem('userDetails', JSON.stringify(storedUserDetails));
        setFormData({
            movieName: show.name,
            name: '',
            email: '',
            numTickets: 1,
        });
        setShowBookingForm(false);
        document.querySelector('.message').classList.add('success');
    };

    const BookForm = () => {
        return (
            <div className="showOverlay">
                <form className='form' onSubmit={handleFormSubmit}>
                    <h3>{formData.movieName}</h3>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div>
                        <label>Number of Tickets:</label>
                        <input
                            type="number"
                            value={formData.numTickets}
                            onChange={e => setFormData({ ...formData, numTickets: e.target.value })}
                            required
                        />
                    </div>
                    <button onClick={() => setShowBookingForm(false)}>Cancel</button>
                    <button type="submit">Book Ticket</button>
                </form>
            </div>
        )
    }

    if (show.name === undefined && showImages) {
        return <div>Loading...</div>
    } return (
        <Layout>
            <section className="show">
                <img src={showImages[0] && showImages[0].resolutions.original.url} alt="" className='backgroundImage' />
                <img src={show?.image?.original} className='poster' alt="" />
                <div className="showTitle">
                    <div className="path">
                        <span>QuadFlix</span>
                        <Link to='/' className='link'>Home</Link>
                        <span>{show.name}</span>
                    </div>
                    <h1>{show.name}</h1>
                    <h2>{show.genres.join(', ')}</h2>
                    <p>{show.summary.replace(/<[/]?p>/g, '')} <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium vel delectus hic ad, eum amet autem sapiente eveniet mollitia recusandae tempore natus neque architecto saepe commodi iusto. Eius, nisi dolore.</p>
                    <div className="links">
                        <h3>External Links:</h3>
                        <a href={show.officialSite} target='_blank'>Official Site</a>
                        <a href={`https://www.imdb.com/title/${show.externals.imdb}`} target='_blank'>IMDB</a>
                    </div>
                    <div className="share">
                        <h3>Share:</h3>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${show.officialSite}`} target='_blank'><i className="fab fa-facebook-square"></i>Facebook</a>
                        <a href={`https://twitter.com/intent/tweet?text=${show.name}`} target='_blank'><i className="fab fa-twitter-square"></i>Twitter</a>
                        <a href={`https://api.whatsapp.com/send?text=${show.name}`} target='_blank'><i className="fab fa-whatsapp"></i>WhatsApp</a>
                        <a href={`mailto:?subject=${show.name}&body=${show.summary}`} target='_blank'><i className="fas fa-envelope"></i>Email</a>
                    </div>
                    <div className="message">Your booking was successful. We will contact you soon. Thank you for booking with QuadFlix. <i className="fas fa-check"></i> <i className="fas fa-times"></i>
                    </div>
                    <div className="buttons">
                        <button onClick={() => setShowBookingForm(true)}>Book Ticket</button><button>View Trailer</button>
                    </div>
                </div>
                <div className="showInfo">
                    <p><b>Language</b> : {show.language}</p>
                    <p><b>Status</b> : {show.status}</p>
                    <p><b>Rating</b> : {show.rating.average}</p>
                    <p><b>Runtime</b> : {show.runtime} minutes</p>
                    <p><b>Premiered</b> : {show.premiered}</p>
                    <p><b>Genres</b> : {show.genres.join(', ')}</p>
                </div>
                {showBookingForm && <BookForm />}
            </section>
        </Layout>
    )
}

export default Show