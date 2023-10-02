import Image from "next/image";
import { client } from "@/lib/apollo";
import { getPosts } from "@/lib/queries";

export default async function Home() {
  return (
    <div className="font-sedgwick flex min-h-screen items-center justify-center text-5xl tracking-widest">
      <span className="delay-0 duration-1000 animate-bounce"> L </span>
      <span className="delay-75 duration-1000 animate-bounce"> O </span>
      <span className="delay-100 duration-1000 animate-bounce"> A </span>
      <span className="delay-150 duration-1000 animate-bounce"> D </span>
      <span className="delay-200 duration-1000 animate-bounce"> I </span>
      <span className="delay-300 duration-1000 animate-bounce"> N </span>
      <span className="delay-500 duration-1000 animate-bounce"> G </span>
      <span className="delay-0 duration-700 animate-bounce"> . </span>
      <span className="delay-75 duration-700 animate-bounce"> . </span>
      <span className="delay-150 duration-700 animate-bounce"> . </span>
    </div>
  );
}
