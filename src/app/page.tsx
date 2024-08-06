import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <section className="px-12 h-full flex-col items-center justify-between w-full ">
        <Header />
        <HeroSection />
        <div className="grid md:grid-cols-[70%_1fr] gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Top Questions</h2>
            <LatestQuestions />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Top Contributors</h2>
            <TopContributers />
          </div>
        </div>

        <NeonGradientCard className="items-center !h-full justify-center text-center w-full mt-14">
          <div className="pointer-events-none !h-full z-10 whitespace-pre-wrap bg-gradient-to-br from-[rgb(255,41,117)] from-35% to-[#00FFF1] bg-clip-text   leading-none tracking-tighter text-transparent text-6xl font-bold dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]  w-full ">
            Join Now
          </div>
          <p className="md:max-w-xl text-[.9rem] leading-6 mx-auto !font-normal text-white">
            &quate;Sign up&quate; to become a part of our dynamic community.
            Gain access to a vast pool of knowledge, connect with experts, and
            share your insights. Whether you&apos;re here to ask questions or
            provide answers, joining us will enhance your learning experience
            and help you stay updated with the latest discussions. Join now and
            start making meaningful contributions today!
          </p>
        </NeonGradientCard>
      </section>
      <Footer />
    </main>
  );
}
