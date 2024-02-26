import { useSearch } from '../../contexts';
import { ShowCard } from '../';

export default function ShowList() {

    const { showData } = useSearch();

    return (
        <div>
            {showData.map(
                show => <ShowCard key={show?.id} show={show} />
            )}</div>
    )
}
