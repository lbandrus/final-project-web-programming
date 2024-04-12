import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Intro/Intro";
import Project from "@/components/Project/Project";
import "./Projects.css";

export const metadata = {
  title: "Things I’ve made trying to put my dent in the universe.",
  description:
    "Here are some of the projects I’ve worked on. I’m always looking for new projects to work on.",
  projects: [
    {
      company: " Android Calculator",
      description: "I made a calculator app for Android. It’s available on GitHub.",
      link: "https://github.com/lbandrus/Android_Calculator",
    },
    {
      company: "Library Catalog",
      description: "I made a library catalog app in Python. It’s available on GitHub.",
      link: "https://github.com/lbandrus/CSE310-LibraryCatalog",
    },
    {
      company: "Black Jack",
      description: "I made a Black Jack game in Python. It’s available on GitHub.",
      link: "https://github.com/lbandrus/BlackJack",
    },
    {
      company: "Blog App",
      description: "I made a blog app in Python using Django. It’s available on GitHub.",
      link: "https://github.com/lbandrus/webapp_blog",
    },
    {
      company: "Greed Game",
      description: "I made a Greed game in Python. It’s available on GitHub.",
      link: "https://github.com/lbandrus/Unit4",
    },
    {
      company: "My first Website App",
      description: "I made my first website app. It’s available on GitHub.",
      link: "https://github.com/lbandrus/wdd130",
    },
  ],
};

export default function Projects() {
  const projects = metadata.projects.map((project, index) => (
    <Project key={index} company={project.company} description={project.description} link={project.link} />
  ));
  return (
    <div id="page-wrapper">
      <Header />
      <div id="main-content">
        <Intro title={metadata.title} introduction={metadata.description} />
        <div id="projects">{projects}</div>
      </div>
      <Footer />
    </div>
  );
}
