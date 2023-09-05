import { POST_PATH, postPaths } from "@/utils/mdx";
import { readFileSync } from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import path from "path";

interface PageProps {
  posts: {
    content: string;
    data: {
      title: string;
      description: string;
      date: string;
      author: {
        name: string;
        avatar: string;
      };
      tags: string[];
    };
    filePath: string;
  }[];
}

const BlogPosts: NextPage<PageProps> = ({ posts }) => {
  return (
    <main className="px-8 md:px-[17vw]">
      <h1 className="mt-36 text-4xl font-semibold text-white">
        <span className="text-brand-red-100 drop-shadow-red-glow">Would</span>{" "}
        <span className="text-brand-blue-100 drop-shadow-blue-glow">You</span>{" "}
        Blog
      </h1>

      <div className="mt-8 flex flex-col gap-4">
        {posts.length === 0 && (
          <p className="text-lg text-neutral-300">
            There are no blog posts yet.
          </p>
        )}
        {posts.map((post) => (
          <Link
            href={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
            key={post.filePath}
            className="rounded-lg bg-neutral-800 p-4 text-neutral-300 transition-all duration-300 hover:bg-neutral-700"
          >
            <div className="flex items-start gap-4">
              <Image
                src={post.data.author.avatar}
                alt={post.data.author.name}
                width={50}
                height={50}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="mb-1 text-xl font-semibold text-white">
                    {post.data.title}
                  </h4>
                  {post.data.tags.map((tag) => (
                    <p
                      key={tag}
                      className="rounded-full border border-neutral-500 px-2 py-1 text-xs text-neutral-300"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <p className="mb-2 text-sm text-neutral-400">
                  {post.data.date}
                </p>
                <p className="text-sm">{post.data.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogPosts;

export function getStaticProps() {
  const posts = postPaths.map((filePath) => {
    const source = readFileSync(path.join(POST_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
