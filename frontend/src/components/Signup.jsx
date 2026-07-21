import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState(null);
    const [alertMsg, setAlertMsg] = useState("");
    async function handleSignup(e){
      e.preventDefault();
      const response = await fetch('https://watchiiii.onrender.com/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      });
      const data = await response.json();
      if(response.ok){
        setEmail("");
        setPassword("");
        setIsSuccess(true);
        setAlertMsg(data.message);
      }
      else{
        setAlertMsg(data.message);
      }
    }
  return (
    <StyledWrapper>
      <div className="signup-container">
        <div className="heading">Sign Up</div>
        <form action onSubmit={(e)=>handleSignup(e)} className="formSignup">
          <input required className="input" type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input required className="input" type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
          {alertMsg? isSuccess?<span className="forgot-password">{alertMsg}. Go to <Link to="/login">Login</Link> page.</span>: <span className="forgot-password">Sign Up Failed.</span>: null}
          <input className="login-button" type="submit" defaultValue="Sign Up" />
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .signup-container {
    max-width: 350px;
    background: #F8F9FD;
    background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
    border-radius: 40px;
    padding: 25px 35px;
    border: 5px solid rgb(255, 255, 255);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
    margin: 20px;
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: rgb(16, 137, 211);
  }

  .formSignup {
    margin-top: 20px;
  }

  .formSignup .input {
    width: 100%;
    background: white;
    border: none;
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 15px;
    box-shadow: #cff0ff 0px 10px 10px -5px;
    border-inline: 2px solid transparent;
  }

  .formSignup .input::-moz-placeholder {
    color: rgb(170, 170, 170);
  }

  .formSignup .input::placeholder {
    color: rgb(170, 170, 170);
  }

  .formSignup .input:focus {
    outline: none;
    border-inline: 2px solid #12B1D1;
  }

  .formSignup .forgot-password {
    display: block;
    margin-top: 10px;
    margin-left: 10px;
  }

  .formSignup .forgot-password a {
    font-size: 11px;
    color: #0099ff;
    text-decoration: none;
  }

  .formSignup .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
  }

  .formSignup .login-button:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
  }

  .formSignup .login-button:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
  }`;

export default SignupForm;
