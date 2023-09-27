import Image from "next/image";
import { client } from "@/lib/apollo";
import { getPosts } from "@/lib/queries";
import Posts from "@/components/Posts";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Posts />
    </main>
  );
}
