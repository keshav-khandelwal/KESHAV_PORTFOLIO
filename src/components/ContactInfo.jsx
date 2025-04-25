
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "keshav-khandelwal-kk",
      link: "https://www.linkedin.com/in/keshav-khandelwal-kk/",
      delay: 0.1,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "keshav-khandelwal",
      link: "https://github.com/keshav-khandelwal",
      delay: 0.2,
    },
    {
      icon: Mail,
      label: "Email",
      value: "keshavkhandelwal.jwr@gmail.com",
      link: "mailto:keshavkhandelwal.jwr@gmail.com",
      delay: 0.3,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9509168342",
      link: "tel:+919509168342",
      delay: 0.4,
    },
  ];

  return (
    <section id="contact-info" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: info.delay }}
              className="group"
            >
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-card hover:bg-primary/5 border rounded-xl p-6 transition-colors duration-300">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{info.label}</h3>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group hover:bg-primary hover:text-primary-foreground"
          >
            <a href="mailto:keshavkhandelwal.jwr@gmail.com">
              <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Send me an email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
