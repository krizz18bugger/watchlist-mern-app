import MediaForm from './components/MediaForm';
import MediaList from './components/MediaList';
import { useState, useEffect } from 'react';
import Card from './UIKits/background';
import CardBanner from './UIKits/banner';
function App() {
  const [watchList, setWatchList] = useState([]);
  const fetchWatchList = async () => {
      try {
        const response = await fetch('https://watchiiii.onrender.com/api/media');
        if (!response.ok) {
          throw new Error('Failed to fetch watch list');
        }
        const data = await response.json();
        setWatchList(data);
        console.log('Fetched watch list:', data);
      } catch (error) {
        console.error('Error fetching watch list:', error);
      }
    };
  useEffect(() => {
    fetchWatchList();
  }, []);

  return (
    <div>
    <Card />
    <div className="holder">
      <CardBanner />
      <MediaForm fetchWatchList={fetchWatchList} />
      <MediaList watchList={watchList} setWatchList={setWatchList} />
    </div>
    </div>
  )
}

export default App
