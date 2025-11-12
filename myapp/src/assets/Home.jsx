import React from "react";

import Skeleton from '@mui/material/Skeleton';
import { Link } from "react-router";
import ReviewsSection from "./pages/Sectionreview";
import Templates from "./pages/SectionTemplates";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col  bg-linear-to-br from-purple-950 via-purple-600 to-purple-900 text-gray-100">
      {/* Navbar */}
 

      {/* Hero Section */}
      <main className="flex-1 gap-y-10  flex flex-col lg:flex-row items-center py-14 justify-between px-14">
        {/* Text Section */}
        <div className="max-w-xl space-y-8">
          <h2 className="text-2xl  md:text-6xl  font-extrabold bg-white/40 bg-clip-text text-transparent">
            Build Your Dream Resume <br />
            with Ease.
          </h2>
          <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
            Create a powerful and professional resume with our easy-to-use
            builder. Pick a stunning template, fill in your details, and
            download your personalized resume instantly.
          </p>
          <div className="space-x-2 md:space-x-4" >
            <Link to="/generate" className="bg-linear-to-r text-xs md:text-lg from-purple-950 via-purple-800 to-purple-950 hover:bg-violet-600 px-3 py-2   md:px-6 md:py-3 rounded-lg font-semibold transition">
              Start Building →
            </Link>
            <a className="border text-xs md:text-lg px-3 py-2 border-purple-500 text-purple-400 md:px-6 md:py-3 rounded-lg hover:bg-purple-500 hover:text-white transition"  href="#template">
              View Templates
            </a>
<Skeleton variant="rectangular " width="100%" height="100%" />
            
          </div>
        </div>

  <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full md:w-1/2 h-90 md:h-120 rounded-2xl bg-neutral-800/20 backdrop-blur-md border border-white/10 p-6 flex flex-col items-center overflow-hidden"
    >
      {/* Resume Images */}
      <div className="relative flex justify-center items-center gap-10 pt-10">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(255,255,255,0.25)",
          }}
          src="https://images.resumgo.com/2019/08/DIONA-Free-Resume-Template.png"
          alt="Template 1"
          className="rounded-lg w-1/3 h-auto shadow-2xl shadow-white/10 transition-transform duration-300"
        />

        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(255,255,255,0.25)",
          }}
          src="https://marketplace.canva.com/EAFRuCp3DcY/3/0/1131w/canva-black-white-minimalist-cv-resume-fbJ3nW9XufE.jpg"
          alt="Template 2"
          className="rounded-lg w-1/3 h-auto shadow-2xl shadow-white/10 transition-transform duration-300"
        />

        {/* Animated Character (emerging from middle) */}
        <motion.img
          initial={{ scale: 0, opacity: 0, y: 0 }}
          animate={{ scale: 1, opacity: 1, y: 90 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          src="../../public/depositphotos_216219314-stock-illustration-businessman-character-set-animate-character-removebg-preview.png"
          alt="Animated Character"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 md:w-36 h-auto drop-shadow-xl"
        />
      </div>
    </motion.div>
      </main>
<div className="w-screen" >
 <ReviewsSection  />
 
</div>
      

      {/* Footer */}
      <footer className="text-center py-5 text-gray-500 border-t border-gray-700">
        © 2025 <span className="text-purple-400">ResumeBuilder</span>. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
