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
          <img className="rounded-full h-24 w-24 " src="/assets/kishoregunnam.jpeg" />
          
        </div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Hey, I’m Kishore Gunnam
          </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’m a developer, writer, and creator. I work at{" "}
          <span className="font-bold">
            <span className="text-blue-500">m</span>roads
          </span>{" "}
          as a Software Engineer. You've discovered my piece on the internet
          –&nbsp;
          <Link href="/blog">
            <a className="text-blue-500 hover:underline">
              checkout my blog&nbsp;
            </a>
          </Link>
          while you're here. <br />I write about technology, learning and memes.
        </h2>
        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="Top 5 courses and resources to learn Next JS in 2021"
          summary="Get the top 5 resources to learn Next JS in 2021 and take your React skills to the next level."
          slug="top-5-nextjs-resources"
        />
        <BlogPost
          title="How I built a blogging platform like Medium with Next.js"
          summary="Insights and structure of devmedium, A blogging platform built with Next.js with features like custom usernames, create blogs and various optimization techniques"
          slug="blogging-platform-nextjs"
        /> */}
        {/* <BlogPost
          title="How to design a minimal and beautiful website which actually converts"
          summary="Examining the tips and tricks used to make a website design a notch above the rest."
          slug="css-with-react"
        />
        <BlogPost
          title="Using real world projects to build better learning habits"
          summary="In this guide, you will learn how to take an idea and convert it into a real world application, while learning on the go."
          slug="css-with-react"
        /> */}
         <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Currently Working on
        </h3>
        <ProjectCard
          title="Algochurn"
          description="Your last moment friend before a Technical Interview round. Practice the most popular Data Structures & Algorithms"
          href="#"
          icon="algochurn"
        />

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Covid Rescue"
          description="Get Real-time verified leads on Oxygen, Beds, Remdesivir and more with location and resource filtering"
          href="https://covidrescue.co.in/"
          icon="covidrescue"
          tags={["Open Source", "Next.js", "Twitter"]}
        /> 
        <Link href="/projects">
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
        </Link>

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