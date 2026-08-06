import HL from "../_shared-components/HL";
import SectionHeader from "../_shared-components/SectionHeader";

export default function Profile() {
  return (
    <>
      <SectionHeader>Summary</SectionHeader>
      <p className="w-full text-left">
        Full-stack engineer with <b>5+ years</b> of experience building production systems, primarily using <HL>C#/.NET</HL>, with <HL>full SDLC ownership</HL> from design
        through production go-live. Experience in <HL>insurance and fintech</HL>, including host-to-host banking integrations and enterprise
        identity/data synchronization. <b>Open to roles with international teams.</b>
      </p>
      <div className="w-full border-t border-gray-300 pt-2 text-left font-semibold">
        5+ yrs. experience &middot; C#/.NET &middot; Insurance &amp; Fintech &middot; Full SDLC &middot; Fluent English &middot; Open to international teams
      </div>
    </>
  );
}
