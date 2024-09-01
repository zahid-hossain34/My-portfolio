import {
  UserCircleIcon as AboutIcon,
  Squares2X2Icon as BlogIcon,
  PaperAirplaneIcon as ContactIcon,
  BoltIcon as HomeIcon,
} from "@heroicons/react/24/outline";
import { MenuType } from "types";

const menuConfig: MenuType[] = [
  {
    title: "Home",
    url: "/",
    idx: 1,
    icon: HomeIcon,
  },
  {
    title: "About",
    url: "/about",
    idx: 2,
    icon: AboutIcon,
  },
  {
    title: "Blog",
    url: "/blog",
    idx: 3,
    icon: BlogIcon,
  },
  {
    title: "Contact",
    url: "/contact",
    idx: 4,
    icon: ContactIcon,
  },
];

export default menuConfig;
