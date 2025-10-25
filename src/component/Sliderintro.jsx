import React, { useState } from "react";
import { motion } from "framer-motion";


function Sliderintro() {
    const [active, setActive] = useState("one");

    const Abouteme = () => (
        <div>
            <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been <br />
                working at this awesome company for 3 years now.
                <br />
                I was born and raised in Albany, NY& have been living in Santa<br />
                Carla for the past 10 years my wife Tiffany and my 4 year old twin <br />
                daughters- Emma and Ella. Both of them are just starting school,<br />
                so my calender is usually blocked between 9-10 AM. This is a...</p>
        </div>
    );

    const Experiences = () => (
        <div>
            <p>Experiences section is here</p>
        </div>
    );

    const Reccomeneded = () => (
        <div>
            <p>Recommended section is here</p>
        </div>
    );

    return (
        <div className={`bg-[#363C43]  from-[#4A4E54] to-[#1b1c1e] w-[720px] h-[316px] rounded-[23px]  shadow-[5px_5px_5px_rgba(0,0,0,0.9)] relative ml-3 `}>

         {/*placing all the icons here  */}
            <img
                src="/qicon.png"
                alt="Decorative icon"
                className="absolute top-[20px] left-[13px] w-[24px] h-[24px]"
            />

            <img
                src="/boxicon.png"
                alt="Decorative icon"
                className="absolute top-[148px] left-[13px] w-[24px] h-[31px]"
            />

            <img
                src="/lineicon.png"
                alt="Decorative icon"
                className="absolute top-[111px] right-[13px] w-[18px] h-[74px]"
            />     


            <div className="w-full flex flex-col items-center mt-10">

                
                {/* Button Container */}
                <div className="relative flex bg-[#1b1c1e] p-1 rounded-[23px] w-[614px] h-[62px] items-center justify-between mt-4 ">
                    {[
                        { id: "one", label: "About Me" },
                        { id: "two", label: "Experiences" },
                        { id: "three", label: "Recommended" },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className="relative px-7 py-3.5 text-sm font-medium text-gray-300 rounded-[23px] transition-colors group"
                        >
                            {/* Hover effect background - positioned behind text */}
                            <span className="absolute inset-x-2 inset-y-1 bg-[#3a434e]/80 blur-[1px] scale-x-0 origin-left transition-transform duration-700 ease-in-out group-hover:scale-x-100 rounded-[23px] z-0"></span>

                            {/* Text */}
                            <span className={`relative z-10 text-[18px] ${active === tab.id ? "text-white" : "text-gray-400"}`}>
                                {tab.label}
                            </span>

                            {/* Active sliding background */}
                            {active === tab.id && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-zinc-800 rounded-[23px] z-0 shadow-[13.49px_16.87px_67.47px_8.43px_#0a0a0a,-8.43px_-16.87px_50.6px_-16.87px_#485B71]"
                                    transition={{
                                        type: "tween",
                                        ease: "easeInOut",
                                        duration: 0.4,

                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div className="mt-[40px] text-[#969696] font-thin pl-[50px] text-[20px] mb-[22px]">
                    {active === "one" && <Abouteme />}
                    {active === "two" && <Experiences />}
                    {active === "three" && <Reccomeneded />}
                </div>
            </div>

        </div>
    );
}

export default Sliderintro;