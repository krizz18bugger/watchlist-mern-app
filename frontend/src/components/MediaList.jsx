export default function MediaList({ watchList, setWatchList }) {
    async function handleDelete(id) {
        await fetch(`https://watchiiii.onrender.com/api/media/${id}`, {
            method: 'DELETE',
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
        }).then(() => {
            setWatchList(watchList.filter((media) => media._id !== id));
        }).catch((error) => {
            console.error('Error deleting item:', error);
        });
    }
    return (
        <div className="media-list">
        {watchList.map((media) =>
<div className="parent" key={media._id}>
  <div className="card">
      <div className="content-box">
          <span className="card-title">{media.title}</span>
          <p className="card-content">
              Status: {media.status} 
          </p>
          <button className="see-more" onClick={() => handleDelete(media._id)}>
              Delete
          </button>
      </div>
      <div className="date-box">
          <span className="date">{media.category}</span>
      </div>
  </div>
</div>)}
        </div>
    );
}   