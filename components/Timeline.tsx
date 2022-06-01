import { useState } from "react";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children = null }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Year>2020</Year>
    <ul>
      <Step title="Learned AWS services ✨">
        Learned AWS services (S3, cloudfront, EC2)
      </Step>
      <Step title="Client project">
        Built an ecommerce application from scratch with special features ( wallet, referrals and payment gateway integration ) using Next.js and spring boot.
      </Step>
      <Step title="Learned Next.js and Spring boot">
      </Step>

    </ul>
    <Divider />
    <Year>2019</Year>
    <ul>
      <Step title="Joined mroads">
        {" "}
        Joined{" "}
        <span className="font-bold">
          <span className="text-blue-500">m</span>roads
        </span>{" "}
        as a Software Development Engineer. Working on their Flagship product
        as a Front-End Developer.
      </Step>
      <Step title="Placements - Got Placed ✨">
        Had 3 offers in Hand. 3 On-Campus in the Software
        Developer (Full-Stack) roles.
      </Step>

    </ul>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Full-Stack Journey 🔩">
        Learnt NodeJS, MongoDB, MySQL along with React and the best practices to
        build products and web apps which can scale easily.
      </Step>
      <Step title="Created First Droplet in Digital Ocean">
        Deployed first php application in dedicated server.
      </Step>
      <Step title="Learned Web servers configurations🔩">
        Learned nginx and Apache web servers to deploy deploy wordpress and custom php application.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Learned React">
        Was introducted to React, took up a course on Udemy to get the hang of
        it. I haven't stopped since then.
      </Step>
      <Step title="Angular Enthusiast ⚒">
        Was introducted to Angular, took up a course on Udemy to get the hang of
        it. I haven't stopped since then.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Created first woocommerce application 🚀">
        Created and deployed woocommerce application in godaddy.
      </Step>
      <Step title="Learned python - flask framework">
        Learned flask framework to create web applications.
      </Step>
      <Step title="Learned python ✨">
        Learned python language.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Learned php - laravel framework">
        Learned php laravel framework to create own CMS.
      </Step>
      <Step title="Learned php ✨">
        Learned php to create wordpress themes.
      </Step>
      <Step title="Learned wordpress ✨">
        Learned wordpress CMS to create blogs.
      </Step>

    </ul>
    <Divider />
    <Year>2013</Year>
    <ul>
      <Step title="Learned photoshop">
        Learned photoshop to create assets for my first website.
      </Step>
      <Step title="Created my first website 🚀">
        Created my first website using blogger.com, in my college days.
      </Step>
    </ul>
    <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="Completed 10th Grade">
      </Step>
    </ul>
    <Divider />
    <Year>2008</Year>
    <ul>
      <Step title="First Computer 💻">
        I played GTA San Andreas all day, everyday.
      </Step>
    </ul>
    <Divider />
    <Year>1996</Year>
    <ul>
      <Step title="Born 👶🏼 🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2022</Year>
      <ul>
        <Step title="Algochurn 👨‍💻">
          Started working on Algochurn, a platform to help people learn algorithms.
        </Step>
        <Step title="Promotion 🥳">
          I Got promoted as Senior Software Engineer at  <span className="font-bold">
            <span className="text-blue-500">m</span>roads
          </span>.
        </Step>
        <Step title="Ubergrad Admin portal - Freelance Project🎓 ">
          I worked as a freelancer on the admin portal of ubergrad. Where they can manage students, courses and Universities.
        </Step>
        <Step title="Ubergrad - Freelance Project🎓 ">
          Created and migrated ubergrad portal from outdated tech to new tech. Improved lot of performance and user engagement. Got a good feedback from the client.
        </Step>
      </ul>
      <Year>2021</Year>
      <ul>
        <Step title="Built Tailwind Master Kit 🪁">
          Built TailwindMasterKit, A SaaS marketplace for beautiful, handcrafted Website components built with and for Tailwind supported websites.
          Built the components from the ground up for React and HTML in 30+ categories.
        </Step>
        <Step title="Built Covid Rescue 😷">
          Created and deployed CovidRescue website. It helps to find Beds and vaccine based on location and different filters.
          It also reminds the regitered users, whenever the vaccine is available.
        </Step>
        <Step title="Built an video platform">
          Built an video platfrom for individual creators. There they can sell there videos.
        </Step>
        <Step title="Integrated cloudflare for client project">
          Integrated cloudflare to prevent bot traffic and DDoS attacks.
        </Step>
        <Step title="Setting up CI/CD pipeline for client project">
          Setting up development and production environments for ecommerce application.
          Deployed application in Digitalocean and AWS ( S3, EC2 ) and create CI/CD pipeline.
        </Step>
        <Step title="Learned jenkins and docker ✨">
          Learned jenkins (CI/CD) tool and docker.
        </Step>
      </ul>
      <Divider />
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
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
        </button>
      )}
    </>
  );
}
