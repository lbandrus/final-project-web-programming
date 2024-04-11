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
      "I use a lot of software and gadgets on a daily basis. Here are some of the things I use and recommend. I have also built my own computers as well.",
  };

  const items = [
    {
      groupName: "Workstation",
      items: [
        {
          title: "Ryzen 7 5800X",
          description:
            "I built my own computer with a Ryzen 7 5800X. It’s fast, has great performance, and is highly customizable.",
        },
        {
          title: "ASUS RTX 4080 Strix OC",
          description:
            "This Graphics Card is great. It’s fast, and a beast at gaming.",
        },
        {
          title: "Corsair Vengeance RGB Pro 32GB",
          description:
            "I have 32GB of Corsair Vengeance RGB Pro RAM. It’s fast, has great performance, and is highly customizable.",
        },
        {
          title: "Corsair H100i RGB Platinum",
          description:
            "I have a Corsair H100i RGB Platinum CPU Cooler. It is a great cooler and keeps my CPU cool.",
        },
        {
          title: "ASUS VG278QR 27” Gaming Monitor 165Hz",
          description:
            "This Monitor is great. It is a mid range monitor and has great performance.",
        },
      ],
    },
    {
      groupName: "Development",
      items: [
        {
          title: "PyCharm",
          description:
            "I use PyCharm as my IDE for Python. It has a lot of great features and works perfectly with Python.",
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
