import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(){
    const navigate = useNavigate();
    return (
    <div className="navbar">
    <button onClick={()=>{
        localStorage.removeItem('token');
        navigate('/login');
    }}>Log Out</button>
    </div>
);
}

