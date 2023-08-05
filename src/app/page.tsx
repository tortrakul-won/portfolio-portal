"use client";

import LinkText from "@/components/LinkText";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/css/Animation.module.css";

export default function Home() {
  const [aspectText, setAspectText] = useState("");
  const [aspectColor, setAspectColor] = useState("");

  return (
    <main className="flex w-[100dvw] h-[100dvh] items-start p-24 gap-8">
      <section id="left-pane" className="w-1/2">
        <div className="[&>*]:my-2">
          <span className="text-2xl">Hello, my name is</span>
          <h1 className="text-6xl">Tortrakul Wonglieng</h1>
          <span className="text-2xl flex gap-1 justify-start">
            <span className="whitespace-pre">{"I am a "}</span>
            <span className="border-b-2 mb-[-2px] border-black flex-grow">
              <u
                className={`${styles["typing-anim"]} no-underline`}
                style={{ color: aspectColor, animationPlayState: aspectText === "" ? "paused" : "running" }}
              >
                {aspectText}
              </u>
            </span>
          </span>
        </div>
        <div className="[&>*]:my-3">
          <LinkText textColor="#E48586">
            <Link
              onMouseEnter={() => {
                setAspectText("fullstack software engineer");
                setAspectColor("#E48586");
              }}
              onMouseLeave={() => setAspectText("")}
              target="_blank"
              href={"/online-portfolio"}
            >
              Fullstack Software Engineer
            </Link>
          </LinkText>
          <LinkText textColor="#FAC484">
            <Link
              onMouseEnter={() => {
                setAspectText("photographer");
                setAspectColor("#FAC484");
              }}
              onMouseLeave={() => setAspectText("")}
              target="_blank"
              href={"https://www.instagram.com/socialized.film/"}
            >
              Photographer
            </Link>
          </LinkText>
          <LinkText textColor="#749BC2">
            <Link
              onMouseEnter={() => {
                setAspectText("lonely person");
                setAspectColor("#749BC2");
              }}
              onMouseLeave={() => setAspectText("")}
              target="_blank"
              href={"https://www.instagram.com/trtrkl/"}
            >
              Lonely Person
            </Link>
          </LinkText>
        </div>
      </section>
      <section id="right-pane" className="flex flex-grow w-1/2 h-full justify-center content-center">
        {/* <img className={styles.path} src="/svg/monitor2.svg" alt="Kiwi standing on oval" /> */}
      </section>
    </main>
  );
}
