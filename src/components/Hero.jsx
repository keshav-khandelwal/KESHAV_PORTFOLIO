
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import { Download, Code, Award, Book } from "lucide-react";

const SkillBadge = ({ children }) => (
  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
    {children}
  </span>
);

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-16 hero-pattern relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <TypeAnimation
              sequence={[
                'Keshav Khandelwal',
                2000,
                'a Developer',
                2000,
                'a Problem Solver',
                2000,
                'Keshav Khandelwal',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="gradient-text"
              repeat={Infinity}
            />
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A passionate Computer Science student with expertise in Data Structures, Algorithms, and Web Development
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <SkillBadge>C++</SkillBadge>
            <SkillBadge>Python</SkillBadge>
            <SkillBadge>Java</SkillBadge>
            <SkillBadge>React</SkillBadge>
            <SkillBadge>SQL</SkillBadge>
            <SkillBadge>HTML/CSS</SkillBadge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-lg bg-card border">
              <Code className="w-8 h-8 mb-2 text-primary mx-auto" />
              <h3 className="font-semibold">100+ LeetCode</h3>
              <p className="text-sm text-muted-foreground">Problem Solving</p>
            </div>
            <div className="p-4 rounded-lg bg-card border">
              <Award className="w-8 h-8 mb-2 text-primary mx-auto" />
              <h3 className="font-semibold">Web-a-Thon</h3>
              <p className="text-sm text-muted-foreground">Competition</p>
            </div>
            <div className="p-4 rounded-lg bg-card border">
              <Book className="w-8 h-8 mb-2 text-primary mx-auto" />
              <h3 className="font-semibold">8+ Certifications</h3>
              <p className="text-sm text-muted-foreground">Technical Skills</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
