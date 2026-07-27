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
      <p>
        Built front-end and back-end for a platform matching schools with volunteers teaching after-school subjects — <HL>React</HL>, MUI,
        React-Router-DOM and NestJS, <HL>Prisma</HL> — adapting quickly to a predetermined stack while coordinating volunteer scheduling.
      </p>
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
      <p>
        Independently built and deployed a personal photography portfolio on <HL>Astro</HL> and <HL>Cloudflare Pages</HL>, preserving original aspect
        ratios and full detail across all screen sizes.
      </p>
      <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
        <span className="w-2/3">
          <a target="_blank" href="https://github.com/tortrakul-won/rentspace-backend">
            <span className="underline">RentSpace</span>
            <sup className="ml-1">
              <img className="inline h-4" src="/svg/external-link.svg" alt="external link icon"></img>
            </sup>
          </a>
          , Personal Project
        </span>
        <span className="w-1/3 text-[12px] lg:text-lg text-end">May 2026 - Jun 2026</span>
      </h3>
      <p>
        Full-stack short-term space-rental marketplace for Thailand — <HL>Go</HL> (chi, sqlc, pgx) REST API and <HL>Vue 3</HL>/TypeScript frontend,
        entirely built through <HL>Claude Code</HL> with no manual coding. Modeled owner/renter roles, a booking state machine, R2 file uploads, and
        Thai tax-invoice generation (VAT, PDF via Gotenberg); shipped via feature-branch/PR workflow across 130+ commits on{" "}
        <a className="underline" target="_blank" href="https://github.com/tortrakul-won/rentspace-frontend">
          frontend
        </a>{" "}
        and backend repos.
      </p>
      <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
        <span className="w-2/3">ESP32-S3 Smart Alarm Display, Personal Project</span>
        <span className="w-1/3 text-[12px] lg:text-lg text-end">Jul 2026 - Present</span>
      </h3>
      <p>
        Embedded smart-alarm display on an <HL>ESP32-S3</HL> microcontroller (C++/Arduino), entirely built through <HL>Claude Code</HL> with no manual
        coding. Implemented Wi-Fi asset sync and OTA against a self-hosted fly.io server — swapped mbedTLS for wolfSSL after a TLS memory bug — and
        fixed low-level failures (DMA bounce-buffer crashes, audio/USB sync), each documented in a written postmortem.
      </p>
    </>
  );
}
