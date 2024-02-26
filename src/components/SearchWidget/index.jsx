import { useState, useEffect } from 'react';
import { ShowList } from '../';

export default function SearchWidget() {
    const [inputValue, setInputValue] = useState('');
    const [searchString, setSearchString] = useState('');
    const [showData, setShowData] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
            const data = await response.json();
            console.log(data);
            setShowData(data.map(result => result.show))
        })();
    }, [searchString]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchString(inputValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" required onChange={handleInput} /> */}
                <input type="text" required
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)} />
                <button type="submit">Search</button>
            </form>
            <ShowList shows={showData} />

        </>
    )
}
