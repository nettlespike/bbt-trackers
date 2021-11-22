import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

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
  

  return (
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
        <h1>Bubble Tea Tracker</h1>
      </div>
      <div className={getSideBarClassName()}>
        <div className="relative w-96 text-white shadow-xl">
            <div className="space-y-5 h-screen bg-black overflow-y-auto">
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
                <Link href="/chart">
                  <a className="sideBarElement" onClick={toggleSidebar}>
                    Tracking Your Spending
                  </a>
                </Link>
                <Link href="/FlavourTracking">
                  <a className="sideBarElement" onClick={toggleSidebar}>
                    Flavour Tracker
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}