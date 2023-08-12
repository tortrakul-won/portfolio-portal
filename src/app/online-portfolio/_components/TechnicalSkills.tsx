import HL from "../_shared-components/HL";
import SectionHeader from "../_shared-components/SectionHeader";

export default function TechnicalSkills() {
  return (
    <>
      <SectionHeader>Technical Skills</SectionHeader>
      <div className="grid grid-cols-2 grid-rows-3 w-full [&>*]:my-1">
        <div>
          <h3 className="font-medium">Programming Languages</h3>
          <span className="font-light lg:text-base text-xs">
            <HL>C# (.Net Core), Python,</HL> C, JavaScript, TypeScript, Java, HTML, CSS, SQL
          </span>
        </div>
        <div>
          <h3 className="font-medium">Coding Knowledge</h3>
          <span className="font-light lg:text-base text-xs">
            Data Structure, <HL>Unit Testing</HL>, Regression Test, Unix, <HL>Restful API</HL>, Web Scraping, Automation, Digital Image Processing
          </span>
        </div>
        <div>
          <h3 className="font-medium">Tools & Technologies</h3>
          <span className="font-light lg:text-base text-xs">
            Wiremock, Liquibase, Jenkins, <HL>Docker</HL>, Figma, Zeplin, Kibana, <HL>GIT</HL>,Cypress, RabbitMQ
          </span>
        </div>
        <div>
          <h3 className="font-medium">Databases</h3>
          <span className="font-light lg:text-base text-xs">
            <HL>PostgreSQL</HL>, MongoDB, Redis, Prisma, Pocketbase
          </span>
        </div>
        <div>
          <h3 className="font-medium">Cloud-Based Technologies</h3>
          <span className="font-light lg:text-base text-xs">AWS EC2, SQS, Lambda, Batch, CloudWatch Step Function, API Gateway. Load Balancer</span>
        </div>
        <div>
          <h3 className="font-medium">Frontend Tools</h3>
          <span className="font-light lg:text-base text-xs">
            <HL>React, Vue</HL>, Vuex, <HL>Tailwind</HL>, MUI, Next.Js, NestJS, OAuth2.0, JWT
          </span>
        </div>
      </div>
    </>
  );
}
