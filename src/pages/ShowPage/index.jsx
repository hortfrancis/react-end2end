import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShowCard } from '../../components';

export default function ShowPage() {
    const { id } = useParams();
    // const [show, setShow] = useState({ image: {}, rating: {} });
    const [show, setShow] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const data = await response.json();
            console.log(data)
            setShow(data);
        })()

        // async function myFunc() {
        //     const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        //     const data = await response.json();
        //     console.log(data)
        //     setShow(data);
        // }
        // myFunc();

    }, [])

    return (
        <div><ShowCard show={show} /></div>
    )
}
