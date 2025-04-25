
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, FlaskRound as Flask, GitBranch } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProjectCard = ({ title, description, techStack, githubLink, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card rounded-xl border p-6 hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="space-y-4">
        {description.map((item, index) => (
          <p key={index} className="text-muted-foreground">
            • {item}
          </p>
        ))}
        <div className="pt-4">
          <p className="font-semibold mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="pt-4">
          <Button asChild variant="outline">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <GitBranch className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Wine Classification Using Machine Learning",
      description: [
        "Applied multiple machine learning models to classify wine types using physicochemical features such as alcohol content, acidity, and phenols.",
        "Implemented and compared K-Nearest Neighbors, Naive Bayes, Decision Trees, Multiple Linear Regression, and Neural Networks.",
        "Evaluated models using precision, recall, F1 score, accuracy, and error rate.",
        "Visualized feature relationships and model performance to interpret results effectively.",
      ],
      techStack: ["R", "caret", "e1071", "class", "rpart", "neuralnet", "ggplot2", "corrplot"],
      githubLink: "https://github.com/keshav-khandelwal/Wine-Data-Analysis-ML",
      delay: 0.1,
    },
    {
      title: "COVID-19 Insights India – Tableau Dashboard",
      description: [
        "Created an interactive Tableau dashboard to visualize COVID-19 data across Indian states.",
        "Showcased trends in testing, vaccinations (first and second dose), and vaccine distribution by type and age.",
        "Incorporated map-based visuals to highlight state-wise death tolls and case trends.",
        "Aimed to enhance public understanding using clean and informative visual storytelling.",
      ],
      techStack: ["Tableau", "Microsoft Excel", "OpenStreetMap/Mapbox"],
      githubLink: "https://github.com/keshav-khandelwal/covid19-vaccination-dashboard",
      delay: 0.2,
    },
    {
      title: "Blood Donation Website",
      description: [
        "Created a platform where users can learn about blood donation, register, and book appointments.",
        "Included information on donation criteria and eligibility.",
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/keshav-khandelwal/Helping-Hands",
      delay: 0.3,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <Code className="inline-block mr-2 mb-1" /> Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
