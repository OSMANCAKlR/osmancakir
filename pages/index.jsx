import Head from "next/head";
import Image from "next/image";
import simplydetail from "../assets/simplydetail.jpg";
import beyhansbakery from '../assets/beyhansbakery.jpg'
import reactlibrary from '../assets/reactlibrary.jpg'
import Contact from "@/components/contact";
export default function Home() {
  return (
    <>
      <Head>
        <title>Osman Cakir</title>
        <meta
          name="description"
          content="Explore my portfolio showcasing my diverse skills in design and creativity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="landing">
          <div className="container">
            <div className="row">
              <div className="landing__text--container">
                <h1 className="landing__title">HEY, I'M OSMAN CAKIR</h1>
                <p className="landing__para">
                  As a Frontend Web Developer, my goal is to develop visually
                  striking user interfaces that elevate the overall
                  functionality of websites and web applications.
                </p>
                <a href="/#projects">
                <button className="landing__button">Projects</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="aboutus__title--wrapper">
                <h2 className="about__title">ABOUT ME</h2>
                <span className="line"></span>
                <p className="about__para">
                  I'm a frontend web developer who loves creating visually
                  stunning user interfaces. Explore my experience in designing
                  websites and applications, and my drive to improve my
                  programming and technology skills.
                </p>
              </div>
              <div className="aboutus__wrapper">
                <div className="aboutus__left">
                  <h3 className="aboutus__left--title">Get to know me!</h3>
                  <p className="aboutus__left--para">
                    As a frontend web developer, my goal is to build stunning
                    user interfaces that drive the success of websites and web
                    applications. Check out some of my projects to see my work
                    in action. I also enjoy sharing my web development knowledge
                    with others, so feel free to connect with me on LinkedIn
                    where I post useful content related to programming and web
                    development. I'm actively seeking job opportunities that
                    allow me to contribute, learn, and grow. If you have an
                    opportunity that matches my skills and experience, don't
                    hesitate to contact me.
                  </p>
                  <a href="#contact">
                    <button className="about__button">contact</button>
                  </a>
                </div>
                <div className="aboutus__right">
                  <h3 className="aboutus__right--title">My Skills</h3>
                  <div className="aboutus__skills--container">
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">React</div>
                    <div className="skill">GIT</div>
                    <div className="skill">Github</div>
                    <div className="skill">Responsive Design</div>
                    <div className="skill">NextJS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container">
            <div className="row">
              <div className="projects__title--wrapper">
                <h2 className="projects__title">PROJECTS</h2>
                <span className="line"></span>
                <p className="projects__para">
                  Here you will find my personal and client projects
                </p>
              </div>
              <div className="projects__wrapper">
                <figure>
                  <Image src={simplydetail} width={690} />
                </figure>
                <div className="projects__text--wrapper">
                  <h4 className="projects__text--title">Simply Detail</h4>
                  <p className="projects__text--para">
                    Simply Detail was developed from the ground up, utilizing
                    NextJS to deliver an innovative and dynamic website for a
                    client. The final product, now in production, seamlessly
                    showcases the client's products and services, while
                    emphasizing their brand identity and adhering to the latest
                    web design standards.
                  </p>
                  <button className="projects__button">See More</button>
                </div>
              </div>
              <div className="projects__wrapper">
                <figure>
                  <Image src={beyhansbakery} width={690} />
                </figure>
                <div className="projects__text--wrapper">
                  <h4 className="projects__text--title">Beyhan's Bakery</h4>
                  <p className="projects__text--para">
                    This was a personal project for my mum, an online bakery
                    store that was built from scratch on NextJS and is now live.
                    The website is designed to showcase her baked goods and
                    allow customers to easily place orders for pickup or
                    delivery. With a user-friendly interface and efficient
                    checkout process, the website provides a seamless shopping
                    experience. The use of NextJS enabled efficient development
                    and deployment, ensuring a high-performance website that can
                    handle high traffic and orders
                  </p>
                  <button className="projects__button">See More</button>
                </div>
              </div>
              <div className="projects__wrapper">
                <figure>
                  <Image src={reactlibrary} width={690} />
                </figure>
                <div className="projects__text--wrapper">
                  <h4 className="projects__text--title">React Library</h4>
                  <p className="projects__text--para">
                    React Library is a project that I developed
                    while learning React. It features a dynamic cart system and
                    implements skeleton loading states to provide a smooth and
                    seamless user experience. The library contains various UI
                    components, including buttons, forms, menus, and more, as
                    well as utility functions for data manipulation and
                    validation. 
                  </p>
                  <button className="projects__button">See More</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <div className="row">
            <div className="contact__title--wrapper">
                <h2 className="contact__title">Contact</h2>
                <span className="line"></span>
                <p className="contact__para">
                To reach me, please take a moment to complete the contact form below. I will get back to you as soon as possible.
                </p>
              </div>
              <Contact/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
