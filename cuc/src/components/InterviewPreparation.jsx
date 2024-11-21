import React, { useState, useEffect, useRef } from "react";

// Lazy load hook for content visibility
const useIntersectionObserver = (threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold }
    );
    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [threshold]);

  return { isIntersecting, elementRef };
};

const InterviewPreparation = () => {
  const [animate, setAnimate] = useState(false);

  const { isIntersecting, elementRef } = useIntersectionObserver(0.1);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 200); // Delay for animation to kick in
  }, []);

  return (
    <div
      className={`p-8 bg-white text-gray-800 rounded-lg shadow-xl transition-all duration-500 ease-in-out transform ${
        animate ? "hover:shadow-2xl hover:translate-y-2" : ""
      }`}
    >
      <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900 animate__animated animate__fadeIn">
        Interview Preparation Tips
      </h2>
      <p className="text-lg mb-6 text-center animate__animated animate__fadeIn animate__delay-1s">
        Ace your interviews with confidence using these practical tips tailored for the Australian job market.
      </p>

      <div className="grid grid-cols-1 font-serif  md:grid-cols-2 gap-8">
        <div
          className={`space-y-4 p-4 ${isIntersecting ? "animate__animated animate__fadeIn" : ""}`}
          ref={elementRef}
        >
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg">
              <strong>Research your potential employer:</strong> Learn about the company's history, values, culture, and recent projects. Australian employers value cultural fit, so understanding the company's ethos can set you apart.
            </li>
            <li className="text-lg">
              <strong>Practice common interview questions:</strong> Prepare for standard questions such as "Tell me about yourself?" and "Why do you want to work here?" You may also be asked situational questions like "How would you handle a difficult customer?" or "Describe a time when you had to work with a team to solve a problem."
            </li>
            <li className="text-lg">
              <strong>Highlight your achievements:</strong> Australians appreciate results-driven candidates. Use examples to show how you have solved problems or contributed to the success of your previous roles. Quantify your achievements where possible.
            </li>
            <li className="text-lg">
              <strong>Understand Australian workplace culture:</strong> Research workplace norms in Australia, such as punctuality, direct communication, and the emphasis on work-life balance. Australian employers appreciate candidates who understand these cultural aspects.
            </li>
            <li className="text-lg">
              <strong>Prepare for Australian-specific questions:</strong> Be prepared for questions like, "How do you handle work-life balance?" or "Are you willing to relocate?" These questions are quite common in the Australian job market, especially for remote or interstate positions.
            </li>
          </ul>
        </div>
        <div
          className={`space-y-4 p-4 ${isIntersecting ? "animate__animated animate__fadeIn" : ""}`}
          ref={elementRef}
        >
          <ul className="list-disc list-inside space-y-3">
            <li className="text-lg">
              <strong>Show your passion for the role:</strong> Australian employers look for candidates who are enthusiastic and motivated. Highlight your genuine interest in the role and the company, and don't be afraid to show excitement about joining the team.
            </li>
            <li className="text-lg">
              <strong>Network:</strong> Networking is an essential part of the Australian job market. Attend industry events, join professional groups, and connect with professionals on LinkedIn to enhance your chances of landing interviews.
            </li>
            <li className="text-lg">
              <strong>Know the Australian job market:</strong> Stay updated on trends in the Australian job market, including in-demand skills, salaries, and industries. Websites like <a href="https://seek.com.au" className="text-primary">Seek</a> and <a href="https://www.linkedin.com/jobs" className="text-primary">LinkedIn Jobs</a> are great places to start your research.
            </li>
            <li className="text-lg">
              <strong>Be confident in your experience:</strong> Australians value work experience. Be confident in discussing your career history and be prepared to explain how your previous roles have prepared you for this job. Always link your experience to the job requirements.
            </li>
            <li className="text-lg">
              <strong>Dress appropriately:</strong> Dressing professionally is important in Australia. Depending on the industry, business attire may range from formal to smart-casual. Ensure your attire reflects the company culture, but always lean towards being slightly more formal for interviews.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-6 animate__animated animate__fadeIn animate__delay-3s">
        <a
          href="#"
          className="inline-block bg-accent text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-accent-dark transition duration-300"
        >
          Learn More
        </a>
        <a
          href="https://www.seek.com.au/"
          target="_blank"
          className="inline-block bg-accent text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-accent-dark transition duration-300"
        >
          Job Listings
        </a>
      </div>
    </div>
  );
};

export default InterviewPreparation;
