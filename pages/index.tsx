import Container from "@/components/Container";

import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

import Projects from "@/components/Projects";
export default function Home() {
  return (
    <Container
      title="Kishore Gunnam - Developer, Writer, Creator"
      description="Full-Stack developer, JavaScript and Typescript enthusiast, Freelancer and a Learner."
      image="https://www.kishoregunnam.com/kishore.jpg"
    >
      <div className="flex mt-2 flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-col px-2 gap-4 w-full p-2 md:flex-row items-start ">
          <img
            className="rounded-md h-48 w-48"
            src="/assets/kishoregunnam.jpeg"
          />
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
              Hey, I’m Kishore Gunnam
            </h1>
            <h2 className="prose text-gray-600 dark:text-gray-400">
              🖥 I’m a <span className="font-bold">Full stack developer</span>, creator, and freelancer.
            </h2>
            <h2 className="prose text-gray-600 dark:text-gray-400">
              🗒 I work at{" "}
              <span className="font-bold">
                <span className="text-blue-500">m</span>roads
              </span>{" "}
              as a <span className="font-bold">Senior Software Engineer</span>.
              <br />
            </h2>
            <span className="inline-block">
              🎉 Built and launched <span className="font-bold">Tailwind Master Kit</span> and  <span className="font-bold">Algochurn</span>.
            </span>
            <h2 className="prose text-gray-600 dark:text-gray-400">
              <span className="inline-block">
                🔨 Building <span className="font-bold">StyledNext</span>.
              </span>
            </h2>
          </div>
        </div>
        <Projects />
        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
