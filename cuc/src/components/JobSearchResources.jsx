import React from "react";

const JobSearchResources = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-extrabold text-secondary mb-6">
        Job Search Resources
      </h2>
      <p className="text-lg mb-6 text-secondary">
        Discover tools and platforms to find your dream job. Whether you're
        actively searching or just exploring options, these resources will
        help you navigate the job market with confidence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Job Search Platforms */}
        <div
          className="relative bg-cover text-white border border-primary rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col justify-end h-[300px] group"
          style={{
            backgroundImage: `url('/jobsearch.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            fontFamily: 'Georgia, serif',
            backgroundColor: 'white',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-accent">Job Search Platforms</h3>
            <p className="text-lg mb-4 text-accent">
              Start your job search with the best online platforms that connect
              job seekers with employers.
            </p>
            <ul className="list-disc pl-5 text-lg text-accent">
              <li>
                <a
                  href="https://www.linkedin.com/jobs"
                  className="hover:text-yellow-300"
                >
                  LinkedIn Jobs
                </a>
              </li>
              <li>
                <a
                  href="https://www.indeed.com"
                  className="hover:text-yellow-300"
                >
                  Indeed
                </a>
              </li>
              <li>
                <a
                  href="https://www.glassdoor.com/Job"
                  className="hover:text-yellow-300"
                >
                  Glassdoor
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Resume Building Tools */}
        <div
          className="relative bg-cover text-white border border-primary rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col justify-end h-[300px] group"
          style={{
            backgroundImage: `url('/resume.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            fontFamily: 'Georgia, serif',
            backgroundColor: 'white',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-accent">Resume Building Tools</h3>
            <p className="text-lg mb-4 text-accent">
              Create an eye-catching resume that stands out to hiring managers
              with the help of these free and easy-to-use tools.
            </p>
            <ul className="list-disc pl-5 text-lg text-accent">
              <li>
                <a
                  href="https://www.canva.com/resumes/templates/"
                  className="hover:text-yellow-300"
                >
                  Canva - Professional Resume Templates
                </a>
              </li>
              <li>
                <a
                  href="https://zety.com/resume-builder"
                  className="hover:text-yellow-300"
                >
                  Zety - Online Resume Builder
                </a>
              </li>
              <li>
                <a
                  href="https://www.resumake.io/"
                  className="hover:text-yellow-300"
                >
                  Resumake - Online Resume Builder
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Job Interview Preparation */}
        <div
          className="relative bg-cover text-white border border-primary rounded-lg shadow-lg hover:shadow-xl p-6 flex flex-col justify-end h-[300px] group"
          style={{
            backgroundImage: `url('/interview.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            fontFamily: 'Georgia, serif',
            backgroundColor: 'white',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold mb-4 text-accent">Job Interview Preparation</h3>
            <p className="text-lg mb-4 text-accent">
              Prepare for job interviews with these resources that will help you
              ace your next job interview.
            </p>
            <ul className="list-disc pl-5 text-lg text-accent">
              <li>
                <a
                  href="https://www.hired.com"
                  className="hover:text-yellow-300"
                >
                  Hired - Helps you for job interviews.
                </a>
              </li>
              <li>
                <a
                  href="https://www.interviewbit.com/"
                  className="hover:text-yellow-300"
                >
                  InterviewBit - For technical interviews.
                </a>
              </li>
              <li>
                <a
                  href="https://www.glassdoor.com/Interview"
                  className="hover:text-yellow-300"
                >
                  Glassdoor Interviews - Real-life interview experiences.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <a
        href="#"
        className="inline-block mt-8 bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition"
      >
        Explore More Resources
      </a>
    </div>
  );
};

export default JobSearchResources;
