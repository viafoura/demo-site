/* eslint-disable @next/next/no-html-link-for-pages */
export default function Alert({ preview }) {
  return (
    <div className="mb-1 text-center">
      {preview ? (
        <>
          Preview Mode{" "}
          <a
            href="/api/exit-preview"
            className="underline transition-colors duration-200 hover:text-sky-500"
          >
            On
          </a>
        </>
      ) : (
        <>
          Preview Mode{" "}
          <a
            href={`/api/preview?secret=${process.env.GRAPHQL_API_TOKEN}`}
            className="underline transition-colors duration-200 hover:text-sky-500"
          >
            Off
          </a>
        </>
      )}
    </div>
  );
}
