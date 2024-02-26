import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GalleryImage } from '../';


export default function ShowGallery() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.tvmaze.com/shows');
            const data = await response.json();
            console.log(data);
            setShows(data);
        })();
    }, []);

    return (
        <div className='shows'>{shows.map(
            show => <Link to={`/shows/${show.id}`} ><GalleryImage key={show.id} show={show} /></Link>
        )}</div>
    );
}
