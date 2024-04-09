import "./Uses.css";
import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro.jsx";
import PropTypes from "prop-types";
import UseCard from "@/components/UsesCard/UsesCard.jsx";
import Footer from "@/components/Footer/Footer.jsx";

const UsesSection = () => {
  const intro = {
    title: "Software I use, gadgets I love, and other things I recommend.",
    introduction:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
  };

  const items = [
    {
      groupName: "Workstation",
      items: [
        {
          title: "16” MacBook Pro, M1 Max, 64GB RAM (2022)",
          description:
            "I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.",
        },
        {
          title: "Dell UltraSharp U2717D",
          description:
            "I have two of these monitors and they’re great. I’ve had them for years and they’ve been rock solid.",
        },
        {
          title: "Keychron K2",
          description:
            "I’ve been using this keyboard for a few years now and I love it. It’s wireless, has a great feel, and the battery lasts forever.",
        },
        {
          title: "Logitech MX Master 3",
          description:
            "I’ve been using this mouse for a few years now and it’s great. It’s wireless, has a great feel, and the battery lasts forever.",
        },
        {
          title: "Audio-Technica ATH-M50x",
          description:
            "I’ve been using these headphones for a few years now and they’re great. They’re comfortable, sound good, and are built like a tank.",
        },
        {
          title: "Rain Design mStand",
          description:
            "I’ve been using this stand for my MacBook Pro for a few years now and it’s great. It’s sturdy, looks good, and keeps my laptop cool.",
        },
      ],
    },
    {
      groupName: "Development",
      items: [
        {
          title: "Visual Studio Code",
          description:
            "I use VS Code for all of my development work. It’s fast, has great extensions, and is highly customizable.",
        },
        {
          title: "iTerm2 + Oh My Zsh",
          description:
            "I use iTerm2 as my terminal and Oh My Zsh as my shell. It’s a great combination. I use the Agnoster theme with the Fira Code font.",
        },
      ],
    },
    {
      groupName: "Design",
      items: [
        {
          title: "Figma",
          description:
            "I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.",
        },
        {
          title: "Whimsical",
          description:
            "I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.",
        },
      ],
    },
    {
      groupName: "Productivity",
      items: [
        {
          title: "Notion",
          description:
            "I use Notion for all of my note-taking and knowledge management. It’s fast, has great collaboration features, and is highly customizable.",
        },
        {
          title: "Alfred",
          description:
            "I use Alfred for all of my productivity needs. It’s fast, has great features, and is highly customizable.",
        },
      ],
    },
  ];

  return (
    <div id="page-wrapper">
      <Header />
      <Intro title={intro.title} introduction={intro.introduction} />
      <main className="uses-main-content">
        {items.map((group, index) => (
          <section className="uses-section" key={index}>
            <h2 className="uses-section-title">{group.groupName}</h2>
            <div className="uses-cards-container">
              {group.items.map((item, itemIndex) => (
                // Props passed to UsesCard match the prop names in the updated UsesCard component
                <UseCard key={itemIndex} title={item.title} description={item.description} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
};
export default UsesSection;
