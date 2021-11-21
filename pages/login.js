import React, {useState} from 'react';
const container = {
margin: 'auto',
display: 'flex',
height: '100vh',  
overflow: 'auto',
};
const Login = () => {

return (
    <div className = "overflow-x-hidden">
        <div className = "flex flex-col m-auto h-screen overflow-auto justify-center items-center space-y-5">        
            <h1 className = "flex text-6xl m-4">
                Login
            </h1>
            <form className = "grid gap-y-4 grid-cols-2 p-2" id = "userform">
                <p className = "flex p-2 items-start">Username:</p>
                    <input 
                        className = "w-full border-2 border-gray-300 rounded-xl"
                        type = "text"
                        onChange={e => setInput(e.target.value)}
                    />
                <p className = "flex p-2 items-start text-left ">Password:</p>
                <input 
                    className = "w-full border-2 border-gray-300 rounded-xl flex-grow"
                    type = "text"
                    onChange={e=>setInput(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === "Enter") {
                            console.log("enter key");
                        }
                        }
                    }
                />
            </form>
        <div className = "flex flex-row space-x-10">
            <button
                className = "bg-indigo-500 hover:bg-indigo-700 rounded x2 flex-grow text-white p-2"
                type="submit"
                value="Submitted"
                form="userform"
            >
                Login
            </button>
            <button
                className = "bg-indigo-500 hover:bg-indigo-700 rounded x2 flex-grow text-white p-2"
                type="submit"
                value="newUser"
                form="userform"
            >
                Signup
            </button>
        </div>
        </div>
    </div>
)
};

export default Login;
