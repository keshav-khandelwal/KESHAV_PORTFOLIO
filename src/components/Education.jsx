
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar } from "lucide-react";

const EducationItem = ({ institution, degree, location, date, percentage, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-l-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
      <div className="bg-card rounded-lg p-6 border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-1">{institution}</h3>
        <p className="text-primary font-medium mb-1">{degree}</p>
        <p className="text-muted-foreground mb-1">{location}</p>
        {percentage && (
          <p className="text-sm">
            <span className="font-medium">Percentage:</span> {percentage}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      location: "Phagwara, PUNJAB",
      date: "Since August 2022",
      delay: 0.1,
    },
    {
      institution: "Roop Nagar Public School",
      degree: "Intermediate",
      location: "Jhalawar, Rajasthan",
      date: "March 2021",
      percentage: "83.2%",
      delay: 0.2,
    },
    {
      institution: "Roop Nagar Public School",
      degree: "Matriculation",
      location: "Jhalawar, Rajasthan",
      date: "March 2019",
      percentage: "82.6%",
      delay: 0.3,
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <GraduationCap className="inline-block mr-2 mb-1" /> Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
