import LoginForm from '../components/Login.jsx';
import Card from '../temp_folder/background.jsx';
import { useEffect } from 'react';

export default function LoginPage(){
    useEffect(()=>{localStorage.removeItem('token');}, []);
    return (
        <div className="login-page">
        <Card />
        <LoginForm />
        </div>
    );
 }