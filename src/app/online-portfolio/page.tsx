import Experiences from "./_components/Experiences";
import NotableProjects from "./_components/NotableProjects";
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
        <span className=" flex justify-center flex-col gap-1 lg:flex-row items-start lg:items-center lg:text-base text-xs">
          <span>Bangkok, Thailand</span>
          <span>
            {" "}
            <span className="inline-block ml-2">
              <b>Tel.</b>{" "}
              <a className="underline" href="tel:+66907126833">
                +66 90 712 6833
              </a>{" "}
            </span>
            <span className="inline-block ml-2">
              <b>E-mail</b> :{" "}
              <a className="underline" href="mailto:tortrakulwonglieng@gmail.com">
                tortrakulwonglieng@gmail.com
              </a>
            </span>
            <span className="inline-block ml-2">
              <b>LinkedIn</b> :{" "}
              <a className="underline" href="https://www.linkedin.com/in/tortrakul-wonglieng-b2a37a204/" target="_blank">
                tortrakul-wonglieng
              </a>
            </span>
          </span>
        </span>
        <span className="text-center text-xs lg:text-base">
          Full-stack engineer, 5+ yrs. C#/.NET-first, full SDLC ownership, insurance/fintech domain background. Open to roles with international teams.
        </span>
        <Experiences />
        <NotableProjects />
        <TechnicalSkills />
        <Skills />
      </section>
    </main>
  );
}
