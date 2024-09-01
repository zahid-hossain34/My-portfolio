import BackButton from "@/components/ui/back-button";
import { posts } from "@/config";
import { constructOgImageUri, getUrl } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: {
      name: post.author?.name,
      url: post.author?.twitter,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${getUrl()}/blog/${post.slug}`,
      images: [
        {
          url: constructOgImageUri(
            post.description ? post.description : post.title,
            post.title,
            post.tags,
            post.slug,
          ),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        constructOgImageUri(
          post.description || post.title,
          post.title,
          post.tags,
          post.slug,
        ),
      ],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slug.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex max-w-7xl flex-col md:flex-row">
      <div className="mx-auto mb-5 flex-none md:mb-0">
        <BackButton />
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="relative mx-auto max-w-3xl border-b border-l border-dashed border-slate-500/50 px-6 py-4 md:border-y">
          <div className="absolute -top-1.5 left-0 h-2 w-full bg-gradient-to-r from-white from-20% via-white/5 to-white to-80% dark:from-slate-800 dark:from-20% dark:via-slate-800/5 dark:to-slate-800 dark:to-80%"></div>
          <div className="absolute -bottom-1.5 left-0 h-2 w-full bg-gradient-to-r from-white/10 via-white/5 to-white to-90% dark:from-slate-800/10 dark:via-slate-800/5 dark:to-slate-800 dark:to-90%"></div>
          <div className="absolute -left-1.5 bottom-0 h-full w-2 bg-gradient-to-t from-white/10 via-white/5 to-white dark:from-slate-800/10 dark:via-slate-800/5 dark:to-slate-800"></div>
          <h1 className="mx-auto font-calsans text-3xl tracking-tight text-slate-900 dark:text-slate-100">
            {post.title}
          </h1>
        </div>
        <div className="relative mx-auto max-w-3xl border-l border-dashed border-slate-500/50 px-6 py-2">
          <div className="absolute -left-1.5 bottom-0 h-full w-2 bg-gradient-to-b from-white/10 from-20% via-white/5 via-50% to-white to-80% dark:from-slate-800/10 dark:via-slate-800/5 dark:to-slate-800 dark:to-80%"></div>
          <span className="mb-4 block text-lg leading-8 text-slate-600 dark:text-slate-500">
            {post.description}
          </span>
          <div className="ring-photo shadow-photo lg:aspect-square relative mx-auto mt-4 flex aspect-[16/9] rounded-2xl text-center shadow-md ring-1 sm:aspect-[2/1] lg:max-w-3xl">
            <Image
              src={post.imageUrl}
              alt={post.imageDescription}
              fill={true}
              priority={true}
              className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <figcaption className="my-4 text-sm text-slate-400 dark:text-slate-500 sm:mb-6">
            {post.imageDescription}
          </figcaption>
        </div>
        <div className="prose relative mx-auto max-w-3xl border-slate-500/50 px-6 md:prose-lg lg:prose-xl">
          {post.content}
        </div>
      </div>
    </div>
  );
}
