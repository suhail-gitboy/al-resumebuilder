import React, { forwardRef } from 'react'

const Typetwo = forwardRef(({userInformation},ref) => {
     const profileImage =
    userInformation.imageprofile ||
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop";
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center p-6">
      {/* Resume Container */}
      <div className="w-[850px] bg-white shadow-xl rounded-xl flex overflow-hidden border border-gray-200" ref={ref}>
        {/* Left Section */}
        <div className="w-1/3 bg-gray-200 p-6 flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            {userInformation.personalDetails.name || "Your Name"}
          </h2>
          <p className="text-sm text-gray-600 text-center mb-4">
            {userInformation.personalDetails.title || "Your Profession"}
          </p>

          {/* Contact Info */}
          <div className="w-full mb-6">
            <h3 className="text-base font-semibold text-gray-700 border-b border-gray-400 pb-1 mb-2">
              Contact
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Email: {userInformation.personalDetails.email || "you@email.com"}</li>
              <li>Phone: {userInformation.personalDetails.phone || "000-000-0000"}</li>
              <li>Address: {userInformation.personalDetails.address || "Your Address"}</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="w-full mb-6">
            <h3 className="text-base font-semibold text-gray-700 border-b border-gray-400 pb-1 mb-2">
              Skills
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>{userInformation.skills.skillone || "Skill One"}</li>
              <li>{userInformation.skills.skilltwo || "Skill Two"}</li>
              <li>{userInformation.skills.skillthree || "Skill Three"}</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full">
            <h3 className="text-base font-semibold text-gray-700 border-b border-gray-400 pb-1 mb-2">
              Social Links
            </h3>
            <ul className="text-sm text-gray-700 space-y-1 overflow-hidden">
              <li>LinkedIn: {userInformation.media.linkedin || "Not Added"}</li>
              <li>GitHub: {userInformation.media.github || "Not Added"}</li>
              <li>Portfolio: {userInformation.media.portfolio || "Not Added"}</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-8">
          {/* About */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
              About Me
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {userInformation.personalDetails.about ||
                "Write a brief introduction about yourself, highlighting your experience, strengths, and goals."}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
              Experience
            </h3>
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                {userInformation.experience.role || "Your Role"} –{" "}
                {userInformation.experience.company || "Your Company"}
              </h4>
              <p className="text-sm text-gray-500">
                {userInformation.experience.job || "Job Duration or Description"}
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-gray-300 pb-1 mb-2">
              Education
            </h3>
            <div>
              <h4 className="text-base font-semibold text-gray-800">
                {userInformation.education.course || "Course Name"}
              </h4>
              <p className="text-sm text-gray-600">
                {userInformation.education.college || "College Name"},{" "}
                {userInformation.education.passyear || "Year"}
              </p>
              <p className="text-sm text-gray-600">
                Grade: {userInformation.education.grade || "N/A"}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
})

export default Typetwo
