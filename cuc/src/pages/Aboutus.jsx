import React from 'react';
import Hero from '../components/hero';
const teamMembers = [
    {
      name: 'Elspeth Hurse',
      role: 'Centre Manager',
      image: 'https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2023/11/2Elspeth-website-pic.jpg',
      bio: 'Elspeth has a background in education and leadership and has worked in remote and regional areas of Northern Territory, Western Australia, and Queensland. Her passions are equity and justice, well-being and empowerment of others, partnerships and teamwork, and creativity.',
    },
    {
      name: 'Macarlya Waters',
      role: 'First Nations Engagement Officer',
      image: 'https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2024/11/macarlya.jpg',
      bio: 'Macarlya Waters is a dedicated First Nations Education Officer at the Country Universities Centre Balonne. She is committed to enhancing the educational experience for First Nations students and fostering an inclusive learning environment.',
    },
    {
      name: 'Eliza Woodruffe',
      role: 'Student Engagement and Support Coordinator (SESC)',
      image: 'https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2024/06/Eliza.jpg',
      bio: 'Eliza has nearly 30 years of experience in the retail, administration, and education fields and is currently studying a Bachelor of Business part-time. She looks forward to supporting students and facilitating activities for school-age students.',
    },
    {
      name: 'Jessica Embrey',
      role: 'Learning Skills Advisor (LSA)',
      image: 'https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2022/09/Jess-375x455-.jpg',
      bio: 'Jess graduated from QUT with a Bachelor of Secondary Education. She is committed to providing quality education and support to students in rural and remote regions.',
    },
    {
      name: 'Emily Geiger',
      role: 'Administration Assistant',
      image: 'https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2023/06/Emily-375x455-1.jpg',
      bio: 'Emily has experience in various administration roles and is excited to be back in the workforce after raising her children.',
    },
    {
      name: 'Alex Benn',
      role: 'Chair',
      image: 'https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2022/10/Alex-Benn-375x455-1.jpg',
      bio: 'Alex provides strategic guidance and leadership to the board.',
    },
  ];
  
  const AboutUsPage = () => {
    return (
        <div>
      <Hero
        title="About US "
        subtitle="Country Universities Centre ."
        buttonText="Start Exploring"
        imageSrc="https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2022/02/CUCBN-Female-Students-Banner-2000x839-1.jpg"
      />
      <div className="container mx-auto p-6">
        {/* Our Story Section */}
        <section className="mb-12 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-full space-y-6">
            <h2 className="text-4xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">Our Story</h2>
            <p className="text-gray-700">
              We are dedicated to driving change in regional education by empowering the Balonne community to fulfil their potential through higher education. 
              Our mission is to provide accessible, high-quality learning opportunities that allow regional and rural individuals to pursue their dreams without 
              the need to relocate. We have established dedicated learning spaces in St George and Balonne that offer high-speed internet, modern technology, 
              and academic support. As part of the Country Universities Centre network, we are committed to fostering vibrant and connected learning communities 
              that help overcome educational barriers and support a prosperous future for our students and their communities.
            </p>
          </div>
        </section>
  
        {/* Our People Section */}
        <section>
          <h2 className="text-4xl font-bold text-primary mb-6 border-b-2 border-accent pb-2">Our People</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-secondary mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-700 mb-3">{member.bio}</p>
                
              </div>
            ))}
          </div>
        </section>
      </div>
      </div>
    );
  };
  
  export default AboutUsPage;
  