import Experiences from "./_components/Experiences";
import NotableProjects from "./_components/NotableProjects";
import Profile from "./_components/Profile";
import Skills from "./_components/Skills";
import TechnicalSkills from "./_components/TechnicalSkills";
import styles from "@/css/Animation.module.css";
import Head from "next/head";

export const metadata = {
  title: "trtrkl's online portfolio",
};

export default function OnlinePortfolio() {
  return (
    <main className="flex justify-center py-4 font-light">
      <div className={`invisible lg:visible fixed h-full w-[1px] bg-charcoal bottom-0 left-[10vw] ${styles["left-slide-anim"]}`}></div>
      <div className={`invisible lg:visible fixed h-full w-[1px] bg-charcoal bottom-0 right-[10vw] ${styles["right-slide-anim"]}`}></div>
      <section id="header" className="flex justify-center flex-col items-center [&>*]:mb-2 w-[90vw] lg:w-[70vw] text-xs lg:text-base">
        <h1 className="text-5xl lg:text-6xl font-serif text-center">Tortrakul Wonglieng</h1>
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 lg:text-base text-xs">
          <span>Bangkok, Thailand</span>
          <span><b>Tel.</b> <a className="underline" href="tel:+66907126833">+66 90 712 6833</a></span>
          <span><b>E-mail</b>: <a className="underline" href="mailto:tortrakulwonglieng@gmail.com">tortrakulwonglieng@gmail.com</a></span>
          <span>
            <a
              className="underline inline-flex items-center gap-1"
              href="https://www.linkedin.com/in/tortrakul-wonglieng-b2a37a204/"
              target="_blank"
            >
              <img className="inline h-4" src="/svg/linkedin.svg" alt="LinkedIn" /> LinkedIn
            </a>
          </span>
        </div>
        <Profile />
        <Experiences />
        <NotableProjects />
        <TechnicalSkills />
        <Skills />
      </section>
    </main>
  );
}
