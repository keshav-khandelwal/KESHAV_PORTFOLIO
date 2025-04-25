
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ChevronRight } from "lucide-react";

const TimelineItem = ({ date, title, delay }) => {
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
      className="flex gap-4 mb-8"
    >
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Award className="w-4 h-4 text-primary-foreground" />
        </div>
        <div className="w-0.5 h-full bg-border" />
      </div>
      <div className="flex-1 bg-card rounded-lg p-4 border shadow-sm">
        <div className="text-sm text-muted-foreground mb-1">{date}</div>
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{title}</h3>
          <ChevronRight className="w-4 h-4 text-primary" />
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const certificates = [
    {
      date: "April 2025",
      title: "Python Basics - University of Michigan (Coursera)",
      delay: 0.1,
    },
    {
      date: "April 2024",
      title: "Introduction to Generative AI",
      delay: 0.2,
    },
    {
      date: "March 2024",
      title: "ChatGPT Advanced Data Analysis",
      delay: 0.3,
    },
    {
      date: "March 2024",
      title: "SQL(Basic) by HackerRank",
      delay: 0.4,
    },
    {
      date: "August 2023",
      title: "Self-placed DSA course by GeeksForGeeks",
      delay: 0.5,
    },
    {
      date: "June 2023",
      title: "Excel Skills for Data Analytics and Visualization",
      delay: 0.6,
    },
    {
      date: "June 2023",
      title: "Excel Fundamentals for Data Analysis",
      delay: 0.7,
    },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certificates</h2>
          <p className="text-muted-foreground">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {certificates.map((cert, index) => (
            <TimelineItem key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
