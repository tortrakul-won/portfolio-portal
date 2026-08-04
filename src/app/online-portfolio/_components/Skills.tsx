import HL from "../_shared-components/HL";
import SectionHeader from "../_shared-components/SectionHeader";

export default function Skills() {
  return (
    <section className="w-full [&>*]:my-1">
      <SectionHeader>Skills</SectionHeader>
      <ul className="list-disc list-inside">
        <li>Thai : Native</li>
        <li>
          <HL>English : Fluent IELTS (7.5/9) TU-GET (860/1000)</HL>
        </li>
        <li>German : Basic</li>
        <li>
          <HL>AI-Assisted Development: Claude Code</HL>
        </li>
      </ul>
    </section>
  );
}
