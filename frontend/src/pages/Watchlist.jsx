import MediaForm from '../components/MediaForm.jsx';
import MediaList from '../components/MediaList.jsx';
import Card from '../temp_folder/background.jsx';
import CardBanner from '../temp_folder/banner.jsx';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';

export default function Watchlist(){
  const [watchList, setWatchList] = useState([]);
  const navigate = useNavigate();
  const fetchWatchList = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://watchiiii.onrender.com/api/media', {
          headers: {'Authorization': `Bearer ${token}`}
        });
        const data = await response.json();
        if (response.status===401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
        else if(!response.ok){
          throw new Error("Failed to fetch data");
        }
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
    <>
    <Card />
    <div className="holder">
      <Navbar />
      <CardBanner />
      <MediaForm fetchWatchList={fetchWatchList} />
      <MediaList watchList={watchList} setWatchList={setWatchList} />
    </div>
    </>
    );
}