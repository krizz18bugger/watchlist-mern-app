export default function MediaList({ watchList, setWatchList }) {
    const token = localStorage.getItem('token');
    async function handleDelete(id) {
        await fetch(`https://watchiiii.onrender.com/api/media/${id}`, {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${token}`}
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
    async function handleUpdate(id, newStatus){
        await fetch(`https://watchiiii.onrender.com/api/media/${id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json", 'Authorization': `Bearer ${token}`},
            body: JSON.stringify({status: newStatus})
        }).then((res)=>{
            if(!res.ok){
                throw new Error('Failed to update status');
            }
            else{
                setWatchList(watchList.map((media) => media._id === id ? {...media, status: newStatus} : media));
            }
        }).catch((error)=>{
            console.error('Error updating status:', error);
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
              Status: <select className="status-select" value={media.status} onChange={(e) => {handleUpdate(media._id, e.target.value)}}>
                <option value="Plan to Watch">Plan to Watch</option>
                <option value="Watching">Watching</option>
                <option value="Completed">Completed</option>
                </select> 
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