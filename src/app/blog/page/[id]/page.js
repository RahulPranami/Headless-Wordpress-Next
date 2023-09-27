import Image from "next/image";
import { client } from "@/lib/apollo";
import { getPosts } from "@/lib/queries";
import Posts from "@/components/Posts";
import { redirect } from "next/navigation";

export default function Page({ params }) {
  if (params.id <= 1) {
    redirect("/blog");
  }
  return (
    <main className="p-24">
      <Posts pageNo={params.id} />
    </main>
  );
}
