import { Router } from 'next/router';
import React, {useState} from 'react';
import { render } from 'react-dom';
import Link from "next/link";
import PropTypes from 'prop-types';


export default function Login ({setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function loginUser(credentials) {
        //alert(username+" d "+password);
        if(username=='test'&&password=='password')return true;
        else return false;
    }
    const submitted = async e =>{
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        })
       // alert(username+" "+password);
        if(token) setToken(token);
        else {
            alert("Wrong login info. Please try again");
        }
    }
    
    return (
        <div className = "overflow-x-hidden">
            <div className = "flex flex-col m-auto h-screen overflow-auto justify-center items-center space-y-5">        
                <h1 className = "flex text-6xl font-bold m-4">
                    Login
                </h1>
                <form onSubmit={submitted} id = "userform">
                    <div className = "grid gap-y-4 grid-cols-2 p-2">
                        <p className = "flex p-2 items-start">Username:</p>
                            <input 
                                className = "w-full border-2 border-gray-300 rounded-xl"
                                type = "text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        <p className = "flex p-2 items-start text-left ">Password:</p>
                        <input 
                            className = "w-full border-2 border-gray-300 rounded-xl flex-grow"
                            type = "password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className = "flex flex-row space-x-10">
                        <input
                            className = "flex flex-grow object-none object-right justify-center bg-indigo-500 hover:bg-indigo-700 rounded x2 text-white p-2"
                            type="submit"
                            value="Login"
                            form="userform"
                        />
                        
                    </div>        
                </form>
            </div>
        </div>
    )
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}