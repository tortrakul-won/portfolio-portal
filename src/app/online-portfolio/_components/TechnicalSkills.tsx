import HL from "../_shared-components/HL";

export default function TechnicalSkills() {
  return (
    <>
      <h2 className="text-2xl text-white bg-charcoal w-full text-center py-1">Technical Skills</h2>
      <div className="grid grid-cols-2 grid-rows-3 w-full [&>*]:my-1">
        <div>
          <h3 className="font-medium">Programming Languages</h3>
          <span className="font-light">
            <HL>C# (.Net Core), Python,</HL> C, JavaScript, TypeScript, Java, HTML, CSS, SQL
          </span>
        </div>
        <div>
          <h3 className="font-medium">Software Developing Knowledege</h3>
          <span className="font-light">
            Data Structure, <HL>Unit Testing</HL>, Regression Test, Unix, <HL>Restful API</HL>, Web Scraping, Automation, Digital Image Processing
          </span>
        </div>
        <div>
          <h3 className="font-medium">Tools & Technologies</h3>
          <span className="font-light">
            Wiremock, Liquibase, Jenkins, <HL>Docker</HL>, Figma, Zeplin, Kibana, <HL>GIT</HL>,Cypress, RabbitMQ
          </span>
        </div>
        <div>
          <h3 className="font-medium">Databases</h3>
          <span className="font-light">
            <HL>PostgreSQL</HL>, MongoDB, Redis, Prisma, Pocketbase
          </span>
        </div>
        <div>
          <h3 className="font-medium">Cloud-Based Technologies</h3>
          <span className="font-light">AWS EC2, SQS, Lambda, Batch, CloudWatch Step Function, API Gateway. Load Balancer</span>
        </div>
        <div>
          <h3 className="font-medium">Frontend Frameworks & Tools</h3>
          <span className="font-light">
            <HL>React, Vue</HL>, Vuex, <HL>Tailwind</HL>, MUI, Next.Js, NestJS, OAuth2.0, JWT
          </span>
        </div>
      </div>
    </>
  );
}
