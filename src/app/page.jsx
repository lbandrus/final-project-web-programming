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
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit ame",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
    link: "#",
  },
  {
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit ame",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
    link: "#",
  },
  {
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit ame",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
    link: "#",
  },
];

const intro = {
  image: "profile.jpeg",
  title: "Software engineer, father, and believer",
  introduction:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..",
  linkedIn_link: "https://www.linkedin.com",
  x_link: "https://www.twitter.com",
  github_link: "https://www.github.com",
};

const skills = [
  { name: "HTML", proficiency: 60, icon: "html5.png" },
  { name: "CSS", proficiency: 50, icon: "css3.png" },
  { name: "JavaScript", proficiency: 75, icon: "javascript.png" },
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
                logo: "/slack.png",
                organization: "Slack",
                jobTitle: "Software Engineer",
                startYear: 2016,
                endYear: null,
              },
              {
                logo: "/spotify.png",
                organization: "Spotify",
                jobTitle: "Software Engineer",
                startYear: 2014,
                endYear: 2015,
              },
              {
                logo: "/audible.png",
                organization: "Audible",
                jobTitle: "Software Engineer",
                startYear: 2012,
                endYear: 2013,
              },
              {
                logo: "/microsoft.png",
                organization: "Microsoft",
                jobTitle: "Software Engineer",
                startYear: 2010,
                endYear: 2011,
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
