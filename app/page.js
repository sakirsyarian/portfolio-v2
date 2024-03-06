import Link from "next/link";
import Image from "next/image";

import { useFetch } from "@/hook/useFetch";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Action from "@/components/Action";
import SkillList from "@/components/SkillList";
import ProjectList from "@/components/ProjectList";

export default async function Home() {
  const { data: about } = await useFetch("about");

  return (
    <>
      {/* header */}
      <Navbar />

      {/* content */}
      <div className="container">
        {/* hero */}
        <div className="space-y-10 pb-24 pt-24">
          <div className="space-y-8 text-center">
            <div className="text-4xl font-bold lg:text-5xl">
              <h1 className="leading-snug">
                Hey there, I&apos;m Sarian. <br className="hidden md:block" />
                <span className="text-[#69B4FF]">Full Stack Developer</span>
              </h1>
            </div>

            <div className="mx-auto space-y-5">
              <p className="mx-auto w-auto lg:w-4/6">
                {about.attributes.description}
              </p>

              <div className="flex justify-center gap-3">
                <Button className="bg-[#69B4FF] hover:bg-[#409fff] dark:bg-[#69B4FF] dark:text-white dark:hover:bg-[#409fff]">
                  <Link
                    href="https://linkedin.com/in/sakirsyarian/"
                    target="_blank"
                  >
                    Linkedlln
                  </Link>
                </Button>
                <Button className="dark:bg-[#2D2D2D] dark:text-white dark:hover:bg-[#2D2D2D]">
                  <Link href="#projects">Projects</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              className="h-96 w-full rounded-lg bg-center object-cover"
              src={about.attributes.image.data.attributes.url}
              alt="about"
              width={1024}
              height={768}
              priority={true}
            />
          </div>
        </div>

        {/* skill */}
        <div className="space-y-8 py-24">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold">My Skills</h2>
            <p>Tools and frameworks that I frequently use in my projects</p>
          </div>

          <div className="md:grid-col-6 grid grid-cols-2 gap-5 lg:grid-cols-8">
            <SkillList />
          </div>
        </div>

        {/* project */}
        <div id="projects" className="space-y-8 py-24">
          <div className="space-y-5 text-center">
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
            <p>
              Please take a moment to explore my recent projects and discover
              what I&apos;ve been busy working on!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <ProjectList limit={2} />
          </div>

          <div className="flex justify-center">
            <Link href="/projects">
              <Button className="dark:bg-[#2D2D2D] dark:text-white dark:hover:bg-[#2D2D2D]">
                View all
              </Button>
            </Link>
          </div>
        </div>

        {/* cta */}
        <Action />
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
