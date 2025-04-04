import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  const [successVisible, setSuccessVisible] = useState(false);
  const [failureVisible, setFailureVisible] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zfarful", "template_qmxd60h", form.current, {
        publicKey: "otSnEtZSTNGnSo5CV",
      })
      .then(
        () => {
          setSuccessVisible(true);
          setTimeout(() => {
            setSuccessVisible(false);
          }, 3000);
          console.log("SUCCESS!");
        },
        (error) => {
          setSuccessVisible(true);
          setTimeout(() => {
            setSuccessVisible(false);
          }, 3000);
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
  };

  return (
    <div className="scroll-smooth bg-red-50 text-red-950 relative pt-28 sm:pt-36 dark:bg-red-900 dark:text-red-50 dark:text-opacity-90">
      <header className="z-[999] relative">
        <div className="opacity-100 transform -translate-x-1/2 translate-y-0 translate-z-0 fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-red-950 dark:border-black/40 dark:bg-opacity-75"></div>
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-red-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            <li className="opacity-100 transform-none h-3/4 flex items-center justify-center relative">
              <a
                className="flex w-full items-center justify-center px-3 py-3 hover:text-red-950 transition dark:hover:text-red-300 text-red-950 dark:text-red-200"
                href="#home"
                onClick={() => setActiveNav("home")}
              >
                Home
                {activeNav === "home" ? (
                  <span className="transform-none transform-origin-center bg-red-100 rounded-full absolute inset-0 -z-10 dark:bg-red-800"></span>
                ) : (
                  ""
                )}
              </a>
            </li>
            <li className="opacity-100 transform-none h-3/4 flex items-center justify-center relative">
              <a
                className="flex w-full items-center justify-center px-3 py-3 hover:text-red-950 transition dark:hover:text-red-300 text-red-950 dark:text-red-200"
                href="#opensource"
                onClick={() => setActiveNav("opensource")}
              >
                OS
              </a>
              {activeNav === "opensource" ? (
                <span className="transform-none transform-origin-center bg-red-100 rounded-full absolute inset-0 -z-10 dark:bg-red-800"></span>
              ) : (
                ""
              )}
            </li>
            <li className="opacity-100 transform-none h-3/4 flex items-center justify-center relative">
              <a
                className="flex w-full items-center justify-center px-3 py-3 hover:text-red-950 transition dark:hover:text-red-300 text-red-950 dark:text-red-200"
                href="#projects"
                onClick={() => setActiveNav("projects")}
              >
                Projects
              </a>
              {activeNav === "projects" ? (
                <span className="transform-none transform-origin-center bg-red-100 rounded-full absolute inset-0 -z-10 dark:bg-red-800"></span>
              ) : (
                ""
              )}
            </li>
            <li className="opacity-100 transform-none h-3/4 flex items-center justify-center relative">
              <a
                className="flex w-full items-center justify-center px-3 py-3 hover:text-red-950 transition dark:hover:text-red-300 text-red-950 dark:text-red-200"
                href="#skills"
                onClick={() => setActiveNav("skills")}
              >
                Skills
              </a>
              {activeNav === "skills" ? (
                <span className="transform-none transform-origin-center bg-red-100 rounded-full absolute inset-0 -z-10 dark:bg-red-800"></span>
              ) : (
                ""
              )}
            </li>
            <li className="opacity-100 transform-none h-3/4 flex items-center justify-center relative">
              <a
                className="flex w-full items-center justify-center px-3 py-3 hover:text-red-950 transition dark:hover:text-red-300 text-red-950 dark:text-red-200"
                href="#experience"
                onClick={() => setActiveNav("experience")}
              >
                Experience
              </a>
              {activeNav === "experience" ? (
                <span className="transform-none transform-origin-center bg-red-100 rounded-full absolute inset-0 -z-10 dark:bg-red-800"></span>
              ) : (
                ""
              )}
            </li>
            <li className="opacity-100 transform-none h-3/4 flex items-center justify-center relative">
              <a
                className="flex w-full items-center justify-center px-3 py-3 hover:text-red-950 transition dark:hover:text-red-300 text-red-950 dark:text-red-200"
                href="#contact"
                onClick={() => setActiveNav("contact")}
              >
                Contact
              </a>
              {activeNav === "contact" ? (
                <span className="transform-none transform-origin-center bg-red-100 rounded-full absolute inset-0 -z-10 dark:bg-red-800"></span>
              ) : (
                ""
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center px-4">
        <section
          id="home"
          className="max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="opacity-100 transform-none ">
                <img
                  alt="Karthikeya"
                  fetchpriority="high"
                  width="192"
                  height="192"
                  decoding="async"
                  data-nimg="1"
                  className="text-transparent h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                  src="./Images/profilepic.png"
                />
              </div>
            </div>
          </div>
          <h1 className="opacity-100 transform-none mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
            <span className="font-bold">Hello, I'm Karthikeya</span>
            <br />
            <br />
            <b>A software developer</b> with
            <b> 2.5+ years</b> of experience, I'm passionate about
            <div className="text-nowrap">Science🔭, Coding🧑‍💻,</div>
            <div className="text-nowrap">Cricket🏏, and Music🎧</div>
          </h1>
          <div className="opacity-100 transform-none flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium">
            <div>
              <a
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                href="./Karthikeya_Resume.pdf"
                download="Karthikeya_Resume"
              >
                Download CV
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3 py-2">
              <a href="https://github.com/karthikeya0800" target="_blank">
                <img
                  src="./Images/githublogo.svg"
                  alt="githublogo"
                  className="h-12 w-12"
                />
              </a>
              <a href="https://linkedin.com/in/karthikeya0800" target="_blank">
                <img
                  src="./Images/linkedinlogo.svg"
                  alt="linkedinlogo"
                  className="h-12 w-12"
                />
              </a>
              <a href="https://leetcode.com/karthikeya0800" target="_blank">
                <img
                  src="./Images/leetcodelogo.png"
                  alt="leetcodelogo"
                  className="h-10 w-10"
                />
              </a>
            </div>
          </div>
        </section>
        <div className="opacity-100 transform-none bg-red-200 my-10 h-16 w-1 rounded-full block dark:bg-opacity-20"></div>
        <section
          className="max-w-[45rem] text-center leading-8 mb-0 scroll-mt-28"
          id="opensource"
          opacity-100
          transform-none
        >
          <h2 className="text-3xl font-medium capitalize mb-8 text-center">
            <div className="flex items-center justify-center">
              Open Source
              <div className="lf-player-container"></div>
            </div>
          </h2>
          <table style={{ width: "100%", border: "1px solid black" }}>
            <thead>
              <tr>
                <th className="border border-black p-2">Project Name</th>
                <th className="border border-black p-2">Description</th>
                <th className="border border-black p-2">URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-1">
                  <a
                    href="https://invoify.vercel.app/"
                    target="_blank"
                    className="text-blue-400"
                  >
                    invoify
                  </a>
                </td>
                <td className="border border-black p-1">
                  An invoice generator app built using Next.js, Typescript, and
                  Shadcn.
                </td>
                <td className="border border-black p-1">
                  <a
                    href="https://github.com/al1abb/invoify/pull/627"
                    target="_blank"
                    className="text-blue-400"
                  >
                    PR
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="opacity-100 transform-none bg-red-200 my-10 h-16 w-1 rounded-full block dark:bg-opacity-20"></div>
        <section id="projects" className="scroll-mt-28 ">
          <h2 className="text-3xl font-medium capitalize mb-8 text-center">
            <div className="flex items-center justify-center">My Projects</div>
          </h2>
          <div>
            <div className="group mb-3 sm:mb-8 last:mb-0 opacity-60 transform scale-80 translate-z-0">
              <section className="bg-red-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-red-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                  <h3 className="text-2xl font-semibold">Spark Mart</h3>
                  <p className="mt-2 leading-relaxed text-red-700 dark:text-white/70">
                    Crafted a responsive online store with MERN stack,
                    incorporating cart, login and order tracking. <br />
                    <b>
                      Link :&nbsp;
                      <a
                        href="https://spark-mart-frontend.vercel.app"
                        target="_blank"
                      >
                        <u className="text-blue-300">Sparkmart</u>
                      </a>
                    </b>
                  </p>
                  <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      React.js
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      Express.js
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      Mongo DB
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      Tailwind CSS
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      Node.js
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      shadcnUI
                    </li>
                  </ul>
                </div>
                <img
                  alt="Project I worked on"
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  className="h-64 rounded-lg text-transparent absolute hidden sm:block top-8 -right-40 w-[26.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                  src="./Images/sparkmart.png"
                />
              </section>
            </div>
            <div className="group mb-3 sm:mb-8 last:mb-0 opacity-60 transform scale-80 translate-z-0">
              <section className="bg-red-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-red-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                  <h3 className="text-2xl font-semibold">Quiz Star</h3>
                  <p className="mt-2 leading-relaxed text-red-700 dark:text-white/70">
                    Developed React web app and deployed on Firebase. Fetches
                    quiz questions, records user answers, and displays final
                    score.
                    <br />
                    <b>
                      Link :&nbsp;
                      <a
                        href="https://karthikeya-quiz.web.app/"
                        target="_blank"
                      >
                        <u className="text-blue-300">Quizstar</u>
                      </a>
                    </b>
                  </p>
                  <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      React.js
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      JavaScript
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      CSS
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      Google Firebase
                    </li>
                  </ul>
                </div>
                <img
                  alt="Project I worked on"
                  loading="lazy"
                  width="2996"
                  height="1514"
                  decoding="async"
                  data-nimg="1"
                  className="h-64 rounded-lg text-transparent absolute hidden sm:block top-8 -right-40 w-[26.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                  src="./Images/quizstar.png"
                />
              </section>
            </div>
            <div className="group mb-3 sm:mb-8 last:mb-0 opacity-60 transform scale-80 translate-z-0">
              <section className="bg-red-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-red-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                  <h3 className="text-2xl font-semibold">CRUD App</h3>
                  <p className="mt-2 leading-relaxed text-red-700 dark:text-white/70">
                    Developed a responsive web app with ReactJS adn
                    Django.Dockerized the containers and deployed it on a Google
                    Cloud Platform VM.
                    <br />
                    <b>
                      Link :&nbsp;
                      <a
                        href="https://github.com/karthikeya0800/CRUD-Django"
                        target="_blank"
                      >
                        <u className="text-blue-300">CRUDapp</u>
                      </a>
                    </b>
                  </p>
                  <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      React.js
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      Django
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      MySQL
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      Next UI
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      Nginx
                    </li>
                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                      Docker
                    </li>
                  </ul>
                </div>
                <img
                  alt="Project I worked on"
                  loading="lazy"
                  width="1384"
                  height="1290"
                  decoding="async"
                  data-nimg="1"
                  className="h-64 rounded-lg text-transparent absolute hidden sm:block top-8 -right-40 w-[26.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                  src="./Images/crudapp.png"
                />
              </section>
            </div>
          </div>
        </section>
        <div className="opacity-100 transform-none bg-red-200 my-10 h-16 w-1 rounded-full block dark:bg-opacity-20"></div>
        <section id="skills" className="max-w-[53rem] scroll-mt-28 text-center">
          <h2 className="text-3xl font-medium capitalize mb-8 text-center">
            <div className="flex items-center justify-center">My skills</div>
          </h2>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-red-800">
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Java Script
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Python
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Express.js
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Django
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              MongoDB
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              MySQL
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Node.js
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              React.js
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Redux
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Next UI
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Powershell
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Selenium
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Groovy
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Tailwind
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Docker
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Git
            </li>
            <li className="opacity-100 transform-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
              Nginx
            </li>
          </ul>
        </section>
        <div className="opacity-100 transform-none bg-red-200 my-10 h-16 w-1 rounded-full block dark:bg-opacity-20"></div>
        <section id="experience" className="scroll-mt-28  lg:w-1/2">
          <h2 className="text-3xl font-medium capitalize mb-8 text-center">
            <div className="flex items-center justify-center">
              My experience
            </div>
          </h2>
          <div className="vertical-timeline vertical-timeline--animate vertical-timeline--two-columns">
            <div id="" className="vertical-timeline-element">
              <span className="vertical-timeline-element-icon bounce-in bg-white bg-opacity-15 text-lg"></span>
              <div className="vertical-timeline-element-content bounce-in bg-white bg-opacity-5 border border-gray-200 shadow-none text-left py-5 px-8">
                <div className="vertical-timeline-element-content-arrow border-r-4 border-white border-opacity-50"></div>
                <h3 className="font-semibold capitalize">
                  Graduated in Bachelor of Technology
                </h3>
                <p className="font-normal !mt-0">
                  VNR Vignana Jyothi Institute of Engineering and Technology,
                  Hyderabad
                </p>
                <p className="!mt-1 !font-normal text-red-700 dark:text-white/75">
                  Completed my Bachelor of Technology degree with a focus on
                  Electrical and Electronics Engineering.
                </p>
                <br />
                <span className="vertical-timeline-element-date">
                  2018 - 2022 | CGPA : 8.21/10
                </span>
              </div>
            </div>
            <div id="" className="vertical-timeline-element">
              <span className="vertical-timeline-element-icon bounce-in bg-white bg-opacity-15 text-lg"></span>
              <div className="vertical-timeline-element-content bounce-in bg-white bg-opacity-5 border border-gray-200 shadow-none text-left py-5 px-8">
                <div className="vertical-timeline-element-content-arrow border-r-4 border-white border-opacity-50"></div>
                <h3 className="font-semibold capitalize">
                  Automation Test Engineer
                </h3>
                <p className="font-normal !mt-0">
                  Tata Consultancy Services, Hyderabad
                </p>
                <p className="!mt-1 !font-normal text-red-700 dark:text-white/75">
                  Contributed to automating and enhancing solutions that reduced
                  manual workload of multiple support groups in our unit.
                </p>
                <br />
                <span className="vertical-timeline-element-date">
                  Jul 2022 - Jan 2023
                </span>
              </div>
            </div>
            <div id="" className="vertical-timeline-element">
              <span className="vertical-timeline-element-icon bounce-in bg-white bg-opacity-15 text-lg"></span>
              <div className="vertical-timeline-element-content bounce-in bg-white bg-opacity-5 border border-gray-200 shadow-none text-left py-5 px-8">
                <div className="vertical-timeline-element-content-arrow border-r-4 border-white border-opacity-50"></div>
                <h3 className="font-semibold capitalize">Software Developer</h3>
                <p className="font-normal !mt-0">
                  Tata Consultancy Services, Hyderabad
                </p>
                <p className="!mt-1 !font-normal text-red-700 dark:text-white/75">
                  Designed user interfaces, integrated new features into web
                  applications, and utilized ReactJS and RESTful principles.
                  This effort enhanced team efficiency by 20% and minimized bug
                  reports by 30% through the application of agile development
                  methodologies.
                </p>
                <br />
                <span className="vertical-timeline-element-date">
                  Feb 2023 - present (open to full-time opportunities)
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="opacity-100 transform-none bg-red-200 my-10 h-16 w-1 rounded-full block dark:bg-opacity-20"></div>
        <section
          id="contact"
          className="opacity-100 mb-20 sm: w-[min(100%,38rem)] text-center scroll-mt-28"
        >
          <h2 className="text-3xl font-medium capitalize mb-8 text-center">
            <div className="flex items-center justify-center">Contact me</div>
          </h2>
          <p className="text-red-700 -mt-6 dark:text-white/80">
            Please contact me through this form. You can also email me directly
            at &nbsp;
            <a className="underline" href="mailto:karthikeya0800@gmail.com">
              karthikeya0800@gmail.com
            </a>
            .
          </p>
          <form
            ref={form}
            className="mt-10 flex flex-col dark:text-black"
            action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you're trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            onSubmit={sendEmail}
          >
            <input
              className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              type="email"
              required=""
              maxLength="500"
              placeholder="Your email"
              name="senderEmail"
            />
            <textarea
              className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="message"
              placeholder="Your message"
              required=""
              maxLength="5000"
              spellCheck="false"
            ></textarea>
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-red-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-red-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
            >
              Submit
            </button>
            {successVisible || failureVisible ? (
              <div
                className={`fixed text-sm md:text-md top-5 mt-14 right-5 w-60 md:w-80 p-4 rounded-md shadow-md ${
                  successVisible
                    ? "bg-green-500"
                    : failureVisible
                    ? "bg-red-500"
                    : ""
                } transition-transform duration-500 transform translate-y-0`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-white">
                    {successVisible
                      ? "Message Sent Successfully"
                      : failureVisible
                      ? "Failed to Send Message"
                      : ""}
                  </p>
                  <button
                    onClick={() => {
                      setSuccessVisible(false);
                      setFailureVisible(false);
                    }}
                    className="text-white"
                  >
                    &#x2715;
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </form>
        </section>
      </main>
      <footer className="pb-5 px-4 text-center text-gray-200">
        <small className="mb-2 block text-xs">
          © 2024 Karthikeya.{" "}
          <a
            href="https://github.com/karthikeya0800/Portfolio"
            target="_blank"
            className="font-bold underline"
          >
            GitHub
          </a>
        </small>
        <p className="text-xs">
          Built with React, JavaScript, Tailwind CSS, Email JS &amp; Firebase
          hosting.
        </p>
      </footer>
    </div>
  );
}
