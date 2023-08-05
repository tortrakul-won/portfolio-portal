import HL from "../_shared-components/HL";
import SectionHeader from "../_shared-components/SectionHeader";

export default function Experiences() {
  return (
    <>
      <SectionHeader>Experiences</SectionHeader>
      <h3 className="flex justify-between w-full text-lg font-semibold">
        <span>
          <HL>Full-stack Software Engineer</HL>, Ngernturbo co. ltd.
        </span>
        <span>Jan 2021 - Mar 2023</span>
      </h3>
      <ul className="list-disc list-inside">
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
        <h3 className="flex justify-between w-full text-lg font-semibold">
          <span>Computer Science (B.Sc), Thammasat University</span>
          <span>2016 - 2020</span>
        </h3>
        <span>Final Project: CNN-based OCR for Handwritten Dental Symbols</span>
      </div>
    </>
  );
}
