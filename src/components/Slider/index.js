/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 24/06/2021 - 16:27:41
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { useState } from "react";
import RunAwayLittleGirl from "../Illustrations/RunAwayLittleGirl";
function IndexPage() {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="container relative px-6 mx-auto xl:px-0">


                <div className="grid items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="xl:mt-8">
                        <div className="text-3xl font-extrabold text-white lg:text-6xl xl:text-8xl">
                            <h1 className="mt-2 text-white lg:mt-0">Trustworthy</h1>
                            <h1 className="mt-2 text-white lg:mt-0">Insurance</h1>
                            <h1 className="mt-2 lg:mt-0">Providers</h1>
                        </div>
                        <h2 className="mt-2 text-lg leading-tight text-white lg:text-2xl lg:w-10/12 lg:mt-6">Jubilee Life Insurance makes it to the Top 25 Companies lists </h2>
                        <button className="relative flex items-center justify-center p-4 mt-5 text-lg font-medium text-white bg-indigo-700 hover:opacity-90 focus:outline-none lg:mt-10 lg:text-2xl lg:p-8 rounded-3xl">
                            Get a quote
                            <svg className="ml-8" xmlns="http://www.w3.org/2000/svg" width={26} height={17} viewBox="0 0 26 17" fill="none">
                                <path d="M1.33333 8.6665H24.6667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 15.3332L24.6667 8.6665" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 2L24.6667 8.66667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative w-full mt-8 custom-height lg:mt-0 rounded-3xl">
<RunAwayLittleGirl />
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
