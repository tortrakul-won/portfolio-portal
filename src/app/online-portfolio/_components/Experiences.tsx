import HL from "../_shared-components/HL";
import SectionHeader from "../_shared-components/SectionHeader";

export default function Experiences() {
  return (
    <>
      <SectionHeader>Experiences</SectionHeader>
      <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
        <span className="w-2/3">
          <HL>Full-stack Software Engineer</HL>, FWD Life Insurance Public Co., Ltd.
        </span>
        <span className="w-1/3 text-[12px] lg:text-lg text-end">May 2025 - Present</span>
      </h3>
      <ul className="list-disc list-inside [&>*]:mb-2">
        <li>
          Architected a Publisher/Subscriber microservice from scratch using <HL>RabbitMQ</HL> to synchronize enterprise upstream data with Auth0,
          managing user lifecycle operations (CUD) across two business flows (LA and IL).
        </li>
        <li>
          Developed an extensible framework utilizing the <HL>Strategy Pattern</HL> with Generic Interfaces and KeyedServices, allowing the core
          service to support multiple business logic implementations interchangeably.
        </li>
        <li>
          Engineered a resilient error-handling system utilizing Dead Letter Queues (DLQ) to manage row-level failures, ensuring partial batch success
          and providing on-demand Excel error reporting via API.
        </li>
        <li>
          Handled the full <HL>SDLC</HL> from design through SIT/UAT to production go-live, utilizing Docker/Podman for containerization and managing
          application configurations via Kubernetes ConfigMaps, HashiCorp Vault, going through Change Management process.
        </li>
        <li>
          Investigate and fixing bugs, both in frontend and backend. Help improving JQuery/Bootstrap-based webapp by implementing various QOL changes
        </li>
        <div className="border-b-2 pb-4 border-pink border-dashed">
          <div>
            <HL>Backend</HL>: C#, .NET 8, WebAPI, Entity Framework <span className="px-4"> </span> <HL>Frontend</HL>: ASP.NET MVC, JQuery, Bootstrap
          </div>
          <div>
            <HL>Observability</HL>: ELK Stack<span className="px-4"> </span>
            <HL>Database</HL>: SQL Server 2019
          </div>
          <HL>DevOps & Tools:</HL>Jenkins, Docker/Podman, Kubernetes (ConfigMaps), HashiCorp Vault, Postman, ServiceNow, Jira
        </div>
      </ul>
      <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
        <span className="w-2/3">
          <HL>Full-stack Software Engineer</HL>, ZortOut co. ltd.
        </span>
        <span className="w-1/3 text-[12px] lg:text-lg text-end">Aug 2023 - Dec 2024</span>
      </h3>
      <ul className="list-disc list-inside [&>*]:mb-2">
        <li>
          Developed an <HL>automated order fulfillment system</HL> using C#, Hangfire, and Quartz, streamlining marketplace operations by
          auto-updating transaction statuses to {'"Ready to Ship"'} based on configurable time parameters.
        </li>
        <li>
          <HL>Redesigned the Sale Page frontend </HL>using ASP.NET MVC and jQuery, implementing unified product cards and smart stock-based variant
          selection to improve UX within a legacy tech stack.
        </li>
        <li>
          Implemented the {'"Partial Ready to Ship"'} UI, collaborating with UI/UX designers to enable selective transaction updates and provide clear
          status visibility across different marketplace processes.
        </li>
        <div className="border-b-2 pb-4 border-pink border-dashed">
          <div>
            <HL>Backend</HL>: C#, ASP.NET Core , Hangfire, Quartz.Net, Serilog
          </div>
          <div>
            <HL>Frontend</HL>: ASP.NET MVC, jQuery, HTML, CSS, JavaScript, Bootstrap, React<span className="px-4"> </span>
            <HL>Database</HL>: MS SQL Server, MongoDB
          </div>
          <HL>Tools</HL>: IIS (Internet Information Services), Postman Test Script ,Git, Agile, Scrum, Azure Application Insight
        </div>
      </ul>
      <h3 className="flex justify-between w-full text-sm lg:text-lg font-semibold">
        <span className="w-2/3">
          <HL>Full-stack Software Engineer</HL>, Ngernturbo co. ltd.
        </span>
        <span className="w-1/3 text-[12px] lg:text-lg text-end">Jan 2021 - Mar 2023</span>
      </h3>
      <ul className="list-disc list-inside [&>*]:mb-2">
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
        <div className="border-b-2 pb-4 border-pink border-dashed">
          <div>
            <HL>Backend</HL>: C#, ASP.NET Core, Entity Framework, Amazon Web Services (SQS, Lambda)
          </div>
          <div>
            <HL>Frontend</HL>: Vue.js, HTML, CSS, JavaScript, Cypress<span className="px-4"> </span>
            <HL>Database</HL>: Postgres
          </div>
          <HL>Tools</HL>: Postman Test Script, Wiremock, Liquibase, Agile, Scrum, Jenkins, Git, Docker
        </div>
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
