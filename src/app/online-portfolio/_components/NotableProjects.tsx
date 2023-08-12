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
        <span className="w-1/3 text-[12px] lg:text-lg text-end">June 2023 - Present</span>
      </h3>
      <ul className="list-disc list-inside">
        <li>
          Developed frontend and backend components for the Open Education Platform, matching schools and volunteers who interested in teaching after
          school subjects and non-conventional subjects.
        </li>
        <li>
          Utilized technologies such as <HL>React</HL>, MUI, React-Router-DOM (Frontend) and NestJS, <HL>Prisma</HL> (Backend).
        </li>
        <li>
          Overcame challenges of coordinating volunteer schedules by quickly adapting to predetermined technologies and collaborating with current
          volunteers to find optimal solutions.
        </li>
      </ul>
    </>
  );
}
