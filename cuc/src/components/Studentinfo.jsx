import React from "react";

const StudentInfo = () => {
  const infoCards = [
    {
      title: "Student Services",
      description: "We are focused on assisting our students to settle into study.",
      linkText: "Learn more",
      linkUrl: "#",
      imageSrc: "https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2022/02/CUCBN-Student-Services-600x300-1.jpg",
    },
    {
      title: "Wraparound Support",
      description: "We are dedicated to seeing our students succeed.",
      linkText: "How we support you",
      linkUrl: "#",
      imageSrc: "https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2022/02/CUCBN-Wrap-Around-Support-600x300-1.jpg",
    },
    {
      title: "Our Learning Community",
      description: "Make sure to take the time to meet our team.",
      linkText: "Connect with us",
      linkUrl: "#",
      imageSrc: "https://www.cucbalonne.edu.au/wp-content/uploads/sites/13/2022/02/CUCBN-Female-Student-3-600x300-1.jpg",
    },
  ];

  return (
    <section className="bg-background py-12 px-6">
      <h2 className="text-secondary text-3xl font-bold mb-8">Student Info</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="border border-secondary rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={card.imageSrc}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-secondary text-xl font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-secondary mb-4">{card.description}</p>
              <a
                href={card.linkUrl}
                className="text-primary font-bold hover:text-accent transition-colors"
              >
                {card.linkText} &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentInfo;
