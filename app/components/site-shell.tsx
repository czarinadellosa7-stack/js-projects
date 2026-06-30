import Link from "next/link";
import type { ReactNode } from "react";

type SiteShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function SiteShell({ title, description, children }: SiteShellProps) {
  return (
    <div className="min-h-screen p-6 sm:p-10">
      <div className="mx-auto max-w-5xl space-y-8 rounded-[2rem] border border-purple-200/60 bg-purple-50/85 p-6 shadow-2xl shadow-violet-950/10 backdrop-blur-xl sm:p-10">
          <header className="flex flex-col gap-4 rounded-[1.75rem] border border-white/70 bg-white/95 px-6 py-6 shadow-lg shadow-violet-100 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">Posts App</p>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">{title}</h1>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
          </div>

          <nav className="grid w-full grid-cols-1 gap-3 text-sm font-medium sm:w-auto sm:grid-cols-3">
            <Link
              href="/"
              className="rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-purple-700 transition hover:bg-purple-50"
            >
              Posts
            </Link>
            <Link
              href="/drafts"
              className="rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-purple-700 transition hover:bg-purple-50"
            >
              Drafts
            </Link>
            <Link
              href="/posts/create"
              className="rounded-full border border-purple-200 bg-white px-4 py-2 text-center text-purple-700 transition hover:bg-purple-50"
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
