/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 23/06/2021 - 16:28:31
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { Component, useState } from 'react';
import RunAwayLittleGirl from '../../Illustrations/RunAwayLittleGirl';

const Index = (props) => {
    const [menu, setMenu] = useState(false);
    return (
               <div className>
                {/* Navigation */}
                {/* Desktop */}

                {/* Desktop */}
                {/* Mobile */}

                {/* Mobile */}
                {/* Navigation */}
                {/* Hero */}
                <div className="container relative z-20 px-4 mx-auto lg:px-0">
                    <div className="flex flex-col-reverse items-center justify-between h-screen lg:flex-row lg:mt-24">
                        <div className="pt-8 lg:w-1/2 lg:pt-0">
                                            <h1 className="text-white underline 2xl:text-9xl xl:text-9xl text-9xl dincondensed">
                                                Hi.
                                            </h1>
                                            <h2 className="text-6xl font-bold dincondensed white-text ">
                                                We Need To Talk.
                                            </h2>
                                            <p className="grotesk white-text font-size-xl">
                                                It's about your brand and creative again.
                                                It's been... frightening.
                                            </p>

                        </div>

                        <div className="pt-8 mt-96 lg:mt-6 lg:w-1/2 lg:pt-0">
                        <RunAwayLittleGirl />
                        </div>
                        </div>
                {/* Hero */}
            </div>
        </div>
    );
};
export default Index;
