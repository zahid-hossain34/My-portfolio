import { PostType } from "@/types";

const posts: PostType[] = [
  {
    id: "1",
    title: "Deploying Next.js Apps",
    description: "How to deploy your Next.js apps on Vercel.",
    imageUrl: "/images/blogs/blog-post-1.jpg",
    imageDescription: "This is a caption of image",
    date: "2023-01-02",
    category: "Next.js",
    slug: "deploying-nextjs-apps",
    readingTime: 4,
    author: {
      name: "Tim",
      image: "/images/authors/tim.jpg",
      twitter: "@timtbdev",
    },
    tags: ["Next.js", "Tailwind Css", "TypeScript"],
    content: "This is a content of the blog post.",
  },
];

export default posts;
