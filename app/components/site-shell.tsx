import Link from "next/link";
import type { ReactNode } from "react";

type SiteShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function SiteShell({ title, description, children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-zinc-100 p-6 sm:p-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="flex flex-col gap-4 rounded-4xl border border-zinc-200 bg-white px-6 py-6 shadow-sm shadow-zinc-200 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Posts App</p>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">{title}</h1>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm font-medium">
            <Link
              href="/"
              className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-zinc-700 transition hover:bg-white hover:text-zinc-950"
            >
              Posts
            </Link>
            <Link
              href="/drafts"
              className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-zinc-700 transition hover:bg-white hover:text-zinc-950"
            >
              Drafts
            </Link>
            <Link
              href="/posts/create"
              className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-zinc-700 transition hover:bg-white hover:text-zinc-950"
            >
              Add Post
            </Link>
          </nav>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}
