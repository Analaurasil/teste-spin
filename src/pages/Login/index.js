import React from 'react';
import {AreaLogin} from './styled';
import Logo from './Logo.png';
import Fundo from './Fundo.png';

export default () => {

    return (
        <AreaLogin>
        <div className='container-back'>
        <img src={Fundo} alt='fundo'/>
        </div>
        <div className='container-form'>
            <div className='marca'>
                <div className='logo'>
                    <img src={Logo} alt='logo'/>
                    <h3>Archint</h3>
                </div>
                <div className='slogan'>
                    <p>A new way to experience real state in the infinite virtual space.</p>
                </div>
            </div>
            <div className='form'>
                <h1>Login</h1>
                <label className='email'/>Email
                <br/>
                    <input type='email' id='email' required/>
                <br/>
                <br/>
                <label className='password'/>Password
                <br/>
                    <input type='password' id='password' name='password' requerid/>
                <br/>
                <br/>
                <div className='checkb'>
                <input className='check' type='checkbox'/>Remember me
                <a href=''>Forget password?</a>
                </div>
            <br/>
            <br/>
            <div className='button'>
                <button className='login' onClick={() => console.log("Botão clicado")}>
                Login
                </button>
                <button className='signup' onClick={() => console.log("Botão clicado")}>
                Sign Up
                </button>
            </div>
            </div>
            <div className='loginWith'>
                <p>Or, login with</p>
                <div className='button-container'>
                <button  onClick={() => console.log("Botão clicado")}>
                Facebook
                </button>
                <button  onClick={() => console.log("Botão clicado")}>
                Linked In
                </button>
                <button onClick={() => console.log("Botão clicado")}>
                Google
                </button>
                </div>
            </div>
            </div>
        </AreaLogin>
    ); 
    }; 