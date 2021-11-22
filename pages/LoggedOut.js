import React from "react";
import Link from "next/link";
export default function LoggedOut() {
    return (
      <><div className="relative bg-white flex justify-center w-screen">
            <div className="flex flex-col justify-start space-y-10 pt-32 z-10">
                <div className="flex flex-col justify-center items-center text-center space-y-8">
                    <div className="text-center text-5xl text-indigo-800">
                        You are now logged out
                    </div>
                    <Link href="/">
                        <button className="text-xl w-1/3 rounded-xl bg-purple-300 p-4">Log back in</button>
                    </Link>
                    <div className="flex justify-center items-center text-2xl">
                        <img 
                            src="https://images.vexels.com/media/users/3/240168/isolated/preview/d17a578c03915b108a4c162b62c13fd3-boba-tea-illustration.png"
                            width="80%"
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )


}