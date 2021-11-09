/* eslint-disable @next/next/no-html-link-for-pages */
export default function Alert({ preview }) {
  return (
    <div className="text-center mb-1">
      {preview ? (
        <>
          Preview Mode{" "}
          <a
            href="/api/exit-preview"
            className="underline hover:text-sky-500 duration-200 transition-colors"
          >
            On
          </a>
        </>
      ) : (
        <>
          Preview Mode{" "}
          <a
            href={`/api/preview?secret=${process.env.GRAPHQL_API_TOKEN}`}
            className="underline hover:text-sky-500 duration-200 transition-colors"
          >
            Off
          </a>
        </>
      )}
    </div>
  );
}
