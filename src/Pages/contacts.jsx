import React from "react";
import './pages.css'

const EducationTimeline = () => {
  const education = [
    {
      duration: "Sep 2021 - July 2025",
      title: "Malla Reddy Collage of Engineering",
      subtitle: "Bachelor of Technology in Computer Science",
      detail: "Graduated with CGPA 7.5/10",
      logo: "🎓", // Replace with your image if needed
    },
    {
      duration: "Apr 2019 - May 2021",
      title: "Sri Gayathri Institutions",
      subtitle: "Higher Secondary Education",
      logo: "🏫",
    },
    {
      duration : 'march - 2019',
      title : 'Teja international high school',
      subtitle:'secondary Education',
      logo:'🏫'
    }
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-3xl mx-auto" id="Eduction-background">
      {education.map((edu, index) => (
        <div
          key={index}
          className="border-l-2 border-gray-600 pl-4 mb-8 relative"
        >
          <div className="absolute -left-3 top-1.5 text-xl">
            {edu.logo}
          </div>
          <p className="text-sm text-gray-400 mb-1">{edu.duration}</p>
          <h3 className="text-lg font-semibold">{edu.title} - {edu.subtitle}
          </h3>
          
          {edu.detail && <p className="text-sm mt-1 text-gray-400">{edu.detail}</p>}
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
