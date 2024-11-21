import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaLightbulb, FaHandshake, FaCompass, FaRocket, FaChalkboardTeacher } from "react-icons/fa";

const CareerPlanning = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const [animateStep, setAnimateStep] = useState(1); // For animation effect

  // Function to calculate progress
  const calculateProgress = () => {
    return (currentStep / totalSteps) * 100;
  };

  // Effect for step animation (automates card rendering every 2 seconds)
  useEffect(() => {
    if (animateStep <= totalSteps) {
      const interval = setInterval(() => {
        setAnimateStep((prev) => prev + 1); // Increase the current step after 2 seconds
        setCurrentStep((prev) => prev + 1); // Update current step for progress bar
      }, 2000); // 2 seconds interval
      return () => clearInterval(interval);
    }
  }, [animateStep]);

  // Icon colors for each step
  const stepIconColors = [
    "text-yellow-400", // Step 1: Self-Discovery
    "text-blue-500", // Step 2: Goal Setting
    "text-red-500", // Step 3: Skill Building
    "text-green-500", // Step 4: Networking
    "text-purple-500", // Step 5: Career Guidance
  ];

  return (
    <div className="p-8 bg-white text-secondary rounded-lg shadow-xl">
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-6 flex items-center gap-3">
        <FaCompass className="text-primary" /> Career Planning Resources
      </h2>
      <p className="text-lg mb-8">
        Build your future with our step-by-step career roadmap. Learn how to identify your strengths, set goals, and connect with resources to succeed in your journey.
      </p>

      {/* Progress Bar */}
      <div className="relative mb-8">
        <div className="w-full h-2 bg-gray-300 rounded-full">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>

      {/* Staggered Steps Design (Cards with Borders and Circled Numbers) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(totalSteps)].map((_, index) => {
          const stepNumber = index + 1;
          const stepIcons = [
            <FaLightbulb className={`text-2xl ${stepIconColors[stepNumber - 1]}`} />,
            <FaMapMarkerAlt className={`text-2xl ${stepIconColors[stepNumber - 1]}`} />,
            <FaRocket className={`text-2xl ${stepIconColors[stepNumber - 1]}`} />,
            <FaHandshake className={`text-2xl ${stepIconColors[stepNumber - 1]}`} />,
            <FaChalkboardTeacher className={`text-2xl ${stepIconColors[stepNumber - 1]}`} />,
          ];
          const stepTitles = [
            "Self-Discovery",
            "Goal Setting",
            "Skill Building",
            "Networking",
            "Career Guidance",
          ];
          const stepDescriptions = [
            "Reflect on your skills, interests, and values to uncover your unique strengths.",
            "Define clear and achievable goals to create a focused path for success.",
            "Enhance your capabilities by learning new skills and improving existing ones.",
            "Build connections with mentors, peers, and industry professionals to open doors to new opportunities.",
            "Access guidance from advisors and career services to finalize your roadmap.",
          ];

          return (
            <div
              key={stepNumber}
              className={`flex flex-col items-center w-full max-w-xs cursor-pointer ${animateStep >= stepNumber ? "opacity-100 transform translate-y-0" : "opacity-50 transform translate-y-6"} transition-all duration-700`}
              onClick={() => setCurrentStep(stepNumber)}
              style={{ animationDelay: `${stepNumber * 2}s` }} // Delays each card's rendering
            >
              {/* Card */}
              <div className="relative border-2 border-primary rounded-lg p-6 shadow-md hover:shadow-xl transition-all ease-in-out">
                {/* Circled Number */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl border-2 border-primary">
                  {stepNumber}
                </div>
                {/* Icon */}
                <div className="mb-4">{stepIcons[stepNumber - 1]}</div>
                <h4 className="text-xl font-bold mt-2">{`Step ${stepNumber}: ${stepTitles[stepNumber - 1]}`}</h4>
                {animateStep >= stepNumber && (
                  <p className="text-sm text-center mt-2">{stepDescriptions[stepNumber - 1]}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Call-to-Action */}
      <div className="mt-10 text-center">
        <a
          href="#"
          className="inline-block bg-primary text-white px-8 py-3 text-lg font-bold rounded-full shadow-md hover:bg-accent transition"
        >
          Start Your Career Journey
        </a>
      </div>

      {/* CSS for hover effect and transitions */}
      <style jsx>{`
        .flex > div {
          cursor: pointer;
        }
        .flex > div:hover {
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }
        .transform {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default CareerPlanning;
