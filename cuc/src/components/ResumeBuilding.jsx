import React from "react";
import { useEffect, useState } from "react";

// Custom hook to trigger fade-up animation
const useFadeUp = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("resume-card");
      if (element && window.scrollY + window.innerHeight > element.offsetTop + 100) {
        setFade(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return fade;
};

const ResumeBuilding = () => {
  const fadeUp = useFadeUp();

  return (
    <div
      id="resume-card"
      className={`p-8 bg-white text-gray-800 rounded-lg shadow-xl border-4 border-accent transition-all ${
        fadeUp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } transform ease-in-out duration-1000`}
    >
      <h2 className="text-4xl font-extrabold mb-4 text-center">Resume Building Guide</h2>
      <p className="text-lg mb-6 text-center">
        Learn how to craft a professional resume that stands out to employers.
      </p>

      {/* Step-by-step guide with images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-2">Step 1: Choose the Right Resume Template</h3>
          <p className="text-lg">
            Selecting the right resume template is crucial. Choose a layout that is easy to read and highlights your skills and experience. 
            You can select templates based on your industry or personal style.
          </p>
          <div className="relative">
            <img 
              src="https://marketplace.canva.com/EAFcO7DTEHM/1/0/1131w/canva-blue-professional-modern-cv-resume-pPAKwLoiobE.jpg" 
              alt="Sample Resume Template" 
              className="w-2/3 md:w-1/2 rounded-lg shadow-md border-2 border-accent transition-transform transform hover:scale-110 duration-300 ease-in-out mx-auto"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-2">Step 2: Tailor Your Resume to the Job</h3>
          <p className="text-lg">
            Customizing your resume for the job you're applying for shows employers you're serious about the position. Highlight relevant skills, 
            experiences, and accomplishments based on the job description.
          </p>
          <div className="relative">
            <img 
              src="https://cdn-5fd97924c1ac1810089c1c2d.closte.com/wp-content/uploads/2021/04/Timeless_Black-0001-scaled.jpg" 
              alt="Tailored Resume Example" 
              className="w-2/3 md:w-1/2 rounded-lg shadow-md border-2 border-accent transition-transform transform hover:scale-110 duration-300 ease-in-out mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Resume Review Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Resume Review Service</h3>
        <p className="text-lg mb-6">
          Our expert resume reviewers can help you improve your resume and ensure it stands out to potential employers. Get personalized feedback
          on your format, content, and overall effectiveness.
        </p>

        <div className="flex justify-between items-center space-x-6">
          <a
            href="#"
            className="text-accent font-bold underline hover:text-secondary"
          >
            Submit Your Resume for Review
          </a>
          <button className="bg-accent px-6 py-2 rounded text-white hover:bg-secondary transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Resume Templates Download Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Resume Templates</h3>
        <p className="text-lg mb-6">
          Download high-quality resume templates to get started on building your professional resume. These templates are optimized for 
          various industries and job types.
        </p>

        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-accent font-bold underline hover:text-secondary"
          >
            Download Templates
          </a>
          <button className="bg-accent px-6 py-2 rounded text-white hover:bg-secondary transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilding;
