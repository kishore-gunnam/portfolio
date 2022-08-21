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
      <div className="max-w-2xl w-full mx-auto">
        <Contact />
      </div>
    </Container>
  );
}
