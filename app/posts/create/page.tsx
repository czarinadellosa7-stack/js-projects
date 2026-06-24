import { redirect } from "next/navigation";
import prisma from "../../lib/prisma";
import SiteShell from "../../components/site-shell";

async function createPost(formData: FormData) {
  "use server";

  const title = formData.get("title")?.toString().trim();
  const content = formData.get("content")?.toString().trim();

  if (!title) {
    return;
  }

  await prisma.post.create({
    data: {
      title,
      content,
      published: false,
    },
  });

  redirect("/drafts");
}

export default function CreatePostPage() {
  return (
    <SiteShell
      title="Create Post"
      description="Add a new post draft to publish later."
    >
      <section className="rounded-4xl bg-white p-6 shadow-sm shadow-zinc-200">
        <form action={createPost} className="space-y-6">
          <label className="block space-y-3">
            <span className="text-sm font-medium text-zinc-900">Title</span>
            <input
              type="text"
              name="title"
              placeholder="Working with Databases in Next.js Using Prisma"
              className="w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-zinc-400"
              required
            />
          </label>

          <label className="block space-y-3">
            <span className="text-sm font-medium text-zinc-900">Content</span>
            <textarea
              name="content"
              rows={12}
              placeholder="Next.js is a database-agnostic web-based framework..."
              className="min-h-56 w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm leading-6 text-zinc-900 outline-none transition focus:border-zinc-400"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Add Post
          </button>
        </form>
      </section>
    </SiteShell>
  );
}
