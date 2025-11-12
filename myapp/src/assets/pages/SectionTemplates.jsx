import React from "react";
import Carousal from "./Carousal";
import QualitySection from "../../layout/Quality";
import {Link} from "react-router-dom"
const Templates = () => {
  return (
    <div className=" text-gray-200 min-h-screen px-6 py-10">
    
      <div className=" flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-6">
<div className="text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl px-10 py-8 max-w-lg w-full">
<h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
Start Creating Resumes
</h1>
<p className="text-gray-300 mb-8 text-lg">
Build your professional resume easily and export it in minutes.
</p>
<Link className="px-8 py-3 bg-emerald-500 text-gray-900 font-semibold rounded-2xl shadow hover:bg-emerald-600 transition-all" to="/generate">
Start Now
</Link>
</div>
</div>
      <QualitySection/>
<Carousal/>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Template 1 */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-purple-600/30 hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold text-purple-400 mb-2">
            Portfolio Template
          </h2>
          <p className="text-gray-400">
            A sleek and minimal portfolio layout perfect for showcasing your
            projects, experience, and personal brand.
          </p>
        </div>

        {/* Template 2 */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-blue-600/30 hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold text-blue-400 mb-2">
            Resume Template
          </h2>
          <p className="text-gray-400">
            Professional resume design crafted to highlight your skills,
            education, and career achievements effectively.
          </p>
        </div>

        {/* Template 3 */}
  

        {/* Template 4 */}
       

     

        {/* Template 6 */}
        <div className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-red-600/30 hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-semibold text-red-400 mb-2">
            Landing Page Template
          </h2>
          <p className="text-gray-400">
            A conversion-focused landing page design built to help you promote
            your product or service effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Templates;
