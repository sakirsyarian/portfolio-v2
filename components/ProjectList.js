import Link from "next/link";
import Image from "next/image";

import { useFetchAll } from "@/hook/useFetch";

export default async function ProjectList({ limit, id }) {
  const { data: projects } = await useFetchAll("projects");

  const filterProjects = projects.filter((project) => project.id !== +id);
  const limitedProjects = filterProjects.slice(0, limit);

  return (
    <>
      {limitedProjects.map((project) => (
        <div
          key={project.attributes.name}
          className="space-y-5 rounded-lg p-5 dark:bg-[#2D2D2D] dark:text-white lg:p-8"
        >
          <Image
            className="mx-auto w-full rounded-lg object-cover"
            src={project.attributes.image}
            alt={project.attributes.name}
            width={400}
            height={400}
          />

          <p className="font-semibold">{project.attributes.name}</p>
          <div className="text-xs">
            <span className="rounded border px-2 py-1 text-xs">
              {project.attributes.tag}
            </span>
          </div>
          <p>{project.attributes.description}</p>

          <div className="text-sm underline underline-offset-4">
            <Link href={`/${project.id}`}>View project</Link>
          </div>
        </div>
      ))}
    </>
  );
}
