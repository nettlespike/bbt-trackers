import React, {useState} from 'react';
const container = {
margin: 'auto',
display: 'flex',
height: '100vh',  
overflow: 'auto',
};
const Login = () => {
function submitted(e){
    console.log("form submiteed!");
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
                        />
                    <p className = "flex p-2 items-start text-left ">Password:</p>
                    <input 
                        className = "w-full border-2 border-gray-300 rounded-xl flex-grow"
                        type = "text"
                        onKeyDown={e => {
                            if(e.key === "Enter") {
                                console.log("enter key");
                            }
                            }
                        }
                    />
                </div>
                <div className = "flex flex-row space-x-10">
                    <button
                        className = "flex flex-grow object-none object-right bg-indigo-500 hover:bg-indigo-700 rounded x2 flex-grow text-white p-2"
                        type="submit"
                        value="Submit"
                        form="userform"
                    >
                        Login
                    </button>
                </div>        
            </form>
        </div>
    </div>
)
};

export default Login;
