/**
 * JsonLd · injects a schema.org JSON-LD block. Accepts a single object or an
 * array (a `@graph` split into individual scripts).
 *
 * Use in server components so schema renders in the static HTML at build time.
 */

type Json =
  | string
  | number
  | boolean
  | null
  | Json[]
  | { [k: string]: Json };

export function JsonLd({ data }: { data: Json | Json[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(block).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
