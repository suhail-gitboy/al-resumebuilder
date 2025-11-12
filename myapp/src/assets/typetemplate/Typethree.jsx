import React, { forwardRef } from 'react'

const Typethree = forwardRef(({userInformation},ref) => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center p-6">
      {/* Resume Container */}
      <div className="w-[850px] bg-white text-gray-800 p-10 shadow-md border border-gray-300" ref={ref}>
        
        {/* Header */}
        <header className="border-b border-gray-300 pb-3 mb-5">
          <h1 className="text-3xl font-bold">
            {userInformation.personalDetails.name || "Your Full Name"}
          </h1>
          <p className="text-base font-medium text-gray-700">
            {userInformation.personalDetails.title || "Your Professional Title"}
          </p>
          <div className="text-sm text-gray-700 mt-1">
            <p>
              {userInformation.personalDetails.email || "you@email.com"} |{" "}
              {userInformation.personalDetails.phone || "000-000-0000"} |{" "}
              {userInformation.personalDetails.address || "Your City, Country"}
            </p>
          </div>
        </header>

        {/* About / Summary */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2 pb-1">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed">
            {userInformation.personalDetails.about ||
              "A concise summary about your skills, experience, and career goals. Highlight your professional strengths and what you bring to a team."}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2 pb-1">
            Key Skills
          </h2>
          <ul className="text-sm list-disc list-inside grid grid-cols-2 gap-x-6">
            <li>{userInformation.skills.skillone || "Skill One"}</li>
            <li>{userInformation.skills.skilltwo || "Skill Two"}</li>
            <li>{userInformation.skills.skillthree || "Skill Three"}</li>
            <li>{userInformation.skills.skillfour || "Skill Four"}</li>
            <li>{userInformation.skills.skillfive || "Skill Five"}</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2 pb-1">
            Professional Experience
          </h2>

          <div className="mb-3">
            <h3 className="text-base font-semibold">
              {userInformation.experience.role || "Job Title"} —{" "}
              {userInformation.experience.company || "Company Name"}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              {userInformation.experience.duration || "Start Date – End Date"}
            </p>
            <p className="text-sm leading-relaxed">
              {userInformation.experience.job ||
                "Briefly describe your responsibilities, key achievements, and contributions in this role."}
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2 pb-1">
            Education
          </h2>
          <div>
            <h3 className="text-base font-semibold">
              {userInformation.education.course || "Degree / Course Name"}
            </h3>
            <p className="text-sm text-gray-700">
              {userInformation.education.college || "College / University Name"},{" "}
              {userInformation.education.passyear || "Year"}
            </p>
            <p className="text-sm text-gray-600">
              Grade: {userInformation.education.grade || "N/A"}
            </p>
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-lg font-semibold border-b border-gray-300 mb-2 pb-1">
            Online Profiles
          </h2>
          <ul className="text-sm space-y-1 overflow-hidden">
            <li>
              LinkedIn: {userInformation.media.linkedin || "Not Added"}
            </li>
            <li>GitHub: {userInformation.media.github || "Not Added"}</li>
            <li>Portfolio: {userInformation.media.portfolio || "Not Added"}</li>
          </ul>
        </section>
      </div>
    </div>
  );
})

export default Typethree
