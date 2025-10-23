import React, { useState } from "react";
import { motion } from "framer-motion";

function Sliderintro() {
    const [active, setActive] = useState("one");

    const Abouteme = () => (
        <div>
            <p>About me section is here</p>
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
        <div className="w-full flex flex-col items-center mt-10">
            {/* Button Container */}
            <div className="relative flex bg-[#1b1c1e] p-1 rounded-[23px] w-[614px] h-[62px] items-center justify-between ">
                {[
                    { id: "one", label: "About Me" },
                    { id: "two", label: "Experiences" },
                    { id: "three", label: "Recommended" },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className="relative px-6 py-3.5 text-sm font-medium text-gray-300 rounded-[23px] transition-colors group"
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
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content Section */}
            <div className="mt-6 text-gray-600">
                {active === "one" && <Abouteme />}
                {active === "two" && <Experiences />}
                {active === "three" && <Reccomeneded />}
            </div>
        </div>
    );
}

export default Sliderintro;