import styles from "@/css/Animation.module.css";

export default function MoviePoster() {
  return (
    <main className={`w-[100dvw] h-[100dvh] ${styles["hcts-background-anim"]}`}>
      <div className="fixed bottom-16 md:bottom-4 right-1 flex-col ">
        <div id="sun-container" className="w-full h-fit overflow-hidden flex justify-end items-end">
          <div className={`w-[max(270px,30vw)] aspect-[2/1] bg-[#E18E59] rounded-tl-full rounded-tr-full ${styles["sun-up-anim"]} `}></div>
        </div>
        <div className="w-full h-fit overflow-hidden flex justify-end items-end">
          <div
            className={`font-black text-[max(3.8rem,8.5vw)] tracking-tight leading-none text-[#252522] text-right ${styles["text-fade-in-anim"]} `}
          >
            here comes
          </div>
        </div>
        <div className="w-full h-fit overflow-hidden flex justify-end items-end">
          <div
            className={`font-black text-[max(6.4rem,14.5vw)] tracking-tight leading-[0.7] text-[#252522] text-right  ${styles["text-fade-in-anim"]}`}
          >
            the&nbsp;&nbsp;sun
          </div>
        </div>
      </div>
    </main>
  );
}
