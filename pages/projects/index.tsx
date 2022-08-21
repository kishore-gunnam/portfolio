import Contact from "@/components/Contact";
import Container from "@/components/Container";

import Projects from "@/components/Projects";

export default function Home() {
  return (
    <Container
      title="Kishore Gunnam - Developer, Writer, Creator"
      description="Full-Stack developer, JavaScript and Typescript enthusiast, Freelancer and a Learner."
      image="https://www.kishoregunnam.com/kishore.jpg"
    >
      <Projects />
      <div className="flex flex-col justify-center items-start  mx-auto mb-16">
        <Contact />
      </div>
    </Container>
  );
}
