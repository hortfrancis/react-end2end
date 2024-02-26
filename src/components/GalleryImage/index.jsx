export default function GalleryImage({ key, show }) {
    return (
        <div className="GalleryImage">
            <img src={show?.image?.medium} />
        </div>
    );
}
