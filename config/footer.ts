import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/icons";
import { FooterType } from "types";

const footer: FooterType = {
  copyright: "2023 Tim. All rights reserved. No Cookies.",
  socials: [
    {
      name: "Twitter",
      href: "https://twitter.com/timtbdev",
      icon: TwitterIcon,
    },
    {
      name: "GitHub",
      href: "https://github.com/timtbdev/projects",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tumur-bazarragchaa-76b979290/",
      icon: LinkedInIcon,
    },
  ],
};

export default footer;
