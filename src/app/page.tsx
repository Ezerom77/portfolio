import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Link from "next/link";
import Image from "next/image";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchExperiences } from "@/utils/fetchExperiences";
import Footer from "@/components/Footer";
// import {
//   Socials,
//   SanitySkills,
//   PageInfo,
//   Experiences,
//   Projects as ProjectsType,
// } from "../../typings";

// interface Props {
//   socials: Socials[];
//   skills: SanitySkills[];
//   pageInfo: PageInfo;
//   experiences: Experiences[];
//   projects: ProjectsType[];
// }

export const revalidate = 900;

const Page = async () => {
  const socials = await fetchSocials();
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  return (
    //
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header socials={socials} />
      <section id="hero" className=" snap-center">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};
export default Page;
