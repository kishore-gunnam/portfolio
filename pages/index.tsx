import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <Container
      title="Kishore Gunnam - Developer, Writer, Creator"
      description="Full-Stack developer, JavaScript and Typescript enthusiast, Freelancer and a Learner."
      image="/avatar.jpg"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-row items-center space-x-4 mb-8">
          <img
            className="rounded-full h-24 w-24 "
            src="/assets/kishoregunnam.jpeg"
          />
        </div>
        <h1 className="font-bold text-2xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Kishore Gunnam
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400">
          🖥 I’m a Full stack developer, creator, and freelancer.
        </h2>
        <h2 className="prose text-gray-600 dark:text-gray-400">
          🗒 I work at{" "}
          <span className="font-bold">
            <span className="text-blue-500">m</span>roads
          </span>{" "}
          as a Senior Software Engineer.
          <br />
        </h2>
        🔨 Building Tailwind Master Kit and Algochurn.
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Currently Working on
        </h3>
        <ProjectCard
          title="Algochurn"
          description="Your last moment friend before a Technical Interview round. Practice the most popular Data Structures & Algorithms"
          href="https://www.algochurn.com/"
          icon="algochurn"
          tags={["Next.js", "TailwindCSS", "Monaco", "Algorithms", "Postgresql"]}
        />


        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
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
        {/* <Link href="/projects">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link> */}

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
        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
