import HL from "../_shared-components/HL";
import SectionHeader from "../_shared-components/SectionHeader";

export default function Skills() {
  return (
    <section className="w-full [&>*]:my-1">
      <SectionHeader>Skills</SectionHeader>
      <ul className="list-disc list-inside">
        <li>Thai : Native</li>
        <li>
          <HL>English : Fluent TU-GET (860/1000), IETLS (7.5/9)</HL>
        </li>
        <li>German : Basic</li>
        <li>MS Office Adobe Photoshop, Lightroom, Canva, GSuite</li>
      </ul>
    </section>
  );
}
