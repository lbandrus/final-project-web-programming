import Header from "@/components/Header/Header";
import Intro from "@/components/introduction/intro";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import SignupWidget from "@/components/SignupWidget/SignupWidget";
import WorkWidget from "@/components/WorkedWidget/WorkedWidget";
import SkillsWidget from "@/components/SkillsWidget/SkillsWidget";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

const articles = [
  {
    date: "March, 17 2024",
    title: "Associate Software Test Engineer",
    content:
      "I showed that I could be a SET and was promoted to an Associate Software Test Engineer. I was responsible for writing test cases, executing test cases, and reporting bugs.",
    link: "https://www.linkedin.com/in/logan-andrus-0a244690/",
  },
  {
    date: "April 16, 2023",
    title: "Software Engineer in Test Apprentice",
    content:
      "I was hired as a Software Engineer in Test Apprentice. I was responsible for writing test cases, executing test cases, and reporting bugs.",
    link: "https://www.linkedin.com/in/logan-andrus-0a244690/",
  },
  {
    date: "January 9, 2023",
    title: "Software Engineer in Test Intern",
    content:
      "I was hired as a Software Engineer in Test Intern.",
    link: "https://www.linkedin.com/in/logan-andrus-0a244690/",
  },
];

const intro = {
  image: "me.jpg",
  title: "I am the Bug Crusher 9000!",
  introduction:
    "I am a Software Test Engineer at O.C.Tanner. I am passionate about software testing and automation. I am always looking for ways to improve my skills and learn new things. I am a lifelong learner and I am always looking for ways to improve myself.",
  linkedIn_link: "https://www.linkedin.com/in/logan-andrus-0a244690/",
  x_link: "https://www.twitter.com",
  github_link: "https://github.com/lbandrus",
};

const skills = [
  { name: "HTML", proficiency: 80, icon: "html5.png" },
  { name: "CSS", proficiency: 25, icon: "css3.png" },
  { name: "JavaScript", proficiency: 50, icon: "javascript.png" },
];

export default function Home() {
  return (
    <div id="page-wrapper">
      <Header />
      <Intro
        image={intro.image}
        title={intro.title}
        introduction={intro.introduction}
        linkedIn_link={intro.linkedIn_link}
        x_link={intro.x_link}
        github_link={intro.github_link}
      />
      <div className="content-wrapper">
        <div id="main-content">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>

        <div id="main_right">
          <SignupWidget
            title={"Stay up to date"}
            content={"Get notified when I publish something new, and unsubscribe at any time."}
          />
          <WorkWidget
            title={"Work"}
            content={"My work experience."}
            experiences={[
              {
                logo: "/oct.jpg",
                organization: "O.C.Tanner",
                jobTitle: "Software Test Engineer",
                startYear: 2023,
                endYear: null,
              },
            ]}
          />
          <SkillsWidget
            title={"Skills"}
            content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
            skills={skills}
          />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
