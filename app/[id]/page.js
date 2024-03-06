import Image from "next/image";
import { marked } from "marked";

import anchor from "@/lib/anchor";
import { useFetch } from "@/hook/useFetch";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectList from "@/components/ProjectList";

export default async function DetailProject({ params }) {
  const { data: detailProject } = await useFetch(`projects/${params.id}`);

  return (
    <>
      <Navbar />
      <div className="container">
        {/* hero */}
        <div className="space-y-10 pb-12">
          <Image
            className="h-96 w-full bg-center bg-no-repeat object-cover"
            src={detailProject.attributes.image.data.attributes.url}
            alt="project"
            width={400}
            height={400}
          />

          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-semibold">
              {detailProject.attributes.name}
            </h2>

            <div className="space-y-8">
              <span className="rounded border px-2 py-1 text-xs">
                {detailProject.attributes.tag}
              </span>

              <div className="flex gap-10 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold">Website</p>
                  <div className="dark:text-gray-200">
                    {anchor(detailProject.attributes.website)}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Github</p>
                  <div className="dark:text-gray-200">
                    {anchor(detailProject.attributes.github)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div
          className={"space-y-5"}
          dangerouslySetInnerHTML={{
            __html: marked(detailProject.attributes.content),
          }}
        />

        {/* project */}
        <div className="space-y-8 py-24">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold">Other Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <ProjectList limit={2} id={params.id} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
