import React from 'react'
import ProjectCard from '../ProjectCard';

function Projects() {
  return (
    <>

      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Currently Working on
        </h3>
        <ProjectCard
          title="StyledNext"
          description="Professional, modern and beautiful templates built with Next.js and TailwindCSS"
          href="https://www.stylednext.com/"
          icon="vscode"
          tags={["Next.js", "TailwindCSS"]}
        />

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Algochurn"
          description="Your last moment friend before a Technical Interview round. Practice the most popular Data Structures & Algorithms"
          href="https://www.algochurn.com/"
          icon="algochurn"
          tags={["Next.js", "TailwindCSS", "Monaco", "Algorithms", "Postgresql"]}
        />
        <ProjectCard
          title="Tailwind Master Kit"
          description="Beautiful, Handcrafted, ready-to-use components and templates for your next Tailwind web app project."
          href="https://www.tailwindmasterkit.com/"
          icon="tailwindmasterkit"
          tags={["Tailwind", "Next.js", "Freemium", "gumroad"]}
        />
        <ProjectCard
          title="ubergrad"
          description="Ubergrad.com is a study abroad platform that helps students to APPLY and ENROLL at top Universities overseas. Ubergrad has successfully guided more than 10,000+ students so far and has become a trusted partner of a study abroad aspirant. This is one of the best freelance projects I have done."
          href="https://www.ubergrad.com/"
          icon="graduation"
          tags={["plop", "storybook", "Next.js", "django", "Razorpay"]}
        />
        <ProjectCard
          title="melmaa"
          description="Built an ecommerce application with real time payments and dashboard; Integrated Delhivery and RazorpayX"
          href="https://www.melmaa.com/"
          icon="melmaa"
          tags={["RazorpayX", "Next.js", "Spring boot", "Delhivery"]}
        />

        <ProjectCard
          title="Covid Rescue"
          description="Get Real-time verified leads on Oxygen, Beds, Remdesivir and more with location and resource filtering"
          href="https://covidrescue.co.in/"
          icon="covidrescue"
          tags={["Open Source", "Next.js", "Twitter"]}
        />

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Upcoming Projects
        </h3>
        <ProjectCard
          title="VSCode Resume"
          description="A VSCode themed resume for all the web developers out there. A UI which looks exactly like a React file-system based VSCode window with create and update operations."
          href="#"
          icon="vscode"
        />
        <ProjectCard
          title="More projects coming soon.."
          description="I get ideas all day 🙄, All of them are updated here as soon as I start working on them."
          href="#"
          icon="more"
        />
      </div>
    </>
  )
}

export default Projects;