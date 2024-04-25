
import { Roboto } from 'next/font/google'
import PageLayout from "@/components/PageLayout";
// import { useRef } from "react";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  // const ref = useRef(null)
  return (
    <main className={`flex min-h-screen flex-col w-full items-center justify-between${roboto.className}`}>
    <PageLayout />
    </main>
  );
}