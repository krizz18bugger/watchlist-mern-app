import { useState } from 'react';
export default function MediaForm({fetchWatchList}) {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Anime');
    const [status, setStatus] = useState('Plan to watch');
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ title, category, status });
        try{
            const response = await fetch('http://localhost:5000/api/media', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, category, status })
                });
            await response.json();
            if(!response.ok){
                throw new Error('Failed to submit media');
            }
            setTitle('');
            setCategory('Anime');
            setStatus('Plan to watch');
            fetchWatchList();
        }
    catch (error) {
        console.error("Error submitting media:", error);
    }
}
    return (
        <form>
            <input type="text" placeholder="Title of the show or movie..." value={title} onChange={(e)=>setTitle(e.target.value)} />
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Anime">Anime</option>
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
            </select>
            <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                <option value="Plan to watch">Plan to watch</option>
                <option value="Watching">Watching</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Add</button>
        </form>
    );
}