import Head from "next/head";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <>
      {/* ✅ Add Meta Tags for SEO & Open Graph */}
      <Head>
        <title>KRISHNA PORTFOLIO</title>
        <meta
          name="description"
          content="Welcome to my portfolio. I am Krishna, a Software Engineer specializing in React and Next.js."
        />
        <meta
          name="keywords"
          content="Krishna, Frontend Developer, React, Next.js, Portfolio"
        />
        <meta name="author" content="Krishna" />
        {/* ✅ Open Graph (OG) Meta Tags for Social Media */}
        <meta property="og:title" content="My Portfolio - Krishna" />
        <meta
          property="og:description"
          content="Check out my portfolio showcasing my projects, skills, and experience."
        />
        <meta property="og:image" content="/og-image.png" />{" "}
        {/* Add an actual image in public/ folder */}
        <meta property="og:url" content="https://your-portfolio.com" />
        <meta property="og:type" content="website" />
        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:title" content="My Portfolio - Krishna" />
        <meta
          name="twitter:description"
          content="Explore my latest projects and skills in Frontend Development."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* ✅ Main Content */}
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
