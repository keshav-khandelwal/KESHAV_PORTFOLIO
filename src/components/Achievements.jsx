
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Code, Award, MessageSquare } from "lucide-react";

const AchievementCard = ({ icon: Icon, title, description, delay }) => {
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
      className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      icon: Code,
      title: "CodeChef Streak",
      description: "Maintained a 100-day daily coding streak on CodeChef, and earned multiple achievement badges.",
      delay: 0.1,
    },
    {
      icon: Trophy,
      title: "LeetCode Achievements",
      description: "Solved 150+ LeetCode problems, maintained a 70+ day streak, and earned 2 achievement badges for consistency and problem-solving.",
      delay: 0.2,
    },
    {
      icon: MessageSquare,
      title: "Debate Competition",
      description: "Represented the School of Computer Science and Engineering in a debate competition, enhancing public speaking and critical thinking abilities.",
      delay: 0.3,
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <Trophy className="inline-block mr-2 mb-1" /> Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognition that showcase my dedication to continuous learning and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
