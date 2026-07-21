import LoginForm from './../components/Login';
import Card from './../uikits/background';
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