import { client } from "@/lib/apollo";
import { getEndCursor, getPost } from "@/lib/queries";
import { Lobster } from "next/font/google";
// import PageNavigation from "./PageNavigation";
// import { Skeleton } from "../ui/skeleton";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default async function Post({ uri }) {
  const slug = Array.isArray(uri) ? "/" + uri.join("/") : uri;

  const {
    data: { post },
    loading: postLoading,
  } = await client.query({
    query: getPost,
    variables: {
      id: slug,
    },
  });

  return (
    <>
      <div className="flex flex-col items-center justify-between px-24">
        <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <h1 className={`text-3xl text-center pb-10 ${lobster.className}`}>
            {post.title}
          </h1>

          <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
        </div>
      </div>
    </>
  );
}
