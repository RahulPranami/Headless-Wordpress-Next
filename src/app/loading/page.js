import Image from "next/image";
import { Inter, Cookie } from "next/font/google";
import { client } from "@/lib/apollo";
import { getPosts } from "@/lib/queries";

const cookie = Cookie({ subsets: ["latin"], weight: "400" });

export default async function Home() {
  return (
    <>
      {/* <LoadingComponent1 /> */}
      {/* <LoadingComponent2 /> */}
      <LoadingComponent3 />
    </>
  );
}

export function LoadingComponent3() {
  return (
    <div
      className={`${cookie.className} flex min-h-screen items-center justify-center text-5xl tracking-widest`}
    >
      <span className="delay-0 duration-1000 animate-bounce"> L </span>
      <span className="delay-75 duration-1000 animate-bounce"> O </span>
      <span className="delay-100 duration-1000 animate-bounce"> A </span>
      <span className="delay-150 duration-1000 animate-bounce"> D </span>
      <span className="delay-200 duration-1000 animate-bounce"> I </span>
      <span className="delay-300 duration-1000 animate-bounce"> N </span>
      <span className="delay-500 duration-1000 animate-bounce"> G </span>
      <span className="delay-0 duration-1000 animate-bounce"> . </span>
      <span className="delay-75 duration-1000 animate-bounce"> . </span>
      <span className="delay-150 duration-1000 animate-bounce"> . </span>
    </div>
  );
}

export function LoadingComponent2() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex">
        <Image
          className="invert delay-0 duration-1000 animate-bounce"
          src={`/letters/ios/l-50.png`}
          width={50}
          height={50}
        />
        <Image
          className="invert delay-75 duration-1000 animate-bounce"
          src={`/letters/ios/o-50.png`}
          width={50}
          height={50}
        />
        <Image
          className="invert delay-100 duration-1000 animate-bounce"
          src={`/letters/ios/a-50.png`}
          width={50}
          height={50}
        />
        <Image
          className="invert delay-150 duration-1000 animate-bounce"
          src={`/letters/ios/d-50.png`}
          width={50}
          height={50}
        />
        <Image
          className="invert delay-200 duration-1000 animate-bounce"
          src={`/letters/ios/i-50.png`}
          width={50}
          height={50}
        />
        <Image
          className="invert delay-200 duration-1000 animate-bounce"
          src={`/letters/ios/n-50.png`}
          width={50}
          height={50}
        />
        <Image
          className="invert delay-200 duration-1000 animate-bounce"
          src={`/letters/ios/g-50.png`}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}

export function LoadingComponent1() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex h-16 mb-12">
        <Image
          className="delay-0 duration-1000 animate-bounce"
          src={`/letters/r.png`}
          width={64}
          height={64}
        />
        <Image
          className="delay-75 duration-1000 animate-bounce"
          src={`/letters/a.png`}
          width={64}
          height={64}
        />
        <Image
          className="delay-100 duration-1000 animate-bounce"
          src={`/letters/h.png`}
          width={64}
          height={64}
        />
        <Image
          className="delay-150 duration-1000 animate-bounce"
          src={`/letters/u.png`}
          width={64}
          height={64}
        />
        <Image
          className="delay-200 duration-1000 animate-bounce"
          src={`/letters/l.png`}
          width={64}
          height={64}
        />
      </div>
      <div className="flex h-16">
        <Image
          className="delay-0 duration-1000 animate-bounce"
          src={`/letters/p.png`}
          width={64}
          height={64}
        />
        <Image
          className="delay-75 duration-1000 animate-bounce"
          src={`/letters/r.png`}
          width={64}
          height={64}
        />
        <Image
          className="delay-100 duration-1000 animate-bounce"
          src={`/letters/a.png`}
          width={64}
          height={64}
        />
        <Image
          className="delay-150 duration-1000 animate-bounce"
          src={`/letters/n.png`}
          width={64}
          height={64}
        />
        <Image
          className="delay-200 duration-1000 animate-bounce"
          src={`/letters/a.png`}
          width={64}
          height={64}
        />
        <Image
          className="delay-300 duration-1000 animate-bounce"
          src={`/letters/m.png`}
          width={64}
          height={64}
        />
        <Image
          className="delay-500 duration-1000 animate-bounce"
          src={`/letters/i.png`}
          width={64}
          height={64}
        />
      </div>
    </div>
  );
}
