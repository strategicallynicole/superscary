import React, { useState } from "react";
const Nav = (props) => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
          <nav className="mx-auto container relative z-10">
                    <div className="lg:flex hidden items-center justify-between py-12 xl:px-0 px-4">
                        <a href="javascript:void(0)">
<img></img>                  </a>
                        <ul className="flex leading-loose">
                            <a href="javascript:void(0)">
                                <li className="text-2xl leading-8 mr-10 text-indigo-700 relative font-normal cursor-pointer hover:text-indigo-700">
                                    Home
                                    <hr className="border-4 border-indigo-700 bg-indigo-700 w-10 absolute right-0" />
                                </li>
                            </a>
                            <a href="javascript:void(0)">
                                <li className="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer hover:text-indigo-700">Menu</li>
                            </a>
                            <a href="javascript:void(0)">
                                <li className="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer hover:text-indigo-700">About</li>
                            </a>
                            <a href="javascript:void(0)">
                                <li className="text-2xl leading-8 mr-10 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer hover:text-indigo-700">Contact</li>
                            </a>
                            <a href="javascript:void(0)">
                                <li className="text-2xl leading-8 text-color-black flex flex-col items-end justify-end font-normal cursor-pointer hover:text-white">Reservation</li>
                            </a>
                        </ul>
                    </div>
                </nav>
                {/* Desktop */}
                {/* Mobile */}
                <nav className="lg:hidden z-40 relative">
                    <div className="flex py-4 justify-between items-center px-4">
                        <div>
                            <img loading="lazy" src="https://i.ibb.co/6sZ76Pj/foodies.png" alt="logo" className="w-24" />
                        </div>
                        <div className="visible flex items-center">
                            <ul id="list" className={menu ? "top-100 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16" : "hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-12 md:mt-16"}>
                                <li className="flex cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2">
                                    <a href="/">
                                        <span className="ml-2 font-bold">Home</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Menu</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">About</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal py-2 flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Contact</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-hover text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Reservation</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="xl:hidden">
                                {!menu ? (
                                    <svg id="open" onClick={() => setMenu(true)} aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                ) : (
                                    <div id="close" className="close-m-menu" onClick={() => setMenu(false)}>
                                        <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                     </div>
    );
};
export default Nav;