import React, { forwardRef } from "react";

const Typeone=forwardRef(({ userInformation },ref)=> {
  const profileImage =
    userInformation.imageprofile ||
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop";

  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center p-6">
      {/* Outer Resume Container (A4-like size) */}
      <div className="w-[794px] h-[1123px] bg-white rounded-xl shadow-lg flex overflow-hidden border border-gray-300 print:w-full print:h-auto" ref={ref}>
        
        {/* Left Sidebar */}
        <div className="w-1/3 bg-blue-700 text-white p-6 flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-28 h-28 rounded-full bg-white mb-4 border-4 border-blue-300 shadow-md overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Title */}
          <h2 className="text-2xl font-semibold text-center leading-tight">
            {userInformation.personalDetails.name || "Your Name"}
          </h2>
          <p className="text-sm text-blue-200 text-center mb-6">
            {userInformation.personalDetails.title || "Your Title"}
          </p>

          {/* Contact Section */}
          <div className="w-full mb-5">
            <h3 className="text-lg font-semibold border-b border-blue-400 pb-1 mb-2">
              Contact
            </h3>
            <ul className="text-sm text-blue-100 space-y-1">
              <li>Email: {userInformation.personalDetails.email || "you@email.com"}</li>
              <li>Phone: {userInformation.personalDetails.phone || "000-000-0000"}</li>
              <li>Address: {userInformation.personalDetails.address || "Your Address"}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full mb-5">
            <h3 className="text-lg font-semibold border-b border-blue-400 pb-1 mb-2">
              Social Links
            </h3>
            <ul className="text-sm text-blue-100 overflow-hidden space-y-1">
              <li>LinkedIn: {userInformation.media.linkedin || "Not Added"}</li>
              <li>GitHub: {userInformation.media.github || "Not Added"}</li>
              <li>Portfolio: {userInformation.media.portfolio || "Not Added"}</li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="w-full">
            <h3 className="text-lg font-semibold border-b border-blue-400 pb-1 mb-2">
              Skills
            </h3>
            <ul className="text-sm text-blue-100 space-y-1">
              <li>{userInformation.skills.skillone || "Skill One"}</li>
              <li>{userInformation.skills.skilltwo || "Skill Two"}</li>
              <li>{userInformation.skills.skillthree || "Skill Three"}</li>
            </ul>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="w-2/3 p-8 overflow-y-auto">
          {/* About */}
          <section className="mb-5">
            <h3 className="text-xl font-semibold text-blue-700 border-b-2 border-blue-100 pb-2 mb-2">
              About Me
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {userInformation.personalDetails.about ||
                "Write a short summary about yourself, your passion, and experience."}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-5">
            <h3 className="text-xl font-semibold text-blue-700 border-b-2 border-blue-100 pb-2 mb-2">
              Experience
            </h3>

            <div className="mb-3">
              <h4 className="text-lg font-semibold text-gray-800">
                {userInformation.experience.role || "Your Role"} –{" "}
                {userInformation.experience.company || "Your Company"}
              </h4>
              <p className="text-gray-500 text-sm">
                {userInformation.experience.job || "Job Duration or Description"}
              </p>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl font-semibold text-blue-700 border-b-2 border-blue-100 pb-2 mb-2">
              Education
            </h3>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                {userInformation.education.course || "Course Name"}
              </h4>
              <p className="text-gray-500 text-sm">
                {userInformation.education.college || "College Name"},{" "}
                {userInformation.education.passyear || "Year"}
              </p>
              <p className="text-gray-600 text-sm">
                Grade: {userInformation.education.grade || "N/A"}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
})

export default Typeone;
