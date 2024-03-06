import Image from "next/image";
import { useFetchAll } from "@/hook/useFetch";

export default async function SkillList() {
  const { data: skills } = await useFetchAll("skills");

  return (
    <>
      {skills.map((skill) => (
        <div
          key={skill.attributes.name}
          className="space-y-2 rounded-lg bg-[#2D2D2D] p-5 text-center text-white"
        >
          <Image
            className="mx-auto"
            src={skill.attributes.image}
            alt={skill.attributes.name}
            width={50}
            height={50}
          />

          <p>{skill.attributes.name}</p>
        </div>
      ))}
    </>
  );
}
