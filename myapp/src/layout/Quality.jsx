import React from 'react'
import { CheckCircle, Star, Zap } from 'lucide-react'

const QualitySection = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-[#0a0014] to-[#1c0029] text-gray-200 flex items-center justify-center px-8 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Resume Builder</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Create professional, standout resumes effortlessly. Our resume builder ensures top quality, elegant design, and instant usability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Quality 1 */}
          <div className="bg-[#0f0a1f] border border-[#2a1b3f] rounded-2xl p-8 shadow-lg hover:shadow-purple-900/30 transition-all">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Premium Templates</h3>
            <p className="text-sm text-gray-400">
              Choose from a wide range of modern, minimal, and professional templates designed to impress recruiters and hiring managers.
            </p>
          </div>

          {/* Quality 2 */}
          <div className="bg-[#0f0a1f] border border-[#2a1b3f] rounded-2xl p-8 shadow-lg hover:shadow-purple-900/30 transition-all">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">ATS-Friendly</h3>
            <p className="text-sm text-gray-400">
              Our templates are optimized for Applicant Tracking Systems, ensuring your resume passes screenings and reaches employers faster.
            </p>
          </div>

          {/* Quality 3 */}
          <div className="bg-[#0f0a1f] border border-[#2a1b3f] rounded-2xl p-8 shadow-lg hover:shadow-purple-900/30 transition-all">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Instant Export</h3>
            <p className="text-sm text-gray-400">
              Download your resume instantly as PDF or share it online in one click — easy, fast, and secure for all your job applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QualitySection