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
          Architected a Publisher/Subscriber microservice using <HL>RabbitMQ</HL> to sync enterprise data with Auth0, managing user lifecycle (CUD)
          across two business flows (LA, IL).
        </li>
        <li>
          Developed an extensible framework utilizing the <HL>Strategy Pattern</HL> with Generic Interfaces and KeyedServices, allowing the core
          service to support multiple business logic implementations interchangeably.
        </li>
        <li>
          Engineered a resilient error-handling system using Dead Letter Queues (DLQ) for row-level failures, ensuring partial batch success with
          on-demand Excel error reports via API.
        </li>
        <li>
          Owned full <HL>SDLC</HL> from design through SIT/UAT to production go-live — containerized via Docker/Podman, managed configs via
          Kubernetes ConfigMaps and HashiCorp Vault, per Change Management.
        </li>
        <div className="hidden lg:block border-b-2 pb-4 border-pink border-dashed">
          <div>
            <HL>Backend</HL>: C#, .NET 8, WebAPI, Entity Framework <span className="px-4"> </span> <HL>Frontend</HL>: ASP.NET MVC, jQuery, Bootstrap
          </div>
          <div>
            <HL>Observability</HL>: ELK Stack<span className="px-4"> </span>
            <HL>Database</HL>: SQL Server 2019
          </div>
          <HL>DevOps & Tools:</HL> Jenkins, Docker/Podman, Kubernetes (ConfigMaps), HashiCorp Vault, Postman, ServiceNow, Jira
        </div>
        <div className="lg:hidden border-b-2 pb-4 border-pink border-dashed">
          <HL>Tech:</HL> C#, .NET 8, EF Core, RabbitMQ, SQL Server, Kubernetes, Docker, Vault, ELK
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
          Developed an <HL>automated order fulfillment system</HL> using C#, Hangfire, and Quartz — auto-updating transaction statuses to{" "}
          {'"Ready to Ship"'} on configurable time triggers.
        </li>
        <li>
          <HL>Redesigned the Sale Page frontend </HL>using ASP.NET MVC and jQuery — unified product cards, smart stock-based variant selection,
          improved UX within a legacy stack.
        </li>
        <li>
          Implemented the {'"Partial Ready to Ship"'} UI with UI/UX designers, enabling selective transaction updates and clear status visibility
          across marketplace processes.
        </li>
        <div className="hidden lg:block border-b-2 pb-4 border-pink border-dashed">
          <div>
            <HL>Backend</HL>: C#, ASP.NET Core, Hangfire, Quartz.Net, Serilog
          </div>
          <div>
            <HL>Frontend</HL>: ASP.NET MVC, jQuery, HTML, CSS, JavaScript, Bootstrap, React<span className="px-4"> </span>
            <HL>Database</HL>: MS SQL Server, MongoDB
          </div>
          <HL>Tools</HL>: IIS (Internet Information Services), Postman Test Script ,Git, Agile, Scrum, Azure Application Insight
        </div>
        <div className="lg:hidden border-b-2 pb-4 border-pink border-dashed">
          <HL>Tech:</HL> C#, ASP.NET Core, Hangfire, Quartz.Net, ASP.NET MVC, jQuery, MS SQL Server, MongoDB, React
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
          Built an internal host-to-host <HL>financial transaction system</HL> with bank stakeholders — researched the optimal solution and delivered
          it with a .NET/Vue.js team.
        </li>
        <li>
          Designed a <HL>worklist distribution system</HL> on .NET, AWS SQS and Lambda to automate task assignment — researched and prototyped to
          work around system limitations.
        </li>
        <li>
          Partnered with the infrastructure team to ensure high availability of the worklist distribution system, integrating cloud services and
          resolving scaling issues.
        </li>
        <li>Mentored interns with technical guidance and light pairing, helping them ramp up on the team's codebase and workflows.</li>
        <div className="hidden lg:block border-b-2 pb-4 border-pink border-dashed">
          <div>
            <HL>Backend</HL>: C#, ASP.NET Core, Entity Framework, Amazon Web Services (SQS, Lambda)
          </div>
          <div>
            <HL>Frontend</HL>: Vue.js, HTML, CSS, JavaScript, Cypress<span className="px-4"> </span>
            <HL>Database</HL>: Postgres
          </div>
          <HL>Tools</HL>: Postman Test Script, Wiremock, Liquibase, Agile, Scrum, Jenkins, Git, Docker
        </div>
        <div className="lg:hidden border-b-2 pb-4 border-pink border-dashed">
          <HL>Tech:</HL> C#, ASP.NET Core, Entity Framework, AWS (SQS, Lambda), Vue.js, Postgres, Docker
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
