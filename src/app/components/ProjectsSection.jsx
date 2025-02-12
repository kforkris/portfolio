"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tin Dog",
    description: "Dog selling portal",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://kforkris.github.io/TinDog/ ",
  },
  {
    id: 2,
    title: "Applicant Tracking System (JOB PORTAL)",
    description: "It helps corporate to make hiring process easier.",
    image: "/images/projects/2.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://jobs.mentorkart.com/recruit",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Platform to buy clothings and other daily wearables",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://cart123.netlify.app/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Explore menu according to meal type",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://foodlists.netlify.app/",
  },
  {
    id: 5,
    title: "Movie Website",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://kforkris.github.io/MovieList/",
  },
  {
    id: 6,
    title: "To-do List",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://todolistredux1.netlify.app/",
  },
  {
    id: 7,
    title: "Portfolio",
    description: "User portfolio to get brief about them",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://todolistredux1.netlify.app/",
  },
  {
    id: 8,
    title: "Learning Management System",
    description: "A LMS for corporates to train their employee and evaluation.",
    image: "/images/projects/8.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://academy.mentorkart.com/academy/login",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
