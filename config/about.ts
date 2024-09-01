import { AboutPageType } from "@/types";

const aboutPageConfig: AboutPageType = {
  title: "Who am I?",
  description:
    "Oh Hello there, I'm a self taught Frontend developer based in Hayward, California. I have a passion for creating beautiful and functional websites and mobile apps. I'm always looking for new opportunities to learn and grow as a developer.",
  profileImageUrl: "/images/pages/about/about-01.jpg",
  profileImageDescription: "Profile image",
  profileImageCaption: "And this is what I look like.",
  date: "2023-05-01",
  content: [
    {
      title: "What do I do?",
      description:
        "I specialize in creating responsive and accessible websites and mobile apps using modern technologies. I have experience with HTML, CSS, JavaScript, React, React Native, Next.js, TailwindCSS and more. I'm also familiar with Kotlin and Android development.",
    },
    {
      title: "What are my hobbies?",
      description:
        "In my free time, I enjoy reading, running, and spending time with my family. I'm also a big fan of hiking and exploring new places. I'm always looking for new adventures and new experiences.",
    },
    {
      title: "Where can you find me?",
      description:
        "You can find me on GitHub, LinkedIn, and Twitter. Feel free to reach out if you have any questions or just want to chat.",
    },
  ],
};

export default aboutPageConfig;
