import { metaConfig, posts } from "@/config";
import {
  constructOgImageUri,
  formatDate,
  getUrl,
  shimmer,
  toBase64,
} from "@/lib/utils";
import {
  CalendarDaysIcon as DateIcon,
  ClockIcon as TimeIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";

export const metadata: Metadata = {
  title: "Blog",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${getUrl()}/blog`,
    title: metaConfig.title,
    description: metaConfig.description,
    siteName: metaConfig.title,
    images: [
      {
        url: constructOgImageUri(
          metaConfig.ogTitle,
          "Blog",
          metaConfig.tags,
          "/blog",
        ),
        width: 1200,
        height: 630,
        alt: metaConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaConfig.ogTitle,
    description: metaConfig.description,
    images: [
      constructOgImageUri(metaConfig.ogTitle, "Blog", metaConfig.tags, "/blog"),
    ],
    creator: metaConfig.author.twitterAddress,
  },
};

const BlogPage = async () => {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="relative mx-auto max-w-4xl px-6">
          <span className="mb-4 block text-balance text-center text-lg leading-8 text-slate-600 dark:text-slate-500"></span>
          <div className="">
            {posts.map((post) => (
              <div
                key={v4()}
                className="relative w-full rounded-2xl bg-white/20 p-2.5 shadow-sm shadow-black/5 ring-[0.8px] ring-black/5 dark:bg-white/5 dark:shadow-white/5 dark:ring-white/10"
              >
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 opacity-[0.15] blur-lg dark:from-sky-500 dark:to-sky-600"></div>
                <div className="relative max-w-full rounded-[0.62rem] bg-white shadow-sm  shadow-black/5 ring-[0.8px] ring-black/5 hover:bg-gray-50 dark:bg-slate-800 dark:shadow-white/5 dark:ring-white/10 dark:hover:bg-slate-900/50">
                  <div className="group mx-auto p-5">
                    <Link
                      href={`blog/${post.slug}`}
                      className="relative isolate flex flex-col gap-8 lg:flex-row"
                    >
                      <div className="lg:aspect-square relative aspect-[16/9] sm:aspect-[2/1] lg:w-64 lg:shrink-0">
                        <Image
                          src={post.imageUrl}
                          alt={post.imageDescription}
                          fill={true}
                          priority={true}
                          placeholder="blur"
                          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(256, 256),
                          )}`}
                        />
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                      <div>
                        <div className="group relative max-w-xl">
                          <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-slate-400">
                            {post.title}
                          </h3>
                          <p className="mt-5 text-sm leading-6 text-slate-600">
                            {post.description}
                          </p>
                        </div>
                        <div className="mt-6 flex border-t border-black/5 pt-6 dark:border-white/10">
                          <div className="flex items-center text-sm leading-6 text-slate-500">
                            <DateIcon className="h-5 w-5 text-slate-500" />
                            <span className="ml-1.5">
                              {formatDate(post.date)}
                            </span>
                          </div>
                          <div className="ml-1.5 flex items-center text-sm leading-6 text-slate-500">
                            <TimeIcon className="h-5 w-5 text-slate-500" />
                            <span className="ml-1.5">
                              {post.readingTime} min read
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
