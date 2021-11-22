import Link from "next/link";
export default function LoggedOut() {
    <button onclick="window.location.href='http://localhost:3000/';">
    Click Here
    </button>


    return (
        <div className="relative bg-white flex flex-col overflow-auto justify-center w-screen">
            <div className="flex flex-col justify-start space-y-10 pt-32 z-10">
                <div className="flex flex-col text-center">
                    <div className="text-center text-5xl text-indigo-800">
                        You are now logged out
                    </div>
                </div>
                <Link href = "/"> 
                    <input
                        className = "flex object-none justify-center bg-indigo-500 hover:bg-indigo-700 rounded x2 text-white p-2"
                        type="submit"
                        value="Login Again"
                    />
                 </Link>
            </div>
            
        </div>
    )


}