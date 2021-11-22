export default function LoggedOut() {
    <button onclick="window.location.href='http://localhost:3000/';">
    Click Here
    </button>


    return (
        <div className="relative bg-white flex justify-center w-screen">
            <div className="flex flex-col justify-start space-y-10 pt-32 z-10">
                <div className="flex flex-col text-center">
                    <div className="text-center text-5xl text-indigo-800">
                        You are now logged out
                    </div>
                </div>
            </div>
        </div>
    )


}