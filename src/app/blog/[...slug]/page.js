import Image from "next/image";
import { client } from "@/lib/apollo";
import { getPosts } from "@/lib/queries";
import Post from "@/components/Post";
import { redirect } from "next/navigation";

export default function Page({ params }) {
  //   if (params.id <= 1) {
  //     redirect("/blog");
  //   }
  console.log(params.slug);
  return (
    <main className="p-24">
      <Post uri={params.slug} />
    </main>
  );
}
