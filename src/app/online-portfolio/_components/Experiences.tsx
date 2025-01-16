import HL from "../_shared-components/HL";
import SectionHeader from "../_shared-components/SectionHeader";

export default function Experiences() {
  return (
    <>
      <SectionHeader>Experiences</SectionHeader>
      <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
        <span className="w-2/3">
          <HL>Full-stack Software Engineer</HL>, ZortOut co. ltd.
        </span>
        <span className="w-1/3 text-[12px] lg:text-lg text-end">Aug 2023 - Dec 2024</span>
      </h3>
      <ul className="list-disc list-inside [&>*]:my-2">
        <li>
          Served as sole developer for an <HL>automated order fulfillment system</HL> using C#, Hangfire, and Quartz Scheduler that streamlines
          marketplace operations by automatically updating transaction statuses to {"Ready to Ship"} based on configurable time parameters,
          successfully implemented and widely adopted by marketplace users.
        </li>
        <li>
          Served as sole frontend developer in <HL>redesigning the Sale Page using ASP.NET MVC and jQuery</HL>, implementing unified product cards
          with variants and smart stock-based variant selection, improving user experience despite legacy tech stack constraints.
        </li>
        <li>
          Solely responsible for the frontend redesign of the {"Partial Ready to Ship"} project, collaborating closely with the UX/UI designer to
          enhance user experience by implementing selective transaction status updates to {"Ready to Ship"} and adapting to the unique processes of
          each marketplace while providing detailed status information for each transaction group.
        </li>
      </ul>
      <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
        <span className="w-2/3">
          <HL>Full-stack Software Engineer</HL>, Ngernturbo co. ltd.
        </span>
        <span className="w-1/3 text-[12px] lg:text-lg text-end">Jan 2021 - Mar 2023</span>
      </h3>
      <ul className="list-disc list-inside [&>*]:my-2">
        <li>
          Developed an internal host-to-host <HL>financial transaction system</HL> in collaboration with stakeholders from the company and the bank,
          conducting extensive research to identify the optimal solution, and working as part of a development team to build a reliable and efficient
          system using .NET and Vue.js while expanding my understanding of technical and financial considerations.
        </li>
        <li>
          Designed and developed a <HL>worklist distribution system</HL> using .NET, AWS SQS and Lambda to automate task assignment, increase
          efficiency, and reduce workload, conducting thorough research and creating a proof-of-concept to find suitable technologies and workarounds
          for system limitations.
        </li>
        <li>
          Worked with the infrastructure team to ensure high availability of the worklist distribution system, demonstrating expertise in programming,
          problem-solving, and delivering business value through technology solutions, including research and integration with cloud services.
        </li>
      </ul>
      <div className="w-full">
        <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
          <span className="w-2/3">Computer Science (B.Sc), Thammasat University</span>
          <span className="w-1/3 text-[12px] lg:text-lg  text-end">2016 - 2020</span>
        </h3>
        <span>Final Project: CNN-based OCR for Handwritten Dental Symbols</span>
      </div>
    </>
  );
}
