import HL from "../_shared-components/HL";
import SectionHeader from "../_shared-components/SectionHeader";

export default function NotableProjects() {
  return (
    <>
      <SectionHeader>Notable Projects</SectionHeader>
      <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
        <span className="w-2/3">
          Open Education Platform, Saturday School <span className="text-xs ml-1">{"( appointed by BMA. )"}</span>
        </span>
        <span className="w-1/3 text-[12px] lg:text-lg text-end">Jun 2023 - Aug 2023</span>
      </h3>
      <ul className="list-disc list-inside [&>*]:my-1">
        <li>
          Developed front-end and back-end components for the Open Education Platform, matching schools and volunteers who interested in teaching
          after school subjects and non-conventional subjects.
        </li>
        <li>
          Utilized technologies such as <HL>React</HL>, MUI, React-Router-DOM (Frontend) and NestJS, <HL>Prisma</HL> (Backend).
        </li>
        <li>
          Overcame challenges of coordinating volunteer schedules by quickly adapting to predetermined technologies and collaborating with current
          volunteers to find optimal solutions.
        </li>
      </ul>
      <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
        <span className="w-2/3">
          <a target="_blank" href="https://socialized-film.pages.dev/">
            <span className="underline">Socialized.Film Website</span>
            <sup className="ml-1">
              <img className="inline h-4" src="/svg/external-link.svg" alt="external link icon"></img>
            </sup>
          </a>
          , Personal Project
        </span>
        <span className="w-1/3 text-[12px] lg:text-lg text-end">Nov 2024 - Present</span>
      </h3>
      <ul className="list-disc list-inside [&>*]:my-1">
        <li>
          Independently developed a personal photography portfolio using <HL>Astro</HL> framework to showcase film photography in its original aspect
          ratios and full detail
        </li>
        <li>
          Engineered a responsive solution that preserves the integrity of photographs across all screen sizes, solving the common problem of image
          cropping on standard platforms
        </li>
        <li>
          Built and deployed the complete project solo on <HL>Cloudflare Pages</HL>—from initial concept to final implementation—demonstrating
          self-directed learning and technical problem-solving skills
        </li>
      </ul>
      <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
        <span className="w-2/3">
          <a target="_blank" href="https://life-countdown-th.pages.dev/">
            <span className="underline">Life Countdown Widget</span>
            <sup className="ml-1">
              <img className="inline h-4" src="/svg/external-link.svg" alt="external link icon"></img>
            </sup>
          </a>
          , Personal Project
        </span>
        <span className="w-1/3 text-[12px] lg:text-lg text-end">Dec 2024 - Present</span>
      </h3>
      <ul className="list-disc list-inside [&>*]:my-1">
        <li>
          Designed and developed an embeddable web component that visually represents {"users'"} remaining lifetime based on birth date and expected
          lifespan inputs
        </li>
        <li>
          Built with <HL>SvelteKit</HL> and <HL>Tailwind</HL> to create a <HL>responsive widget</HL> that dynamically adjusts block size and time
          representation based on screen dimensions, ensuring optimal display across all devices
        </li>
        <li>
          Independently handled complete development cycle and deployed on Cloudflare Pages, creating a performant tool that balances thoughtful user
          experience with existential reflection
        </li>
      </ul>
    </>
  );
}
