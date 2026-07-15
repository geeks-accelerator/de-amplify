"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export default function ProposalContent({ markdown }: { markdown: string }) {
  return (
    <article
      className="
        prose prose-invert max-w-none
        prose-headings:font-mono prose-headings:tracking-tight prose-headings:scroll-mt-24
        prose-h1:text-2xl sm:prose-h1:text-3xl prose-h1:text-bone prose-h1:mb-3 prose-h1:mt-0 prose-h1:leading-tight
        prose-h3:text-signal/90 prose-h3:text-sm prose-h3:font-normal prose-h3:tracking-wide prose-h3:mt-1 prose-h3:mb-6
        prose-h2:text-lg prose-h2:text-bone prose-h2:mt-14 prose-h2:mb-4 prose-h2:border-t prose-h2:border-white/[0.06] prose-h2:pt-9
        prose-p:font-sans prose-p:text-[15px] prose-p:leading-[1.75] prose-p:text-bone/[0.62]
        prose-strong:text-bone/90 prose-strong:font-semibold
        prose-a:text-signal prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4
        prose-blockquote:border-l-2 prose-blockquote:border-brake/50 prose-blockquote:bg-white/[0.02] prose-blockquote:rounded-r-md prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:not-italic prose-blockquote:text-bone/70 prose-blockquote:text-[15px]
        prose-code:font-mono prose-code:text-signal prose-code:bg-signal/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[13px] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
        prose-em:text-bone/70 prose-em:italic
        prose-li:font-sans prose-li:text-[15px] prose-li:text-bone/[0.62] prose-li:leading-[1.7] prose-li:marker:text-brake/40
        prose-hr:border-white/[0.06]
        prose-table:text-[13px]
        prose-thead:border-white/10
        prose-th:font-mono prose-th:text-bone/50 prose-th:text-[11px] prose-th:uppercase prose-th:tracking-wider prose-th:font-normal prose-th:text-left prose-th:px-3 prose-th:py-2
        prose-td:text-bone/[0.6] prose-td:border-white/[0.06] prose-td:px-3 prose-td:py-2.5 prose-td:align-top
      "
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
