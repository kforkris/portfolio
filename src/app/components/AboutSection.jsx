"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>NextJs</li>
        <li>Redux</li>
        <li>SCSS</li>
        <li>TypeScript</li>
        <li>C/C++</li>
        <li>Data Structures</li>
        <li>OOPS</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li>Software Engineer</li>
          <p>Company name - Mentorkart</p>
          <p>Sep-2023 - Present</p>
        </ul>
        <ul className="list-disc mt-4 pl-2">
          <li>Frontend Developer</li>
          <p>Company name - Mentorkart</p>
          <p>Sep-2022 - Sep-2023</p>
        </ul>
      </>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <ul className="list-disc pl-2">
          <li>Lovely Professional University</li>
          <p>{`->`} Bachelor of technology</p>
          <p>{`->`} Computer Science & Engineering</p>
          <p>{`->`} 2019 - 2023</p>
        </ul>
      </>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Master in React Js</li>
        <li>Core & Advnace Java</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a web developer with a passion for creating interactive and
            responsive web applications. I have experience working with
            JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize,
            HTML, CSS, and Git. I am a quick learner and I am always looking to
            expand my knowledge and skill set. I am a team player and I am
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
