import { ShowCard } from '../';

export default function ShowList({shows}) {
    return (
        <div>
            {shows.map(
                show => <ShowCard key={show?.id} show={show} />
            )}</div>
    )
}
