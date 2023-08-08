"use client";

import { useEffect, useState } from "react";
import Experiences from "./_components/Experiences";
import NotableProjects from "./_components/NotableProjects";
import Skills from "./_components/Skills";
import TechnicalSkills from "./_components/TechnicalSkills";
import styles from "@/css/Animation.module.css";

export default function OnlinePortfolio() {
  return (
    <main className="flex justify-center py-4 font-light">
      <div className={`invisible lg:visible fixed h-full w-[1px] bg-charcoal bottom-0 left-[10vw] ${styles["left-slide-anim"]}`}></div>
      <div className={`invisible lg:visible fixed h-full w-[1px] bg-charcoal bottom-0 right-[10vw] ${styles["right-slide-anim"]}`}></div>
      <section id="header" className="flex justify-center flex-col items-center [&>*]:my-2  w-[70vw]">
        <h1 className="text-6xl font-serif">Tortrakul Wonglieng</h1>
        <span className=" sm:flex justify-center flex-col items-center xl:flex-row">
          88/8 , 88, 985 Ratchadaphisek Rd, Dao Khanong, Thon Buri, Bangkok 10600 Tel. +66 90 712 6833 E-mail : tortrakulwonglieng@gmail.com
        </span>
        <Experiences />
        <NotableProjects />
        <TechnicalSkills />
        <Skills />
      </section>
    </main>
  );
}
