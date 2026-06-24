import prisma from "./lib/prisma";
import SiteShell from "./components/site-shell";

async function deletePost(formData: FormData) {
  "use server";

  const id = formData.get("id")?.toString();
  if (!id) return;

  await prisma.post.delete({
    where: { id },
  });
}

export default async function Home() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { id: "desc" },
  });

  return (
    <SiteShell
      title="Published Posts"
      description="Browse published posts, or add drafts and publish them later."
    >
      <section className="space-y-4 rounded-4xl bg-white p-6 shadow-sm shadow-zinc-200">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-zinc-200 bg-zinc-50 p-12 text-center text-zinc-500">
            No published posts found.
          </div>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <article key={post.id} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                <h2 className="text-xl font-semibold text-zinc-950">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {post.content ? post.content.slice(0, 220) : "No content yet."}
                </p>
                <form action={deletePost} className="mt-6">
                  <input type="hidden" name="id" value={post.id} />
                  <button
                    type="submit"
                    className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-100"
                  >
                    Delete
                  </button>
                </form>
              </article>
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}
