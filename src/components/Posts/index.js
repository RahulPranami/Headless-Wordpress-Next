import { client } from "@/lib/apollo";
import { getEndCursor, getPosts } from "@/lib/queries";
import PageNavigation from "./PageNavigation";
import Post from "./Post";
import { Skeleton } from "../ui/skeleton";

export default async function Posts({ pageNo = 1 }) {
  const page = parseInt(pageNo);
  const postsPerPage = parseInt(process.env.POSTS_PER_PAGE);
  const postsCount = parseInt(
    pageNo !== 1 ? pageNo * postsPerPage : postsPerPage
  );
  let endCursor = "";

  if (1 !== pageNo) {
    const {
      data: { posts },
      loading: cursorLoading,
    } = await client.query({
      query: getEndCursor,
      variables: {
        first: postsCount,
      },
    });

    if (cursorLoading) {
      return <Skeleton />;
    }

    endCursor = posts.pageInfo.endCursor;
  }

  const {
    data: {
      posts: {
        edges,
        pageInfo: { hasNextPage, hasPreviousPage },
      },
    },
    loading: postsLoading,
  } = await client.query({
    query: getPosts,
    variables: {
      after: endCursor,
      first: parseInt(postsPerPage),
    },
  });

  if (postsLoading) {
    return <Skeleton />;
  }

  return (
    <>
      <div className="mb-32 grid text-center w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {edges.map((post) => {
          return <Post key={post.node.id} post={post.node} />;
        })}
      </div>
      <PageNavigation
        page={page}
        hasNext={hasNextPage}
        hasPrev={hasPreviousPage}
      />
    </>
  );
}
