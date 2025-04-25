import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";
import {
  SiCplusplus,
  SiPython,
  SiOpenjdk,
  SiR,
  SiHtml5,
  SiCss3,
  SiReact,
  SiMysql,
  SiMicrosoftexcel,
  SiTableau
} from "react-icons/si";

const SkillIcon = ({ Icon, label }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border hover:shadow-lg transition-all duration-300 cursor-pointer"
  >
    <Icon className="w-8 h-8 text-primary" />
    <span className="text-sm font-medium">{label}</span>
  </motion.div>
);

const SkillCategory = ({ title, skills }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
  >
    <h3 className="font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <SkillIcon key={index} {...skill} />
      ))}
    </div>
  </motion.div>
);

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { Icon: SiCplusplus, label: "C++" },
        { Icon: SiPython, label: "Python" },
        { Icon: SiOpenjdk, label: "Java" },
        { Icon: SiR, label: "R" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { Icon: SiHtml5, label: "HTML" },
        { Icon: SiCss3, label: "CSS" },
        { Icon: SiReact, label: "React" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { Icon: SiMysql, label: "MySQL" },
        { Icon: SiMicrosoftexcel, label: "Excel" },
        { Icon: SiTableau, label: "Tableau" },
      ],
    },
  ];

  // Flatten skills
  const allSkills = skillCategories.flatMap((category) => category.skills);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <Briefcase className="inline-block mr-2 mb-1" /> About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Orbit + Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center"
          >
            {/* Central Profile Image */}
            <motion.img
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full z-10 border-4 border-primary shadow-lg"
              alt="Keshav Khandelwal portrait"
              src="https://raw.githubusercontent.com/keshav-khandelwal/Wine-Data-Analysis-ML/refs/heads/main/keshav.jpg"
            />

            {/* Rotating Skills */}
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {allSkills.map((skill, index) => {
                const angle = (360 / allSkills.length) * index;
                const radius = 240; // orbit radius

                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <skill.Icon className="w-8 h-8 text-primary glow" />
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg leading-relaxed"
            >
              Hi, I'm Keshav Khandelwal, a passionate and driven Computer Science Engineering student at Lovely Professional University. I specialize in building intelligent systems and clean web interfaces. With hands-on experience in AI-powered applications, data analysis, and frontend development, I love creating solutions that are both functional and elegant.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg leading-relaxed"
            >
              From developing an AI-based handwritten text recognition system to analyzing real-world A/B test results, I thrive on turning ideas into working products. My tech stack includes C++, Python, Java, SQL, React.js, OpenCV, and NLP tools like SpaCy. I've also worked with tools like Tableau and Excel for data visualization.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg leading-relaxed"
            >
              Whether it's coding smart algorithms or designing intuitive UIs, I aim to build with purpose, precision, and passion.
            </motion.p>

            <div className="space-y-8 mt-12">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <SkillCategory {...category} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
