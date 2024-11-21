import React from "react";
import CareerPlanning from "../components/CareerPlanning";
import ResumeBuilding from "../components/ResumeBuilding";
import InterviewPreparation from "../components/InterviewPreparation";
import JobSearchResources from "../components/JobSearchResources";
import Hero from '../components/hero'; 

const StudentEngagementPage = () => {
  return (
    <main className="bg-background text-secondary min-h-screen">
      

        <Hero
          title="Student & Community Engagement Area"
          subtitle="Resources to help you succeed in your career journey"
          buttonText="Get Started"
          imageSrc="https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2022/02/CUCBN-Banner-2000x825-1.jpg"
        />
  

        <CareerPlanning />
        <ResumeBuilding />
        <InterviewPreparation />
        <JobSearchResources />

    </main>
  );
};

export default StudentEngagementPage;
