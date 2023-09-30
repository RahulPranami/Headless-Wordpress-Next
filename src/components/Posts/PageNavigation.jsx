export default function PageNavigation({ page, hasNext, hasPrev }) {
  hasPrev = page <= 1 ? false : hasPrev;

  return (
    <div className="w-full px-4 pt-10">
      {hasPrev && (
        <a
          href={`/blog/page/${page - 1}`}
          className="float-left group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <p className="mb-3 text-2xl font-semibold">
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
            {"   "}
            Previous Page
          </p>
        </a>
      )}

      {hasNext && (
        <a
          href={`/blog/page/${page + 1}`}
          className="float-right group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <p className="mb-3 text-2xl font-semibold">
            Next Page
            {"   "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </p>
        </a>
      )}
    </div>
  );
}
