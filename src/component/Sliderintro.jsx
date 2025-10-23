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
      <div className="relative flex bg-[#1b1c1e] p-1 rounded-full">
        {[
          { id: "one", label: "About Me" },
          { id: "two", label: "Experiences" },
          { id: "three", label: "Recommended" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className="relative px-5 py-2.5 text-sm font-medium text-gray-300 rounded-full transition-colors"
          >
            {/* Active sliding background */}
            {active === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-gray-700 rounded-full z-0"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            {/* Text — ensure it's above the motion div */}
            <span className={`relative z-10 ${active === tab.id ? "text-white" : "text-gray-400"}`}>
              {tab.label}
            </span>
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
