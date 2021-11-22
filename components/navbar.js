import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Head from 'next/head';

export default function Navbar() {
  const [sideBar, setsideBar] = useState(false);
  const [clickedSideBar, setClickedSideBar] = useState(false);

  const toggleSidebar = () => {
    setsideBar(!sideBar);
    setClickedSideBar(true);
  };

  const getSideBarClassName = () => {
    if(!clickedSideBar) {
      return "hiddenSideBar";
    }
    return sideBar? "slideIn" : "slideOut";
  }
  
  const clickedOutside = (ref) => {
    useEffect(() => {
      /**
      * Alert if clicked on outside of element
      **/
      function handleClickOutside(event) {
        if(ref.current && !ref.current.contains(event.target)) {
          setsideBar(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  clickedOutside(wrapperRef);

  return (
    <>
      <Head>
        <title>BBT Trackers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="sideBar">
      <div className="px-10 col-start-1 row-start-1 py-6">
        <button onClick={toggleSidebar} className="pl-2 pt-2">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="80" height="10"></rect>
            <rect y="20" width="80" height="10"></rect>
            <rect y="40" width="80" height="10"></rect>
          </svg>
        </button>
      </div>
      <div className="justify-self-center self-center">
        <h1 className="text-lg md:text-2xl">Bubble Tea Tracker</h1>
      </div>
      <div ref={wrapperRef} className={getSideBarClassName()}>
        <div className="relative w-96 text-white shadow-xl">
            <div className="space-y-5 h-screen bg-gray-800 overflow-y-auto">
              <div onClick={toggleSidebar} className="px-10 py-6">
                <button className="pt-2 pl-2">
                  <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="80" height="10" style={{ fill: "white" }}></rect>
                    <rect
                      y="20"
                      width="80"
                      height="10"
                      style={{ fill: "white" }}
                    ></rect>
                    <rect
                      y="40"
                      width="80"
                      height="10"
                      style={{ fill: "white" }}
                    ></rect>
                  </svg>
                </button>
              </div>
              <div className="space-y-10 font-body text-xl pl-8 pr-12 pb-32 flex flex-col">
                <Link href="/">
                  <a className="sideBarElement" onClick={toggleSidebar}>
                    Home
                  </a>
                </Link>
                <Link href="/spending">
                  <a className="sideBarElement" onClick={toggleSidebar}>
                    Tracking Your Spending
                  </a>
                </Link>
                <Link href="/LoggedOut">
                    <a className="sideBarElement" onClick={toggleSidebar}>
                        Log Out
                    </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}