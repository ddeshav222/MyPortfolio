import React from "react";
import AboutImg from "../../assets/aboutMine.png";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:h-80"
            src={AboutImg}
            alt="About img"
          />

          <ul>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="flex gap-3 py-4"
            >
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal"></h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a dedicated and ambitious computer science graduate with
                  a keen interest in full stack development and Java. My passion
                  for understanding the intricacies of technology has also led
                  me to explore the world of Java, where I have
                  gained hands-on experience with Java, Servlet/JSP, JDBC, MySQL
                  Spring Boot to create a real world applications. I thrive in
                  collaborative environments, continuously seeking opportunities
                  to learn and adapt to new challenges. Outside of coding, I
                  enjoy staying active and exploring emerging technologies. My
                  goal is to leverage my skills and enthusiasm to contribute to
                  innovative projects and help drive technological advancements
                  <br />
                  <br />
                  <i>
                    "A QUICK JUMP OUT OF THE BOX IS MORE INSIGHTFUL THAN A
                    LIFETIME OF STANDARD THINKING."
                  </i>
                </p>
              </span>
            </motion.div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
